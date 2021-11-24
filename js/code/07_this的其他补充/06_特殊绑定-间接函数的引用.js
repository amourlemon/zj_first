var obj = {
    name: 'sc',
    fn: function() {
        console.log(this);
    }
};

var obj2 = {
    name: 'csc'
};

(obj2.foo = obj.fn)();  //  window  独自调用

obj2.foo = obj.fn;
obj2.foo(); // 绑定的是  obj2