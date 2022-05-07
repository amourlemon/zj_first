const path = require('path');
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
module.exports = {
  output: {
    filename: 'scripts/[name].[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
    // 指定资源输出文件位置，可以具体的指定到文件名称
    // assetModuleFilename: 'img/test.png'
    // 指定到 src/assets/img 文件下，名称是hash值， ext 表示扩展名
    assetModuleFilename: 'img/[contenthash][ext]',
    // publicPath: 'http:localhost:8080/'
  },
  mode: 'production',
  // 优化
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin(),
      new TerserPlugin()
    ],
    splitChunks: {
      // chunks: 'all'
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
}