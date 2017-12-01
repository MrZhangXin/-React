/**
 * Created by lenovo on 2017/12/1.
 */

const webpack = require('webpack');
const path = require('path');
const config = {
    entry: __dirname+'/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'js/build.js'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}

module.exports = config