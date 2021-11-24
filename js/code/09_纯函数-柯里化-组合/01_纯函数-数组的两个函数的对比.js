// 纯函数必须满足的两个条件: 
// 1. 相同的输入必须具有相同的输出
// 2. 不能引起函数外部的变化

// 数组函数中的  splice 和 slice

var arr = [23, 54, 34, 23, 86];
// slice 的取值范围是 左闭右开，并且返回一个新的函数，不会改变原有的数组
var newArr1 = arr.slice(0, 3);
console.log("newArr1:" + newArr1, "arr:" + arr);

// splice 改变了 原有的数组，因此 splice 不是纯函数
var newArr2 = arr.splice(0,2);
console.log("newArr2:" + newArr2, "arr:" + arr);

// 在实际的编程中，我们应该尽量的编写纯函数，其不会对外部产生影响，不容易出现 bug
