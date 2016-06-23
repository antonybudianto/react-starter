var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var paths = require('../core/paths');
var baseConfig = require('./webpack.base.config');

var SRC_DIR = path.join(process.cwd(), paths.src);

var config = {
  debug: true,
  devtool: '#eval-source-map',
  context: SRC_DIR,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './app/main'
  ],
  output: {
    path: SRC_DIR,
    filename: 'app/bundle.js'
  },
  module: {
      loaders: [
          {
              test: /\.js?$/,
              exclude: /node_modules/,
              include: SRC_DIR,
              loaders: ['react-hot', 'babel']
          },
          {
              test: /\.scss$/,
              loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
          }
      ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
    new HtmlWebpackPlugin({
      template: './app/index.html',
      inject: true
    })
  ]
};

module.exports = webpackMerge(baseConfig, config);
