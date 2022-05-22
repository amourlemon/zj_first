const path = require('path');
// 以大写开头，说明是一个类文件
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  mode: 'none',

  // 插件管理
  plugins: [
    new HtmlWebpackPlugin({
      // 在 dist 文件夹中生成与其关联的 html 文件
      template: './index.html',
      // dist 文件生成的 html 文件名
      filename: 'app.html',
      // dist 文件夹生成的html文件中， script 文件引用的位置
      inject: 'body'
    })
  ]
}