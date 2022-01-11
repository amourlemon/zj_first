// export 的使用
// export const name = '张三';
// export const age = 12;
// export function foo() {
//     console.log('foo 中的打印信息');
// }

// export 使用方式二： 
const name = '李四';
const age = 13;

function foo() {
    console.log('foo ~');
}
export {
    name,
    age,
    foo
}

// export 使用方法三： 在方法二的基础上实现别名, 但是不是常用，因为使用别名的话，是在 导入的时候实现别名
// const name = '王五';
// const age = 34;

// function foo() {
//     console.log('foo');
// }

// export {
//     name as fname,
//     age as fage,
//     foo as ffoo
// }