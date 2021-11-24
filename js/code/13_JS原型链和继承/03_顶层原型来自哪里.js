var obj1 = {};

var obj2 = new Object();

// 两者创建的对象是等价的
// 也就是说 在执行构造函数 Object 时，返回的对象的__proto__ 指向了
// 构造函数 Object 的 prototype

console.log(obj1.__proto__ === Object.prototype);
console.log(obj2.__proto__ === Object.prototype);
console.log(obj2.__proto__ === obj1.__proto__);