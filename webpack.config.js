const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool:'source-map',
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
                type: 'asset/resource', // salva como arquivo separado e retorna a URL
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        })
    ],
    devServer: {
        static: './dist',
        port: 5000,
        open: true,
        host: '0.0.0.0',
    },
}