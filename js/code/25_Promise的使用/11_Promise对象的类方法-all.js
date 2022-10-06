const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1111111);
    }, 1000)
})

const p2 = new Promise(resolve => {
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

// all 方法 等待所有的 Promise 执行完毕才会去执行 then 方法
// 如果放入的 Promise 对象中，有处于 reject 的状态， 那么会直接catch碰到的第一个 reject，不会执行then
Promise.all([p1, p2, p3]).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})