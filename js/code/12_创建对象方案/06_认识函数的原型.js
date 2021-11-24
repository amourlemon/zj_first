// 函数也是对象， 所以函数存在隐式原型 __proto__
// 同时，函数也是函数，所以也存在一种显示原型 prototype

var obj = {
    name: 'zs',
}

function foo() {
    // 当作为构造函数时的模拟
    // 1. 生成一个新的对象
    // 2. this 绑定这个新的对象
    // 3. 执行代码
    // 4. 将函数的这个显示原型赋值给这个对象的 隐式原型
    // 5. 将这个对象返回

}

console.log(foo.prototype);

var f1 = new foo();
var f2 = new foo();

console.log(f1.__proto__ === foo.prototype);
console.log(f2.__proto__ === foo.prototype);
