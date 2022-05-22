const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  plugins: [
      new HtmlWebpackPlugin({
          template: './index.html',
          title: 'webpack-multiple-pages',
          inject: 'body',
          filename: 'index.html',
          chunks: ['main']      
      }),
      new HtmlWebpackPlugin({
        template: './index2.html',
        title: 'webpack-multiple-pages',
        inject: 'body',
        filename: 'index2.html',
        chunks: ['main2']      
    })
  ],
  entry: {
      main: {
        //   单个文件不支持数组的模式
          import: './src/app.js',
          dependOn: 'lodash',
          filename: 'chanel1/[name].js'
      },
      main2: {
          import: './src/app2.js',
          filename: 'chanel2/[name].js'
      },
      lodash: 'lodash'
  },
  output: {
      clean: true,
  }
}