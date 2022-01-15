// 一定要加上 js 后缀（在 webpack 中不用加）
// import {
//     name,
//     age,
//     foo
// } from './foo.js'
// 这样引入的代码是同步执行的，如果想改成异步执行，可使用 import 函数

import('./foo.js').then(res => {
    console.log(res.name);
})
console.log('后面的代码不会立即执行吗');