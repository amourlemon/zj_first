// 每一个文件都是一个单独的模块
// 每一个模块都有一个 exports 对象属性
// exports 指向的对象都会被导出

const operations = require('./operations.js')

console.log(operations.name);
console.log(operations.age);
operations.foo();