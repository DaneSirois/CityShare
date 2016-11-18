const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');

const app = require('http').createServer();
const io = require('socket.io').listen(app);
const socket_server = require('./sockets')(io);

app.listen(3000);

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
