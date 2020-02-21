const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


const common = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(common, {
    entry: {
        lgView: './lab/app.js'
    },
    output: {
        path: path.resolve(__dirname, '../app'),
        filename: '[name].min.js',
        library: 'lgView',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    devtool: 'source-map',
    module: {
        rules: [
            { //加载less
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
            template: path.resolve(__dirname, '../lab/app.html'),
            inject:'body' //标签插入到
        }),
        //自定义全局环境变量
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        //压缩
        new OptimizeCSSAssetsPlugin({}),
        //css 分离
        new MiniCssExtractPlugin({
            filename: '[name].min.css'
        })
    ],
    mode: "production"
});