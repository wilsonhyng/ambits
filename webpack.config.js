var path = require('path');
var webpack = require('webpack');

//Path for the bundle:
var BUILD_DIR = path.resolve(__dirname,'client/dist');
//Path for all jsx files:
var APP_DIR = path.resolve(__dirname,'client/src');

module.exports = {
  entry: APP_DIR + '/checkin/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: APP_DIR,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};