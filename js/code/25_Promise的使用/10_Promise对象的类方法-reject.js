// 1. reject 一个普通字符串或者是对象 
Promise.reject('aaa').then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
})

// 2. reject 一个 Promise 对象
Promise.reject(new Promise((resolve, reject) => {
    resolve('aaaaa');
})).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);  // err: Promise { 'aaaaa' }
})
//  3. reject 一个 thenable 对象

// 结论： reject 出来的 Promise 只能执行到 catch 中
