const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1111111);
    }, 1000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(222222);
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(33333)
        reject(3333333)
    }, 3000)
})
// any 类方法 ES 12 中新增
//  返回第一个进入 fulfilled 状态的 resolve

// 如果全部传入的 Promise 对象状态 为 reject，那么才会进入 catch 中
Promise.any([p1, p2, p3]).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err); // err: AggregateError: All promises were rejected
    console.log('errs:', err.errors);  // [1111111, 222222, 3333333]
})