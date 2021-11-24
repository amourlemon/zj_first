function foo() {
    console.log(this);
}

foo.call('abc');
foo.call('abc');
foo.call('abc');
foo.call('abc');
foo.call('abc');


// .bind 函数 就可以将一个函数生成一个  this 固定的新函数， 并且返回
var boo = foo.bind('csd');
boo();
