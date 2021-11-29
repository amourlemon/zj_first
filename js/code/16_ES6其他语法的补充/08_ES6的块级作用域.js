// ES 6 的块级作用域 对 var 关键字声明的变量不起作用
// 只对 let/const function（特殊） class 起作用

{
    let name = 'zs';
    const age = 23;
    function foo() {
        console.log('foo');
    }
    class Person {}
}

console.log(name);  // 不生效
console.log(age); // 不生效
foo(); // 部分浏览器为了适配之前的代码，会生效
var p1 = new Person(); // 不生效