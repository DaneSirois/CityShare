
const utilities_module = require('./utilities.js');
require("dotenv").config();
const jwt = require('jsonwebtoken');
const axios = require('axios');
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

var userArray = [];


module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    const emit__action = (type, payload) => socket.emit('action', { type, payload });
    const broadcast__action = (type, payload) => io.emit('action', { type, payload });
    socket.userLocation = {};

    const generateJWT = function (id, name) {
      const JWT = jwt.sign({
        data: {
          user_id: id,
          username: name
        }
      }, process.env.SECRET_JWT_KEY, { expiresIn: '1h' });
      return JWT;
    };

    userArray.push(0);

    socket.on('action', (action) => {
      switch (action.type) {
        case 'socket/INITIALIZE_APP':


          // THIS NEVER GETS RAN, HENCE A TOKEN IS NEVER CACHED IN LOCALSTORAGE
          // Nevermind.. Token should still get created when they login or signup

          // Initialize User:
          if (action.payload !== undefined) { // If token was found in localStorage:
            const user_JWT = action.payload; // Cache payload as 'user_JWT';

            console.log('Confirmed presence of JWT in "INITIALIZE_APP" action. Contains:', user_JWT);

            jwt.verify(user_JWT, process.env.SECRET_JWT_KEY, function(err, decoded) { // Check validity of token;
              if (err) { // If token is invalid:

                console.log("Token is expired or there was some type of error with it. here is the error:", err);

                socket._user = null;
                emit__action('LOGOUT_USER', false);
                emit__action('RENDER_APP', true);
              } else { // If token IS valid:

                console.log("No error with token. User is at this point confirmed and their session is valid. Here is the contents of their token:", decoded);
                socket._user = {id: decoded.data.user_id, username: decoded.data.username, JWT: user_JWT};
                emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
                emit__action('SET_USERNAME', decoded.data.username);
                emit__action('SET_USER_ID', decoded.data.user_id);
                emit__action('RENDER_APP', true);
              }
            });
          }

          // Initialize Location:

          emit__action('RENDER_APP', true);
        break;
        case 'socket/FETCH_LOCATION':

          let locationData = action.payload.data;
          socket.userLocation.city = locationData.city;
          socket.userLocation.userip = locationData.query;
          socket.userLocation.timezone = locationData.timezone;
          socket.userLocation.done = true;
          knex('cities').select('id')
            .where({name: locationData.city})
            .then(function(result) {
              if (result.length) {

              socket.userLocation.id = result[0].id;
              } else {
                knex('cities').insert({
                  name: locationData.city
                }).returning('id').then((id) => {
                  socket.userLocation.id = id;
                });
              }
          });
          emit__action('ADD_LOCATION', socket.userLocation.city);
        break;
        case 'socket/GET_CHANNELS':
          //GETS HEADLINES

          // Replace channel ID whence socket came from with null upon
          // return to portal. Emit latest userArray to user.
          userArray.splice(userArray.findIndex((element) => {
            return element === Number(socket.channel_id);
          }), 1, 0);
          socket.channel_id = 0;
          broadcast__action('GET_USER_COUNT', userArray);

          // Emit channel info to user.
          knex('channels')
            .select()
            .where({
              city_id: socket.userLocation.id
            })
          .then((channels) => {
            //GETS MESSAGES
            knex('messages')
            .select()
            .then((messages) => {
              knex('topics')
              .select()
              .then((topics) => {
                socket.emit('action', { type: 'REFRESH_PORTAL', channels, messages, topics: topics.reverse()});
              });
            })
          })
        break;
        case 'socket/FETCH_CHANNEL_STATE':
          userArray.splice(userArray.findIndex((element) => {
            return element === Number(socket.channel_id);
          }), 1, Number(action.payload));
          socket.channel_id = Number(action.payload);
          broadcast__action('GET_USER_COUNT', userArray);
          knex('channels')
          .select()
          .where('id', action.payload)
          .then((result) => {
            emit__action('SET_CHANNEL_NAME', result[0].name);
            emit__action('GET_ADMIN_ID', result[0].admin_id);
          })
          knex('messages')
          .select()
          .where('channel_id', action.payload)
          .then((messages) => {
            emit__action('ADD_MESSAGES', messages)
          })
          knex('topics')
          .select()
          .where('channel_id', action.payload)
          .then((topics) => {
            let updatesBundle = []
            if (topics.length) {
              topics.forEach((topic, index, topics) => {
                knex('updates')
                .select()
                .where('topic_id', topic.id)
                .orderBy('created_at', 'desc')
                .then((updates) => {
                  if (updates.length) {
                    for (let i = 0; i < updates.length; i += 1) {
                      updatesBundle.push(updates[i]);
                    }
                    if (index == topics.length - 1) {
                      console.log("in the if");
                      emit__action('ADD_UPDATES', updatesBundle);
                      emit__action('ADD_TOPICS', topics.reverse());
                    }
                  } else if (index == topics.length - 1) {
                    emit__action('ADD_TOPICS', topics.reverse());
                    emit__action('ADD_UPDATES', updatesBundle);
                  }
                })
              })
            } else {
              emit__action('ADD_TOPICS', topics.reverse());
              emit__action('ADD_UPDATES', updatesBundle);
            }
          })
        break;
        case 'socket/SIGNUP_USER':
          const userCreds = action.payload;
          bcrypt.hash(userCreds.password, 10, (err, hash) => {
            knex('users').insert({
              name: userCreds.username,
              password_digest: hash,
              email: userCreds.email,
            }).returning('id').then((id) => {
              const user_JWT = generateJWT(id[0], userCreds.username);
              socket._user = {id: id[0], username: userCreds.username, JWT: user_JWT};

              console.log("User Signed Up. Created 'socket._user' with:", socket._user);

              emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
              emit__action('SET_USERNAME', userCreds.username);
              emit__action('SET_USER_ID', socket._user.id);
              emit__action('RENDER_APP', true);
            });
          });
        break;
        case 'socket/LOGIN_USER':
          const userInput = action.payload;
          const creds = action.payload;
          knex('users').select().where({'email': creds.username}).then((user) => {
            if (bcrypt.compareSync(creds.password, user[0].password_digest)) {
              const user_JWT = generateJWT(user[0].id, user[0].name);
              socket._user = {id: user[0].id, username: user[0].name, JWT: user_JWT};

              console.log("User Logged in. Created socket._user with:", socket._user);

              emit__action('USER_AUTHENTICATED', {JWT: user_JWT, loggedIn: true});
              emit__action('SET_USERNAME', socket._user.username);
              emit__action('SET_USER_ID', socket._user.id);
            }
          });
        break;
        case 'socket/LOGOUT_USER':
          console.log("About to try and logout the user by clearing it's session data/token:");
          console.log("socket._user before logout:", socket._user);
          socket._user = null;
          console.log("socket._user after logout:", socket._user);

          emit__action('LOGOUT_USER', false);
          emit__action('SET_USERNAME', "Anonymous");
          emit__action('SET_USER_ID', null);
        break;
        case 'socket/NEW_MESSAGE':
          // NOTIFIES TILE OF MESSAGE
          broadcast__action('MESSAGE_ALERT', action.payload.channel_id);

          // ADD MESSAGE TO DATABASE
          knex('messages').insert({
            message_text: action.payload.message_text,
            user_id: socket._user.id,
            username: socket._user.username,
            channel_id: action.payload.channel_id,
            created_at: new Date()
          }).then((result) => {
            broadcast__action('ADD_MESSAGE', {
              user_id: socket._user.id,
              username: socket._user.username,
              message_text: action.payload.message_text,
              channel_id: action.payload.channel_id,
              created_at: Number(new Date())
            });
          });
        break;
        case 'socket/NEW_UPDATE':
          knex('updates').insert({
            content: action.payload.content,
            topic_id: action.payload.topic_id, // FIIIIIIXXXXX THIIIIISSSS
            created_at: new Date(),
            updated_at: new Date()
          }).returning('id').then((update_id) => {
            broadcast__action('ADD_UPDATE', {
              id: update_id[0],
              content: action.payload.content,
              topic_id: action.payload.topic_id, // CHANGE THIS
              created_at: Number(new Date())
            });
          });
        break;
        case 'socket/FETCH_UPDATES':
          knex('updates').select().orderBy()
        break;
        case 'socket/NEW_TOPIC':
          knex('topics').insert({
            name: action.payload.name,
            img_url: action.payload.img_url,
            channel_id: action.payload.channel_id,
            created_at: new Date(),
            updated_at: new Date()
          }).returning('id').then((topic_id) => {
            let topic = {
              id: topic_id[0],
              name: action.payload.name,
              img_url: action.payload.img_url,
              created_at: new Date(),
              channel_id: action.payload.channel_id};
            broadcast__action('ADD_TOPIC', topic);
            knex('channels')
            .select()
            .where({
              city_id: socket.userLocation.id
            })
            .then((channels) => {
              knex('messages')
              .select()
              .then((messages) => {
                knex('topics')
                .select()
                .then((topics) => {
                io.emit('action', { type: 'REFRESH_PORTAL', channels, messages, topics: topics.reverse()});
                });
              });
            });
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
                color: channelData.color,
                admin_id: socket._user.id,
                city_id: socket.userLocation.id
              }).returning('id').then((channel_id) => {
                console.log(socket.userLocation.id);
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
      userArray.splice(userArray.findIndex((element) => {
        return element === Number(socket.channel_id);
      }), 1);
      io.emit('action', {type: 'GET_USER_COUNT', payload: userArray});
    });
  });
}

function parseMessage (message) {
  var formatted = message;
  var imageFileExtension = /([^\s]+\.(jpg|png|gif))/g;
  return {
    __html: sanitizeHtml(
        formatted.replace(imageFileExtension, (x) => {return '<img src="'+x+'">'}),
        {allowedTags: ['img']}
    )};
}