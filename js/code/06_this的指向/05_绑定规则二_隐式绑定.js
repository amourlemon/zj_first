function foo() {
    console.log(this);
}

var obj = {
    name: 'ab',
    fn: foo,
}

obj.fn();  // 绑定的是 obj

 var obj1 = {
     name: 'obj1',
     fn: obj.fn
 }

 obj1.fn();  // 绑定的是  obj1