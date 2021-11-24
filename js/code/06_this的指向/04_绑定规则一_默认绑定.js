function foo() {
    console.log(this);
}

foo();

var obj = {
    name: 'zs',
    fn: foo,
}

var boo = obj.fn;
boo();