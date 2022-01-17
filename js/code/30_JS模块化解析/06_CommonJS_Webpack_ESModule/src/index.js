// 使用 ESModule 进行导入
// import {
//     name,
//     age
// } from './foo';
// console.log(name, age);

// 使用CommonJS导入
const foo = require('./foo');
console.log(foo.name, foo.age);