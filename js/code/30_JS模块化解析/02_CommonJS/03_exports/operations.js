// 在 node 中，每一个js文件都是一个模块
let name = '张三';
const age = 12;

function foo() {
    console.log('foo函数执行了');
}

// 源码
// module.exports = {};
// exports = module.exports
// 所以导出的实际上依旧是 module.exports
// 这样写实际上是为了符合 CommonJS社区中的规范, 但是在node下 已经很少使用


// 当 exports 没有更换引用时,执行导出操作仍旧会导出
exports.name = name;
exports.age = age;
exports.foo = foo;



// 下面的代码不会进行导出
// exports = {
//     name,
//     age,
//     foo
// }
// 如果上面的代码没有注释, 下面的也不会导出
// exports.name = name;
// exports.age = age;
// exports.foo = foo;