const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const app = require('express')();
var server = require('http').Server(app);
const io = require('socket.io')(server);
const socket_server = require('./sockets')(io);

server.listen(3000);

app.get('/portal', function(req, res) {
	res.send('hello');
});



new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}).listen(8080, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Running at http://0.0.0.0:8080');
});
