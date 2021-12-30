const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: ['@babel/polyfill', path.resolve(__dirname, 'index.js')],
    output: {
        filename: 'bundle[fullhash].js',
        path: path.resolve(__dirname, 'dict'),
    },
    devServer: {
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /.[s]css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin(),
    ]
}