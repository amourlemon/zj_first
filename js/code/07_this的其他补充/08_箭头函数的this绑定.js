// // 箭头函数没有 this 关键字，需要去上一层作用域中寻找
// function foo() {
//     var age = 'ds';
//     setTimeout(() => {
//         console.log(this.age);
//     },2000)
// }

// // setTimeout()  不是一个函数 而是一个  Object

// foo();


// var obj = {
//     age: 12,
//     fn: function() {
//         setTimeout(() => {
//             console.log(this);
//         },2000)
//     }
// };
// obj.fn();

// obj.fn.call('vsd');

// 箭头函数 和 显示绑定
var boj2 =  {
    name: 'cs',
    fn: function() {
        return () => {
            console.log(this);
        }
    }
};

//   打印结果相同，因此 箭头函数 忽略 显示绑定
boj2.fn()();
boj2.fn().call('fsdf');