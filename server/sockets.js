const util = require('util');
const uuid = require('node-uuid');
const sanitizeHtml = require('sanitize-html');

const inspect = (o, d = 1) => {
  console.log(util.inspect(o, { colors: true, depth: d }));
  // return o;
};

// Socket IO:

var userCount = 0;


module.exports = function(io) {
  io.on('connection', (socket) => {
    console.log(`Socket connected: ${socket.id}`);

    const emit__action = (type, payload) => socket.emit('action', { type, payload });
    const broadcast__action = (type, payload) => io.emit('action', { type, payload });

    userCount += 1;
    io.emit('action', {type: 'USERCOUNT', payload: userCount});

    socket.user = {
      id: socket.id,
      username: "Anonymous",
      color: generateRandomColor()
    };


    socket.on('action', (action) => {
      switch(action.type) {
        case 'server/NEW_MESSAGE':
          let message = {
            id: uuid.v1(),
            username: socket.user.username,
            content: parseMessage(action.payload),
            color: socket.user.color,
            notification: ''
          }
          io.emit('action', {type: 'NEW_MESSAGE',
            payload: message
          });
          break;
        case 'server/SET_USERNAME':
          let notification = `${socket.user.username} has changed their username to ${action.payload.username}`
          socket.user.username = action.payload.username;
          socket.user.color = generateRandomColor();
          io.emit('action', {type: 'NEW_MESSAGE',
            payload: {
              id: uuid.v1(),
              notification: notification
            }
          });
          break;
        }
    });

    socket.on('disconnect', function(){
      userCount -= 1;
      io.emit('action', {type: 'USERCOUNT', payload: userCount});
    });
  });
}


function generateRandomColor() {
  let rand = Math.random();
  let color;
  if (0 <= rand && rand < 0.25) {
    color = 'red';
  } else if (0.25 <= rand && rand < 0.50) {
    color = 'green';
  } else if (0.50 <= rand && rand < 0.75) {
    color = 'blue';
  } else if (0.75 <= rand && rand < 1) {
    color = 'purple';
  }
  return color;
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