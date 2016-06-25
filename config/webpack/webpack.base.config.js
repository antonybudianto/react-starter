var path = require('path');

var paths = require('../core/paths');

var APP_DIR = path.join(process.cwd(), paths.app);

module.exports = {
    entry: APP_DIR + '/main.js',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                include: APP_DIR,
                exclude: /node_modules/
            }
        ]
    }
};
