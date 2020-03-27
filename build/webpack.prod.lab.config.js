const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.base.config.js');
module.exports = merge(common, {
    entry: {
        lgViewShow: './lab/lab.js'
    },
    output: {
        path: path.resolve(__dirname, '../doc'),
        filename: '[name].[hash:8].min.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            { //加载less
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }

                    }, {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "less-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            { //加载scss
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                    },
                ]
            },
            { //加载css
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: { importLoaders: 1 }
                    },
                    'postcss-loader'
                ]
            }
        ]
    },
    plugins: [
        //替换 html的插件
        new HtmlWebpackPlugin({
            title: '',
            template: path.resolve(__dirname, '../lab/lab.html'),
            inject: 'body' // body,head
        }),
        //自定义全局环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'test.env': JSON.stringify('lab')
        }),
        //压缩
        new OptimizeCSSAssetsPlugin({}),
         //css 分离
         new MiniCssExtractPlugin({
            filename: '[name].min.css'
        }),
        //清除 /dist 文件夹
        new CleanWebpackPlugin({})
    ],
    mode: "development"
});