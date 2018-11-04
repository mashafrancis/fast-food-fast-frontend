const path = require('path');

module.exports = {
    entry: {
        app: [
            'babel-polyfill',
            './src/menu.js',
            './src/auth.js',
            './src/index.js',
            './src/ui.js',
            './src/http.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js',
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['env', 'stage-0']
            }
        }]
    }
}