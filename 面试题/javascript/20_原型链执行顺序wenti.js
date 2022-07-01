var FUN = function() {
    function a() {
        console.log('a1');
    }

    function b() {
        console.log('b1');
    }

    function c() {
        console.log('c1');
    }

    var a = function() {
        console.log('a2');
    }

    var b = function() {
        console.log('b2');
    }

    var c = function() {
        console.log('c2');
    }
}

Object.prototype.a = function() {
    console.log('a3');
}

Function.prototype.b = function() {
    console.log('b3');
}

FUN.prototype.c = function() {
    console.log('c3');
}

var fun = new FUN();
console.log(fun);
fun.a();  // Object prototype
// fun.b();  在进行 new 的时候，没有进行任何操作， 并且fun 是一个对象， 不会找到 Function 的原型链
fun.c(); // 在进行 new 的时候， 生成的 fun 对象的隐式原型指向了 FUN.prototype
FUN.a();
FUN.b();
console.log(FUN.c); // 在沿着原型链去寻找的时候，产看自身没有 c，然后沿着 隐式原型去查找，找到Function的显示原型，而非自身的prototype，故为 undefined
// FUN.c();

function foo() {}

console.log(foo.__proto__ === Function.prototype)