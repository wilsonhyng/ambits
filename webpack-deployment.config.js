const path = require('path');
const webpack = require('webpack');

//Path for the bundle:
const BUILD_DIR = path.resolve(__dirname,'client/dist');
//Path for all jsx files:
const APP_DIR = path.resolve(__dirname,'client/src');

module.exports = {
  devtool: 'source-map',
  entry: APP_DIR + '/checkin/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: BUILD_DIR + '/assets'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      include: APP_DIR,
      exclude: APP_DIR + '/node_modules/',
      query: {
        presets: ['es2015', 'react', 'react-hmre']
      }
    }]
  },
};