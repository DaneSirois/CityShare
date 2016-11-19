var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  devServer: {
    contentBase: "./app"
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.join(__dirname, './app/index.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/app/build/'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['css-loader?modules&camelCase=dashes'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      }
    ]
  }
}
