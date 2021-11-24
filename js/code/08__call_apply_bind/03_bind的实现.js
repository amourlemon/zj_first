// 自定义 bind
// 需要返回一个函数
Function.prototype.zjbind = function(thisArg, ...argsArray) {
    // 1. 获取函数
    var fn = this;

    // 2. 处理 thisArg
    thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) : {};

    // 3. 执行函数
     function proxyFn(...args) {
        var res;
        thisArg.fn = fn;
        // 将两个数组拼接成一个新的数组
        var newArgsArray = [...argsArray, ...args];
        if(!newArgsArray) {
            res = thisArg.fn();
        } else {
            res = thisArg.fn(...newArgsArray);
        }
        // 返回的 res 是已经执行的 函数
        return res;
    } 
    return proxyFn;

}

function boo(){
    console.log(this);
}

//  系统 bind 的使用
var foo = boo.bind('dsdf');
foo();

function sum(num1, num2, num3, num4) {
    // console.log(this);
    console.log(num1, num2, num3, num4);
}

// 参数传递 方法一：
// var foo2 = sum.bind("dfs",19, 20, 30, 49);
// foo2();
// 参数传递 方法二：
// var foo2 = sum.bind();
// foo2(432, 54, 453, 543);

// 参数传递 方法三：
// 一定要绑定 this
// var foo2 = sum.bind('s', 23, 43);
// foo2(22,44);


var foo3 = boo.zjbind('fsd');
foo3();
var sumZjbind = sum.zjbind('fswwd', 32, 23, 3, 3);
sumZjbind();



