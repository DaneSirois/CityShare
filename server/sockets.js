const utilities_module = require('./utilities.js');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const util = require('util');
const bcrypt = require('bcrypt');
const knex = require('knex')({
  client: 'postgresql',
  connection: {
    host : 'ec2-23-23-225-81.compute-1.amazonaws.com',
    user : 'zkqtyekbnttwgv',
    password : 's4DwVTvb5tgsOqOBdQaiBc7HKf',
    database : 'de1lpea4frrcvo',
    port: 5432,
    ssl: true
  }
});

const inspect = (o, d = 1) => {
  console.log(util.inspect(o, { colors: true, depth: d }));
};

// Socket IO:
module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    const emit__action = (type, payload) => socket.emit('action', { type, payload });
    const broadcast__action = (type, payload) => io.emit('action', { type, payload });
    
    // GET CHANNELS ON CONNECT
    knex('channels').select().then((channels) => {
      emit__action('GET_CHANNELS', channels);
    })

    const generateJWT = function (id, name) {
      const JWT = jwt.sign({
        data: {
          user_id: id,
          username: name
        }
      }, process.env.SECRET_JWT_KEY, { expiresIn: '1h' });
      return JWT;
    };

    socket.on('action', (action) => {
      const today = new Date().toJSON().slice(0,10)
      switch (action.type) {
        case 'socket/INITIALIZE_USER':

          if (action.payload !== undefined) { // If token was found in localStorage:
            const user_JWT = action.payload; // Cache payload as 'user_JWT';
            
            console.log('init action from payload check', user_JWT);

            jwt.verify(user_JWT, process.env.SECRET_JWT_KEY, function(err, decoded) { // Check validity of token;
              if (err) { // If token is invalid:
                socket._user = null;
                emit__action('LOGOUT_USER', false);
                emit__action('RENDER_APP', true);
              } else { // If token IS valid:
                emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
                emit__action('SET_USERNAME', decoded.username);
                emit__action('RENDER_APP', true);
              } 
            });
          } 
          // If no token was found, set 'state.User.loggedIn = false':
          emit__action('RENDER_APP', true);
          emit__action('LOGOUT_USER', false);
        break;
        case 'socket/SIGNUP_USER':
          const userCreds = action.payload;

          console.log("HEY FROm SIGNUP");

          bcrypt.hash(userCreds.password, 10, (err, hash) => {
            knex('users').insert({
              name: userCreds.username,
              password_digest: hash,
              email: userCreds.email,
            }).returning('id', 'name').then((user) => {
              const user_JWT = generateJWT(user.id, user.name);
              socket._user = {id: user.id, username: user.name, JWT: user_JWT};

              emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
              emit__action('SET_USERNAME', user.name);
              emit__action('RENDER_APP', true);
            });
          });
        break;
        case 'socket/LOGIN_USER':
          const userInput = action.payload;
          const creds = action.payload;
          knex('users').select().where('name', creds.name).then((user) => {
            if (bcrypt.compareSync(creds.password, password_digest)) {
              const user_JWT = generateJWT(user.id, user.name);
              socket._user = {id: user.id, username: user.name, JWT: user_JWT};

              emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
              emit__action('SET_USERNAME', user.name);
            }
          }); 
        break;
        case 'socket/LOGOUT_USER':
          socket._user = null;
          emit__action('LOGOUT_USER', false);
          emit__action('SET_USERNAME', "Anonymous");
        break;
        case 'socket/NEW_MESSAGE':
          knex('messages').insert({
            message_text: action.payload,
            user_id: 1,
            channel_id: 21
          }).then((result) => {
            console.log(result);
          });
          broadcast__action('ADD_TO_CHATLOG', action.payload);
        break;
        case 'socket/NEW_UPDATE':
          knex('updates').insert({
            content: action.payload.content,
            topic_id: action.payload.topic_id, // FIIIIIIXXXXX THIIIIISSSS
            created_at: today,
            updated_at: today
          }).returning('id').then((update_id) => {
            broadcast__action('ADD_UPDATE', {
              id: update_id[0],
              content: action.payload.content,
              topic_id: action.payload.topic_id, // CHANGE THIS
              date: new Date()
            });
          });
        break;
        case 'socket/NEW_TOPIC':
          knex('topics').insert({
            name: action.payload,
            channel_id: 21, // FIIIIIIXXXXX THIIIIISSSS
            created_at: today,
            updated_at: today
          }).returning('id').then((topic_id) => {
            broadcast__action('ADD_TOPIC', {
              id: topic_id[0],
              name: action.payload,
              date: new Date(),
              channel_id: 21}); // CHANGE THIS
          })
        break;
        case 'socket/NEW_CHANNEL':
          const channelData = action.payload;
          knex('channels').select('id').where('name', channelData.name)
          .then((result) => {
            if (result.length) {
              console.log('Channel already exists!');
            } else {
              knex('channels').insert({
                name: channelData.name,
              }).returning('id').then((channel_id) => {
                channelData.tags.forEach((tag_name) => {
                  knex('tags')
                  .select('id')
                  .where('name', tag_name)
                  .then((tag_id) => {
                    if (tag_id.length) {
                      knex('tag_channel').insert({
                        tag_id: tag_id[0].id,
                        channel_id: channel_id[0]
                        }).then((result) => {
                        });
                    } else {

                      knex('tags').insert({
                        name:tag_name
                      }).returning('id').then((tag_id) => {
                        knex('tag_channel').insert({
                        tag_id: tag_id[0],
                        channel_id: channel_id[0]
                        }).then((result) => {
                        });
                      })
                    }
                  });
                })
                broadcast__action('NEW_CHANNEL', action.payload);
              });
            }
          })
        break;

      }
    });
    socket.on('disconnect', function(){
      console.log("Socket disconnected");
    });
  });
};