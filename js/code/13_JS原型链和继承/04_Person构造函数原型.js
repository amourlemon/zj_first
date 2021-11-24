function Person(name, age) {
    this.name = name;
    this.age = age;
}

console.log(Person.prototype);
console.log(Object.getOwnPropertyDescriptors(Person.prototype));  // 虽然只打印出了 constructor
//   但是  Person.prototype  还包含着其他东西  比如 __proto__

console.log(Person.prototype.__proto__); // [Object: null prototype] {}  顶层原型
// 也就是说 构造函数的显式原型对象的原型 是 指向 构造函数 Object 的显示原型的
// 也就是说 Object 是所有对象的父类

console.log(Person.prototype.__proto__ === (new Object().__proto__));  // true