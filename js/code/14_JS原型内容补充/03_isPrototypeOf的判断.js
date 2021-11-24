function Person() {}

var p = new Person()

console.log(p instanceof Person);
// 前者出没出现在后者的原型链上
console.log(Person.prototype.isPrototypeOf(p));

// 两者区别 ： 前者 必须是函数

var info = {
    name: 'zs'
}

var info2 = Object.create(info);

console.log(info.isPrototypeOf(info2));