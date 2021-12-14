// 1. catch 的基本使用： 捕捉错误
let condition = false;
const promise = new Promise((resolve, reject) => {
    // reject('reject status');
    setTimeout(() => {
        if (condition) resolve('resolve status')
        else  reject('reject status');
    }, 2000)
    
})
let message = '';
promise.catch(err => {
    message = err;
    console.log(err);
})
console.log(message);// 空值
// 2. 前面的课程的 catch 报错问题
// (node:5072) UnhandledPromiseRejectionWarning: reject status
// (Use `node --trace-warnings ...` to show where the warning was created)


// 原因 promise 是可以多次调用的, 这里的 promise.then() 和 promise.catch() 
// 是相互独立互不影响的, 所以会造成一个状态缺失
promise.then(res => {
    console.log(res);
})

promise.catch(err => {
    console.log(err);
})

// 3. catch 和 then 的链式使用
//  这样的使用是不规范的，因为 catch 在 then 的后面， 如果 then 返回的是一个 Promise 对象
// 并且其执行的也是 reject 那么会捕捉哪一个的 reject 呢？ 虽然答案是有的： 即优先捕捉最外层的
// reject, 但是这并不符合 promisea+ 的规范 
new Promise((resolve, reject) => {
    reject('reject status');
    // resolve('resolve message')
}) .then(res => {
    return new Promise((resolve, reject) => {
        reject('Second Status Err')
    })
}).catch(err => {
    console.log(err);
})

// 4. 正确的使用 catch 和 then 的链式
// 在每一个 promise 对象后 先执行 catch 后执行 then 
// 那么 catch 捕捉的错误只会与目前的 promise 对象相关
new Promise((resolve, reject) => {
    // reject('reject status4');
    resolve('resolve status4')
}).catch(err => {
    console.log(err);
}).then(res => {
    console.log(res);
})