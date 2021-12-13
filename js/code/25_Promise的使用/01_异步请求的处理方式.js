
/**
 * @param {*} url 判断的参数
 * @param {*} successCallBack 成功的回调函数
 * @param {*} failCallBack   失败的回调函数
 */
function requestData(url, successCallBack, failCallBack) {
    setTimeout(() => {
        if(url === 'www.baidu') {
            let data = ['fsd', 'dfsdf', 'fed'];
            successCallBack(data);
        } else {
            let errMsg = 'url错误';
            failCallBack(errMsg);
        }
    }, 2000)
}

let res;
const data = requestData('www.baisu', 
    (data) => {
        console.log(data);
        res = data;
        },
    (errMsg) => {
        res = errMsg;
        console.log(errMsg);
    } 
)

console.log(res);