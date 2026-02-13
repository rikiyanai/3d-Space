const {merge} = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    cache: false,
    devtool: 'inline-source-map',
    entry: './dev/dev.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'dev.js',
        clean: true,
    },
    resolve: {
        alias: {
            stats: path.resolve(__dirname, '../node_modules/stats.js/build/stats.min.js')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            filename: 'index.html',
            template: './dev/index.html',
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true,
        open: false,
    }
});
