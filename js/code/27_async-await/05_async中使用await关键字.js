// async function foo() {
//     const data = getData('abc');
//     console.log(data); // undefined
// }

async function foo() {
    const stringData = await 'sss'; // 直接返回字符串
    console.log(stringData);
    const data = await requestData();
    console.log('getDataRes：', data); // 222
}

function requestData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve(222);
            reject(1111)
        }, 2000);
    })
}

// foo()

// 捕捉异常
foo().catch(err => {
    console.log(err);
})