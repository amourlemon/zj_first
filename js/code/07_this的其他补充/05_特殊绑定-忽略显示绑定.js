var obj = {};
function foo() {
    console.log(this);
};

var obj3 = undefined;
var a = '';

foo.call(obj); // 打印空对象
foo.call(null); // window
foo.call(undefined); // window
foo.call(obj3); // window
foo.call(a); // 绑定成功
foo.call(obj2); // 直接报错