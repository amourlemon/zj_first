// 在 ES6 之前  window 对象就是 go 对象

var message = 'Hello, world';
console.log(window.message);

//  ES6 之后，window 和 go 对象分离，但是由 var 关键字定义的全局变量，会在 window 中变化

window.school = 'ytu';
console.log(school);

let address = 'sh';
console.log(window.address);  // undefined