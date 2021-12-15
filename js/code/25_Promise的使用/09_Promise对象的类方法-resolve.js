// 将一个普通对象变为 promise 对象
function boo() {
    const info = {
        name: '张三'
    }
    return new Promise(resolve => {
        resolve(info);
    })
}

const p1 = boo();
p1.then(res => {
    console.log(res);
})
//  Promise 的类方法 --- resolve
const info = {
    name: '张三'
}

// 1. resolve 一个普通对象
const p2 = Promise.resolve(info);
p2.then(res => {
    console.log(res);
})
// 2. resolve 一个 Promise 对象
Promise.resolve(new Promise((resolve, reject) => {
    // resolve('aaaa')
    reject('dddd')
})).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})

// 3. resolve 一个 thenable 对象