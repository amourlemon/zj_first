const path = require('path');
// 以大写开头，说明是一个类文件
module.exports = {
  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    // 指定资源输出文件位置，可以具体的指定到文件名称
    // assetModuleFilename: 'img/test.png'
    // 指定到 src/assets/img 文件下，名称是hash值， ext 表示扩展名
    assetModuleFilename: 'img/[contenthash][ext]',
    // publicPath: 'http:localhost:8080/'
  },
  mode: 'development',
  // 精准定位文件报错信息
  devtool: 'inline-source-map',
  devServer: {
    static: './dist'
  },
}