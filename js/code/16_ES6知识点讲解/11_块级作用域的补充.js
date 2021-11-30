// let 和 const 在 for 循环中的使用
const names = ['张三', '李四', '王五'];

for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// 实际的执行代码
// 三个函数代码块，拥有不同的函数作用域
//  {
//     let i = 0;
//      console.log(names[i]);
//      i++;
//  }

//  {
//     let i = 1;
//     console.log(names[i]);
//     i++;
// }

// {
//     let i = 2;
//     console.log(names[i]);
// }

// 因此  在进行 i++ 的操作时， 不能使用 const 对 i 进行定义

// for of 的使用：循环可以迭代的对象（包括数组）、

// 可以使用 const 来定义
for(const item of names) {
    console.log(item);
}