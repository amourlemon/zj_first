// 1. 严格模式下  不允许 创建意外的变量

// 2. 严格模式下  不允许函数的形参出现相同的

// 3. 静默错误
//  true.age = 12;
// var obj = {};
// Object.defineProperties(obj, "name", {
//     writable: false,
//     value: 'why'
// })

// console.log(obj.name);
// obj.name = 'kobe';

// 4. 不允许使用原来的八进制格式


// 5. with 语句不允许使用

// 6. eval 语句无法向上提升变量

// 7. 严格模式下  自执行函数中的 this 会指向 undefined 原来的 指向的是 window