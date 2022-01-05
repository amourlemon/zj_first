// async 扑捉到异常后，后面的代码仍然会执行，原理是异步函数在最后捕捉异常

async function foo() {
    console.log('aaa');
    throw new Error('bbbb');
    console.log(cccc);
}

console.log('script start');
foo().catch(err => {
    console.log('出现错误');
});
console.log('script end');


// 普通函数
// function foo() {
//     console.log('aaa');
//     throw new Error('bbbb');
//     console.log(cccc);
// }

// console.log('script start');
// foo().catch(err => {
//     console.log('出现错误');
// });
// console.log('script end');