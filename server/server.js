const app = require('express')();
var server = require('http').Server(app);
const io = require('socket.io')(server, {'reconnection': true});
const socket_server = require('./sockets')(io);


server.listen(3000);

app.get('/portal', function(req, res) {
	res.send('hello');
});