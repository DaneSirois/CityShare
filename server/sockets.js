const util = require('util');

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

    socket._user = {
      id: socket.id,
      username: "Anonymous",
    };

    inspect(socket);

   
    socket.on('action', (action) => {
      switch (action.type) {
        case 'server/NEW_MESSAGE':
          break;
      }
    });

    socket.on('disconnect', function(){
      console.log("Socket disconnected");
    });
  });
};