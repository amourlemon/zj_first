// 严格模式 可以在js文件的开头声明  也可以单独放在某个函数中声明
// 'use strict'

// age = 12;
// console.log(age);

// 如果在函数中使用了严格模式 但是在 js 文件中没有使用
// 如果 在函数中的变量名和在文件中的变量名是相同的，那么 在函数中的变量就是文件中的变量

function foo() {
    'use strict'
    age = 21;
    console.log(age);
}

foo();