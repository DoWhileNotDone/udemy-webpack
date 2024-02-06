const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        'index': './src/index.js',
        'image': './src/kiwi.js',
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '',
    },
    mode: 'production', //development|production|none
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
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
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
    ],
};