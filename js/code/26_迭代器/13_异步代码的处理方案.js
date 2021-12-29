function requestUrl(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(url);
        }, 2000)
    })
}
// 根据传递过来的 URL 进行拼接 拼接两次后打印出结果

// 方式一： 回调地狱
// requestUrl('http:').then(res => {
//     requestUrl(res + '//www.baidu').then(res => {
//         requestUrl(res + '.com').then(res => {
//             console.log(res);
//         })
//     })
// })

// 2. 链式调用
// requestUrl('http:').then(res => {
//     return requestUrl(res + '//www.baidu')
// }).then(res => {
//     return requestUrl(res + '.com')
// }).then(res => {
//     console.log(res);
// })

// 3. Promise + generator 的实现
function* getData() {
    // 注意： 左边的 res 实际上是 后台传输过来的数据
    const res1 = yield requestUrl('http://');
    const res2 = yield requestUrl(res1 + 'www.baidu');
    const res3 = yield requestUrl(res2 + '.com')
    console.log(res3);

}

// 手动执行生成器函数
// const dataGenerator = getData()
// dataGenerator.next().value.then(res => {
//     dataGenerator.next(res).value.then(res => {
//         dataGenerator.next(res).value.then(res => {
//             dataGenerator.next(res)
//         });
//     })
// })

// 自动执行生成器函数

function execGenerator(generatorFn) {
    const generator = generatorFn();

    function execFn(res) {
        const result = generator.next(res);
        if (result.done) {
            return result.value;
        }
        result.value.then(res => {
            execFn(res)
        })
    }
    execFn()
}

execGenerator(getData);