const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    //devtool:'source-map',
    module:{
        rules:[
            {
                test :/\.js$/,
                exclude : /node_modules/,
                use :{
                    loader : "babel-loader",
                    options : {
                        presets : ['@babel/preset-env']
                    },
                },
            },
            {
                test : /\.scss$/,
                use : ['style-loader', 'css-loader','postcss-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/i,
                type: 'asset/resource',
                include: path.resolve(__dirname, 'src/assets'),
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/images', to: 'images' }
            ]
        })
    ],
    devServer: {
        static: './dist',
        port: 5000,
        open: true,
        host: '0.0.0.0',
    },
}