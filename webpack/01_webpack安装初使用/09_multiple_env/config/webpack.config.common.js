// 以大写开头，说明是一个类文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 引入 json5 yaml toml 解析
const json5 = require('json5')
const toml = require('toml')
const yaml = require('yaml')
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'common'
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'common'
    // },
    // common: 'loadsh'
  },
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
    }),
  ],


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
      // 加载 css、less 等样式文件
      {
        test: /\.(css|less)$/,
        // use: ['style-loader', 'css-loader', 'less-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      // 加载字体文件
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
      // 加载 csv 文件
      {
        test: /\.csv$/,
        use: 'csv-loader'
      },
      // 加载 xml 文件
      {
        test: /\.xml$/,
        use: 'xml-loader'
      },
      // 加载 json5、yaml、toml 文件
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      },
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              ['@babel/plugin-transform-runtime', {
                "regenerator": true
              }]
            ]
          }
        }
      }
    ]
  },
}