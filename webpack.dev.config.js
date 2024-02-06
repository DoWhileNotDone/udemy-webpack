const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'index': './src/index.js',
        'image': './src/kiwi.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'development', //development|production|none
    devServer: {
        port: 9000,
        static: {
            directory: path.resolve(__dirname, './dist'),

        },
        devMiddleware: {
            index: 'index.html',
            writeToDisk: true,
        }
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ 
                            '@babel/env' ,
                        ],
                        plugins: [
                            '@babel/plugin-transform-class-properties',
                        ],
                    },
                },
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                },
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            chunks: [
                'index',
            ],
            template: path.resolve(__dirname, './index.hbs'),
            vars: {
                description: 'desc',
                title: 'Webpack Tutorial - Index',
            },
            minify: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'image.html',
            chunks: [
                'image',
            ],
            template: path.resolve(__dirname, './index.hbs'),
            vars: {
                description: 'desc',
                title: 'Webpack Tutorial - Image',
            },
            minify: false,
        }),
    ],
};