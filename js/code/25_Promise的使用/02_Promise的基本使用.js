// Promise 中的参数 也是一个回调函数，成为 executor
const promise = new Promise(() => {
    // 成功时的 回调函数
    resolve();
    // 失败时的回调函数
    // reject();
})

// 拿到 promise 对象后
    // 如果成功，那么可以使用 then 调用 resolve 函数
    promise.then(() => {

    })

    // 如果失败，那么可以使用 catch 调用 reject 函数
    promise.catch(() => {
        
    })