// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));
// 1. Promise 中的 then 方法 可以多次调用 （并不是脸是调用）

const promise = new Promise((resolve, reject) => {
    resolve('ssss')
})

promise.then(res => {
    console.log('res1：' + res);
})

promise.then(res => {
    console.log('res2：' + res);
})

// 2. Promise 中 then 方法的返回值
    // then 方法有返回值时，返回的是一个 Promise 对象，返回的值可以继续使用 then 方法进行回调

    // 2.1 返回的是一个 普通字符串 或者是 普通的对象
let promiseRes = promise.then(res => {
    return res;
})
console.log('======',promiseRes);
promiseRes.then(res => {
    console.log(res);
})

    // 2.2 返回的是一个 Promise 对象
let condition = false;
promise.then(res => {
    return new Promise((resolve, reject) => {
        if (condition) resolve('状态正确')
        else reject('发生错误') 
    })
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

    // 2.3 返回的是一个 thenable 的对象
promise.then(res => {
    return {
        name: '张三',
        then: (resolve, reject) => {
            resolve('张三')
        }
    }
}).then(res => {
    console.log(res);
})  