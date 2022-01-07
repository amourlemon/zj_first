// 在 node 中，每一个js文件都是一个模块
const name = '张三';
const age = 12;

function foo() {
    console.log('foo函数执行了');
}

module.exports = {
    name,
    age,
    foo
}