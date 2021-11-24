var obj = {
    age: 12,
    name: 'zhangsan',
    fn: function() {
        // console.log(age);  会直接报错
        console.log(this);
    }
}

obj.fn();  // 打印出  12
// 但是如果进行如下操作,表示的不是  将 fn 方法给 boo 此时 boo 打印出来的是 undefined
// var boo = obj.fn();

// 此时可以成功打印 fn 函数
 var boo = obj.fn;

console.log(boo);
boo();
