var path = require('path')
var VueLoaderPlugin = require('vue-loader/lib/plugin') // 页面中的css需要通过css-loader\js要通过babel-loader进行转换，使用rules里内容进行处理
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')

module.exports = {
    mode:'none',
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.join(__dirname,'dist'),
        filename: 'js/[name].[hash:6].js',
    },
    module:{
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.vue$/,
            loader: 'vue-loader'
        },{
            test: /\.less$/,
            use: ['style-loader','css-loader','less-loader'] // 先利用less转成css,然后用css载入css文件，然后用style将loader挂载到页面上

        },{
            test: /\.(png|gif|jpg)$/,
            use:{
                loader:'url-loader',
                options: {
                    limit: 4*1024,
                    esModule:false,//默认情况下，文件加载器生成使用ES modules语法的JS模块
                    name:'img/[name].[contenthash:6].[ext]'
                }
            }
        },{
            test: /\.css$/,
            use:['style-loader','css-loader']
        },{
            test: /\.(vue|js|jsx)$/,
            loader: 'eslint-loader',
            exclude:/node_modules/,
            enforce:"pre" //vue-loader处理之前，进行预处理
        }]
    },
    plugins:[
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'BASE_URL':'"/"'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html',
            title:'0202 work'
          }),
    ],
    devtool: 'source-map'
}
