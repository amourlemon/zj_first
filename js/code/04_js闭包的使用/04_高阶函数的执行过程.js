//  高阶函数指的是  参数是一个方法或者是返回的值是一个方法

function foo() {
    return function boo() {
        console.log("bbb");
    }
}
// 直接 调用 foo 不会显示任何的结果，只是为了获取 boo 函数对象而已
var test = foo();
// 调用 boo 函数
test();