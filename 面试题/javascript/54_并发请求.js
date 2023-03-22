// 题目要求，给定一组网络请求，每个阶段只能进行 maxNum 次请求，每当一次请求完成之后，要求后面的请求立马进行补充，但是返回的请求结果需要按照原先的顺序返回


function concurRequest(urls = [], maxNum = 0) {
    return new Promise(resolve => {
        if (urls.length === 0) {
            resolve([]);
            return;
        }
        const res = [];
        let count = 0;
        async function request() {
            // 记录开始的位置
            const index = count;
            try {
                const response = await fetch(urls[count++]);
                res[index] = response;
            } catch (err) {
                res[index] = err;
            } finally {
                if (count === urls.length) {
                    resolve(res);
                    return
                }
                // 进行下一次请求
                request();
            }

            // 保持响应的结果不会发生变化

        }
        const times = Math.min(urls.length, maxNum);
        while (times > 0) {
            request();
        }
    })
}