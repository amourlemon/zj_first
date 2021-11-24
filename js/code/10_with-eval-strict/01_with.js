// 在 es6 中，已经不推荐使用 with
var obj = {
    name: 'zhangsan',
    age: 12
}




// console.log(age); 报错

//  with 的作用 确认作用域(可以在函数中使用)
with(obj) {
    console.log(age);
}