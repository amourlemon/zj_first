let condition = true
// const promise = new Promise((resolve, reject) => {
//     if(condition) {
//         const names = ['sfsd', 'sdfsd', 'dfsd']
//         resolve(names);
//     } else {
//         const errorMsg = 'condition 为 false';
//         reject(errorMsg);
//     }
// });

// promise.then(res => {
//     console.log('成功的信息是：' + res);
// }, err => {
//     console.log('失败的信息是：' + err);
// })

// 等价于
// 状态一旦确定下来， 那么就是不可更改的（锁定）
new Promise((resolve, reject) => {
    if(condition) {
        // pending 状态：待定/悬而未决的
        const names = ['sfsd', 'sdfsd', 'dfsd'] // 处于 fulfilled 状态（已敲定/兑现的状态）
        resolve(names);  
    } else {
        const errorMsg = 'condition 为 false';
        reject(errorMsg); // 处于已拒绝的状态
    }
}).then(res => {
    console.log('成功的信息是：' + res);
}, err => {
    console.log('失败的信息是：' + err);
})
