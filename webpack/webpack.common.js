const path = require('path');
// TODO: remove comments from glsl.mustache files

module.exports = {
    resolve: {
        alias: {
            'stats': path.resolve(__dirname, '../node_modules/stats.js/build/stats.min.js'),
            'stats.js': path.resolve(__dirname, '../node_modules/stats.js/build/stats.min.js')
        }
    },
    module: {

        rules: [
            {
                test: /\.(jpg|png)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'img/[hash][ext][query]'
                }
            },
            {
                test: /\.glsl.mustache$/,
                use: [
                    //{loader: 'strip-whitespace-loader'},
                    //{loader: 'webpack-comment-remover-loader'},
                    {loader: 'mustache-loader'},
                ]
            },
            {
                test: /\.glsl$/,
                use: [
                    {loader: 'webpack-glsl-loader'},
                    {loader: 'strip-whitespace-loader'},
                    {loader: 'webpack-comment-remover-loader'},
                ]
            }
        ]
    },
};