// ES 6 之前的函数的参数赋予默认值
function foo(m, n) {
    m = m || 'abc';
    n = n || 'sdd';
    console.log(m, n);
}
// 缺点：1.代码繁琐，不美观  2.容易出现 bug，比如参数传入的是 undefined/0/'',仍然会打印默认值
foo();

// ES5 无 bug
function goo() {
    var m =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "abc";
    var n =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "agg";
    console.log(m, n);
  }

// ES6 之后

function boo(m='abc', n='agg') {
    console.log(m, n);
}

boo();
boo('adf', 'fadf');
goo();

// 有默认值的参数尽量放在最后面
function baz(m, n = 12, x) {
console.log(m, n, x);
}
baz(undefined, 23, 24); //undefined 23 24

console.log(baz.length); // 1  baz 的参数个数只记录带有默认参数之前的

// 对象的默认值以及解构

function printInfo({name, age} = {name: '张三', age:23}) {
    console.log(name, age);
}

printInfo();
// 对象默认参数的另一种解构

function printInfo2({name='张三', age = 23} = {}) {
    console.log(name, age);
}
printInfo2();
