// 一定要加上 js 后缀（在 webpack 中不用加）
import why from './foo.js'
// 在这里引用时， 不同于commonJS 中的 require，没有 引用即执行函数 这一现象 
console.log('default: ', why);