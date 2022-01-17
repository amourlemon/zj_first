// require 导出格式为 require(X)
// 情况一：X 为 Node 的核心模块，比如 path， http 等等
// const path = require('path');
// path.resolve();
// path.extname();


// const fs = require('fs');
// fs.readFile()

// // 情况二： X 为路径
// const abc = require('./abc')
// console.log(abc.name);

// 情况三：X 既不是node的核心模块，也不是路径

console.log(module.paths);
// [
//     'D:\\data\\study\\js\\code\\zj_first\\js\\code\\30_JS模块化解析\\02_CommonJS\\04_require细节\\node_modules',
//     'D:\\data\\study\\js\\code\\zj_first\\js\\code\\30_JS模块化解析\\02_CommonJS\\node_modules',
//     'D:\\data\\study\\js\\code\\zj_first\\js\\code\\30_JS模块化解析\\node_modules',
//     'D:\\data\\study\\js\\code\\zj_first\\js\\code\\node_modules',
//     'D:\\data\\study\\js\\code\\zj_first\\js\\node_modules',
//     'D:\\data\\study\\js\\code\\zj_first\\node_modules',
//     'D:\\data\\study\\js\\code\\node_modules',
//     'D:\\data\\study\\js\\node_modules',
//     'D:\\data\\study\\node_modules',
//     'D:\\data\\node_modules',
//     'D:\\node_modules'
//   ]