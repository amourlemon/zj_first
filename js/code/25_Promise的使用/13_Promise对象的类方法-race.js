const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1111111);
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


// race 方法 会直接找到 最快确定状态的 Promise 对象
//  如果是 fulfilled 状态，则在 then 中执行，如果是 reject 状态，则在 catch 中执行
Promise.race([p1, p2, p3]).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
})