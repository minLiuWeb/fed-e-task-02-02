// prod环境配置,主要增加的功能为(1) 拷贝public (2) 清除dist (3) 增加devtool为none
var path = require('path')
const { merge } = require('webpack-merge')
var commonConfig = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = merge(commonConfig,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname,'public/favicon.ico'),
                    to: path.join(__dirname,'dist')
                  }
            ]
        }),
    ],
    devtool:'none'
})