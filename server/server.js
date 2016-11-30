const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);


server.listen(3000);

app.get('/upload', function(req, res) {
	res.send('working');
});