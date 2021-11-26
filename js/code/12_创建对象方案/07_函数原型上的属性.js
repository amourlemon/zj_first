function foo() {

}

console.log(foo.prototype);
// 函数的显式对象中有一个属性  constructor 指向函数本身
//  显示空对象的原因是  constructor 是不可以枚举的
console.log(Object.getOwnPropertyDescriptors(foo.prototype));


// 向函数的显式原型对象中添加新的属性
//  方法一：
var f1 = new foo();
foo.prototype.age = 20;
console.log(f1.age);
console.log(f1.constructor.name);

// 方法二： 创建一个新的显式原型对象，在内存中，原来的显式对象被删除
foo.prototype = {
    name: 'zs',
    age: 20,
    height: 1.88
}
console.log(f1.name);
// 定义构造函数的属性
Object.defineProperty(foo.prototype, 'constructor', {
    enumerable: false,
    value: foo,
    configurable: true,
    writable: true
})

console.log(Object.getOwnPropertyDescriptors(foo.prototype));
