// dev环境配置,主要增加devServer可以引入静态资源、HRM热更新

const { merge } = require('webpack-merge')
var commonConfig = require('./webpack.common.js')
module.exports = merge(commonConfig,{
    mode:'development',
    devServer: {
        contentBase: ['./public'], //在dev环境中增加访问静态资源功能
        hot: true // 开启热替换
    },
})