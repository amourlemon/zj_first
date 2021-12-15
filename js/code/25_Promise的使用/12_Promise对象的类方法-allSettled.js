const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1111111);
    }, 1000)
})

const p2 = new Promise(resolve => {
    setTimeout(() => {
        resolve(222222);
    }, 2000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(33333)
        reject(3333333)
    }, 3000)
})

// 只会执行 then 方法， 不会执行 catch 方法， 并且返回 各个 promise 的状态
Promise.allSettled([p1, p2, p3]).then(res => {
    console.log('res:', res);
    /** 
     * res: [
            { status: 'rejected', reason: 1111111 },
            { status: 'fulfilled', value: 222222 },
            { status: 'rejected', reason: 3333333 }
            ]
    */
}).catch(err => {
    console.log('err:', err);
})