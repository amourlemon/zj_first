function foo() {

}

// 将 foo 的 prototype 赋值给 f1的 __proto__
const f1 = new foo()

const boo = () => {

}

console.log(boo.prototype); // undefined  因此箭头函数没有构造函数