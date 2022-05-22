const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './app.js',

  devServer: {
    static: path.resolve(__dirname, './dist'),
    compress: true,
    host: '0.0.0.0',
    port: 3000,
    headers: {
      'X-Access-Token': 'abc123'
    },
    proxy: {
      // '/api': 'http://localhost:9000'
      '*': {
        "target": "http://localhost:9000/",
        "changeOrigin": true
      }
    },
    // 设置 https, 但是使用默认签名，导致被浏览器视为危险链接
    // https: true,
    // http2: true
  },

  plugins: [
    new HtmlWebpackPlugin()
  ]

}