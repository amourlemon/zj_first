function foo() {
    console.log(this);
}

var obj1 = {
    name: 'obj1',
    fn: foo,
}

foo.call(obj1);
foo.apply(obj1);


// call 和 apply 的不同
function add(num1,num2) {
    console.log(num1+num2, this);
}

add.call('call', 12, 12);
add.apply('apply', [12, 12])

