const path = require('path');
// 以大写开头，说明是一个类文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin")
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    // 指定资源输出文件位置，可以具体的指定到文件名称
    // assetModuleFilename: 'img/test.png'
    // 指定到 src/assets/img 文件下，名称是hash值， ext 表示扩展名
    assetModuleFilename: 'img/[contenthash][ext]'
  },
  mode: 'development',
  // 精准定位文件报错信息
  devtool: 'inline-source-map',

  // 插件管理
  plugins: [
    new HtmlWebpackPlugin({
      // 在 dist 文件夹中生成与其关联的 html 文件
      template: './index.html',
      // dist 文件生成的 html 文件名
      filename: 'app.html',
      // dist 文件夹生成的html文件中， script 文件引用的位置
      inject: 'body'
    }),
    new MiniCssExtractPlugin({
      filename: 'style/[contenthash].css'
    })
  ],

  devServer: {
    static: './dist'
  },


  module: {
    rules: [
    {
      test: /\.png$/,
      type: 'asset/resource',
      //指定生成文件的位置，优先级高于 output 中的 assetModulenFilename
      generator: {
        filename: 'imges/[contenthash][ext]'
      }
    },
    {
      test: /\.svg$/,
      type: 'asset/inline'
    },
    {
      test: /\.txt$/,
      type: 'asset/source'
    },
    {
      test: /\.jpg$/,
      // 通用数据类型
      type: 'asset',
      parser: {
        dataUrlCondition: {
          // 文件大于 4m 才会编译， 当文件不满足条件时，图片的Url 是以 data64 的形式引入的
          maxSize: 4 * 1024 * 1024
        }
      }
    },
    {
      test: /\.(css|less)$/,
      // use: ['style-loader', 'css-loader', 'less-loader']
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
    }]
  },


  // 优化
  optimization: {
    minimizer: [
      new CssMinimizerWebpackPlugin()
    ]
  }
}