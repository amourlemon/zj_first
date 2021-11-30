// let/const 的使用在 字面上与 var 没有什么不同

let age = 20;
var name = '张三';
// 被 const 修饰的自变量是不可以改变的
const address = '山东';

age = 18; 
// address = '重庆';  //  Assignment to constant variable.

// 但是 如果 const 修饰的是 引用类型，那么可以修改引用类型中的属性

const obj = {
    name: '张三',
    age:  18
}

obj.age = 20;
console.log(obj);

obj = {} // TypeError: Assignment to constant variable