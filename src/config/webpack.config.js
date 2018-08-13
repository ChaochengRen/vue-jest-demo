const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');
const VueLoader = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "../app.js")
    },
    output: {
        path: path.resolve(__dirname, "../../dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.css$/,
            loader: 'css-loader'
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=1024'
        }]
    },
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                {from: /./, to: '/'}
            ]
        },
        hot: true,
        contentBase: path.resolve(__dirname, './dist'),
        compress: true,
        open: true,
        port: 9080
    },
    plugins: [
        new VueLoader(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            inject: true
        })
    ]
}