var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var paths = require('../core/paths');
var baseConfig = require('./webpack.base.config');

var BUILD_DIR = path.join(process.cwd(), paths.build.root);

var config = {
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },

    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
        new ExtractTextPlugin('public/style.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: paths.app + '/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
            inject: true
        })
    ]
};

module.exports = webpackMerge(baseConfig, config);
