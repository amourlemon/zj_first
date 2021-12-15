new Promise((resolve, reject) => {
    resolve('resolve');
    // reject('reject')
}).catch(err => {
    console.log(err);
}).then(res => {
    console.log(res);
}).finally(() => {
    // 无论是 resolve 还是 reject 都会执行
    console.log('finally code execute');
})