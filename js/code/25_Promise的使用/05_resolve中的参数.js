// 1.普通 参数或者是 普通对象
new Promise((resolve, reject) => {
    const resolveMsg = { name: '张三' }
    resolve(resolveMsg);
}).then(res => {
    console.log(res);
})

// 2. Promise 对象, 当前的 promise 状态 会由传入的 promise 对象的状态所决定，并且当前
// Promise 对象中的 then 中的 res 参数，是由 传入的 promise 的 resolve 传递过来的，reject 同理
const promise = new Promise((resolve, reject) => {
    // resolve('aaa');
    reject('错误信息')
})
new Promise((resolve, reject) => {
    // 虽然 现在的 Promise 对象的状态是 resolve 但是 传递过来的 promise 对象是 reject， 所以
    // 会获取到 err
    resolve(promise)
}).then(res => {
    console.log(res);
}, err => {
    console.log(err);
})

// 3. 带有 then 方法的 thenable 对象
const obj = {
    name: '李四',
    then: (resolve, reject) => {
        resolve(obj.name);
    }
} 

new Promise((resolve, reject) => {
    resolve(obj)
}).then(res => {
    console.log(res);
})