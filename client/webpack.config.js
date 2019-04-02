const webpack = require('webpack');
const path = require('path');



module.exports = {
    entry: {
        'App': './public/index.jsx',
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        name: [name].bundle.js
    }
}