// export 的使用方式一：声明时导出

const name = '张三';
const age = 12;

function foo() {
    console.log('foo 中的打印信息');
}

export {
    name,
    age as
    default,
    foo
}

// 或者是 defaulet 只能导出一个
// export default name;

// 还有一种方式是： 在项目中使用的这个方法
// export default {
//     name,
//     age,
//     foo
// }