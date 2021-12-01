// ES6 中的 展开运算符 可以在函数中使用，可以在构造数组中使用，也可以在字符串中使用

const names = ['张三', '李四', '王五']

function foo(x, y, z) {
    console.log(x, y, z);
}

newName = 'Hello'
// ES6 之前
foo.apply(null, names)
// 1. 展开运算符在函数中的使用
foo(...names)

// 展开字符串
foo(...newName)

// 2. 构造数组时

const newNames = [...names, ...newName];
for(const i of newNames) {
    // console.log(i);
}

// 3. 构建对象字面量时
const info = {
    name: '张三',
    age: 12
}

const obj = {...info, address: '上海', ...names}
console.log(obj);
