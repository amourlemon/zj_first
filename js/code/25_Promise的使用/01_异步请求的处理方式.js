
/**
 * @param {*} url 判断的参数
 * @param {*} successCallBack 成功的回调函数
 * @param {*} failCallBack   失败的回调函数
 */
// function requestData(url, successCallBack, failCallBack) {
//     setTimeout(() => {
//         if(url === 'www.baidu') {
//             let data = ['fsd', 'dfsdf', 'fed'];
//             successCallBack(data);
//         } else {
//             let errMsg = 'url错误';
//             failCallBack(errMsg);
//         }
//     }, 2000)
// }

// const data = requestData('www.baisu', 
//     (data) => {
//         console.log(data);
//         res = data;
//         },
//     (errMsg) => {
//         res = errMsg;
//         console.log(errMsg);
//     } 
// )

// 自己封装的弊端： 
    // 1、必须要自己想好回调函数的名字，并且使用好
    // 2、在使用别人封装的方法时，必须去阅读文档或者阅读源码
let url = 'www.baidu';
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(url === 'www.baidu') {
            let data = ['fsd', 'dfsdf', 'fed'];
            resolve(data)
        } else {
            let errMsg = 'url错误';
            reject(errMsg)
        }
    }, 2000)
})

promise.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})