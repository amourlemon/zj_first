function foo() {
    var name = "zhangsan";
    var age = 16;
    return function() {
        debugger;
        // 对于没有使用的 age 的自由变量，浏览器引擎自动优化掉
        console.log(name);
    }
}

var boo = foo();
boo();