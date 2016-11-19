var knex = require('knex')({
  client: 'postgresql',
  connection: {
    host : 'ec2-23-23-225-81.compute-1.amazonaws.com',
    user : 'zkqtyekbnttwgv',
    password : 's4DwVTvb5tgsOqOBdQaiBc7HKf',
    database : 'dellpea4frrcvo',
    port: 5432,
    ssl: true
  }
});
const util = require('util');
const bcrypt = require('bcrypt');
const inspect = (o, d = 1) => {
  console.log(util.inspect(o, { colors: true, depth: d }));
  // return o;
};

// Socket IO:
module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);
  
    const emit__action = (type, payload) => socket.emit('action', { type, payload });
    const broadcast__action = (type, payload) => io.emit('action', { type, payload });

    socket.on('action', (action) => {
      switch (action.type) {
        case 'socket/SIGNUP_USER':
          const userCreds = action.payload;
          bcrypt.hash(userCreds.password, 10, (err, hash) => {
            knex('users').insert({
              name: userCreds.username, 
              password_digest: hash, 
              email: userCreds.email
            }).then((result) => {
              emit__action('USER_AUTHENTICATED', action.payload);
            });
          });
        break;
        case 'socket/AUTHENTICATE_USER':
          const userInput = action.payload;
          bcrypt.compareSync(userInput.password, userInput.password);
          emit__action('ADD_TO_CHATLOG', action.payload);
        break;
        case 'socket/NEW_MESSAGE':
          broadcast__action('USER_AUTHENTICATED', action.payload);
        break;
      }
    });

    socket.on('disconnect', function(){
      console.log("Socket disconnected");
    });
  });
};