var path = require('path');

var paths = require('../core/paths');

var APP_DIR = path.join(process.cwd(), paths.app);

module.exports = {
    entry: APP_DIR + '/main.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: APP_DIR,
                loader: 'babel'
            }
        ]
    }
};
