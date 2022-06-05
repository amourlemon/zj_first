// async function foo() {
//     console.log('222222');  // 前面无 await 关键字 和普通函数一样
//     return new Promise((resolve) => {
//         resolve();
//     })
// }

// async function bar() {
//     console.log('1111');
//     await foo();
//     console.log('3333'); // 加了 await 后的代码相当于将后面的代码放在了 promise 的 then 中
// }
// bar();
// console.log('444444');

async function async1() {
    console.log('async1 start')
    await async2(); // 被 await 修饰的方法，无论其是不是放在了微任务队列当中，其后面的方法必放在微任务队列中
    console.log('async1 end')
}

async function async2() {
    console.log('async2')
}

console.log('script start')

setTimeout(function () {
    console.log('setTimeout')
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1')
    resolve();
}).then(function () {
    console.log('promise2')
})

console.log('script end')

//  script start
// async1 start
// async2  错误原因： 忘记异步函数中，如果没有加 await 就是普通函数
// promise1
// script end
// async1 end
// promise2
// setTimeout