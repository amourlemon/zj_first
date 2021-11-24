// 闭包在实现上是一个结构体，它存储了一个函数和一个关联的环境（相当于一个符号的查找表）

// 一个函数和其周围状态（lexical environment，词法环境）的引用捆绑在一起（或者说函数被引用包围），这样的组合就是闭包（closure）

// 也就是说，闭包让你可以在一个内层函数中访问到其外层函数的作用域

// 在JavaScript 中，每当创建一个函数，闭包就会在函数创建的同时被创建出来

function foo() {
    var name = '张三';
    return function boo() {
        console.log('aa',name);
    }
}

var test = foo();
test();
