// 人物属性
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EncodingPlugin = require('webpack-encoding-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js', // webpack入口

  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'output.js',
  },

  mode : 'development'  , // development为开发者环境，production为生产环境变量 ，还有一个为none

  /*妈的当时把p写成大写,找了半天bug*/
  plugins:[
    new HtmlWebpackPlugin({
    template:"./public/index.html"
  }),

]    //每次打包自动在dist添加选中的html文件
};

