// 一定要加上 js 后缀（在 webpack 中不用加）
// import {
//     fname,
//     fage,
//     ffoo
// } from './foo.js'

// 在这里引用时， 不同于commonJS 中的 require，没有 引用即执行函数 这一现象 

// import 引入方式一：
// import {
//     name,
//     age,
//     foo
// } from './foo.js'

// import 引入方式二：添加别名引入
// import {
//     name as fname,
//     age as fage,
//     foo as ffoo
// } from './foo.js'



// import 引入方式三： 使用 * 引用所有信息
import * as foo from './foo.js';

console.log(foo.name);
console.log(foo.age);