const webpack = require('webpack');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.base');
const { port } = require('./config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ],
            }
        ],
    },  
    devServer: {
        hot: true,
        port,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
});