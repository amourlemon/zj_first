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

// 方法二： 创建一个新的显式原型对象，在内存中，原来的显式对象被删除 (一定要放在 new 操作之前)
// 本例放在了 new 操作之后，所以函数的显示原型直接被覆盖了，但是 new 出来的新的对象的原型，并没有发生改变
foo.prototype = {
    name: 'zs',
    age: 20,
    height: 1.88
}
console.log(f1.name);  // undefined
// 定义构造函数的属性
Object.defineProperty(foo.prototype, 'constructor', {
    enumerable: false,
    value: foo,
    configurable: true,
    writable: true
})

console.log(Object.getOwnPropertyDescriptors(foo.prototype));
