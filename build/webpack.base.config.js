const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir);
}
module.exports = {
    module: {
        rules: [
            { //vue
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            { // 加载babel
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: file => ( //确保 JS 的转译应用到 node_modules 的 Vue 单文件组件
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            }
            ,
            
            { //加载图片
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            { //加载字体
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1556222  
                        }
                    }
                ]
            },
            { //加载数据
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }

        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    plugins: [
        new VueLoaderPlugin(),
    ]
}