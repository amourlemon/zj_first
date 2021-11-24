// 函数中的 this 的值与函数的所在位置没有关系
// 与函数被谁调用的有关系（！！！注意，函数是否被调用的标志是 函数名的后面有没有加括号）


function foo() {
    console.log(this);
}

// 方式一
foo();

// 方式二
var obj = {
    name: '张三',
    fn: foo,
}

obj.fn();

// 方式三
var boo = obj.fn;
boo();


// 方式四

foo.apply('abc');


