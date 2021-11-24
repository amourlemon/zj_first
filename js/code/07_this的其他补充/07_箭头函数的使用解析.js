// 箭头函数的简写 1
// 当箭头函数的参数只有一个时，可以将 （） 省略

var arr = [3,45,5];
arr.forEach(item => {
    console.log(item);
})

//  箭头函数的简写 2
// 当箭头函数的执行代码 只有一行时 可以将 {} 省略
// 并且将那一行代码return

arr.forEach( item => console.log(item * 2) );
var newArr = arr.filter( item =>  item % 5 === 0);
console.log('newArr:',newArr);

// 箭头函数的简写 3
// 只有一行代码，且返回的是一个对象

var obj = () => ( {name:'zs', age: 32} );
console.log(obj()); 