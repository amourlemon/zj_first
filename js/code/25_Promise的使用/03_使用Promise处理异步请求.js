/**
 * @param {*} url 判断正确与否的条件
 * @return {*} Promise 对象
 */
function requestData(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(url === 'zzz') {
                let res = ['dsd', 'sedrs', 'tfg'];
                resolve(res);
            } else {
                let errMsg = 'url 错误'
                reject(errMsg);
            }
        }, 2000)
    })
}

let promise = requestData('zz');
promise.then((res) => {
    console.log('请求成功，结果是：' + res);
}, (err) => {
    throw new Error(err)
})

// 在 node 环境下， then 和 catch 方法同时使用会报错
// promise.catch(err => {
//     console.log('请求失败：' + err);
// })

