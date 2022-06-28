const PROMISE_STATUS_PENDDING = 'pendding';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECT = 'rejected';

/**
 *自定义工具函数
 *对 Promise then 中的 try.. catch 代码进行抽取
 * @param {function} resolve Promise 中的成功的回调函数
 * @param {function} reject Promise 中的失败的回调函数
 * @param {Object} value then 中回调函数中的需要传递的参数
 * @param {function} onPenddingCall then 中的回调函数
 */
function execPromiseUtil(resolve, reject, value, onPenddingCall) {
    try {
        const res = onPenddingCall(value);
        resolve(res);
    } catch (err) {
        reject(err);
    }
}

class DIYPromise {
    constructor(executor) {
        // 为了使 promise 实例可以多次调用
        this.fullfilledFns = [];
        this.rejectedFns = [];
        this.status = PROMISE_STATUS_PENDDING;
        const resolve = (value) => {
            this.value = value;
            if (this.status === PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDDING) return;
                    this.status = PROMISE_STATUS_FULFILLED;
                    value && this.fullfilledFns.forEach(fn => {
                        fn();
                    });
                })
            }
        };
        const reject = (reason) => {
            this.reason = reason;
            if (this.status === PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    if (this.status !== PROMISE_STATUS_PENDDING) return;
                    this.status = PROMISE_STATUS_REJECT;
                    reason && this.rejectedFns.forEach(fn => {
                        fn()
                    })
                })
            }
        }
        try {
            executor(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }
    then(onfulfilled, onrejected) {
        return new DIYPromise((resolve, reject) => {
            // 1.promise 的实例在类似于 setTimeout 等异步操作中， promise 的状态已经被确定了
            if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
                // try{
                //     const value = onfulfilled(this.value);
                //     resolve(value);
                // } catch(err) {
                //     reject(err);
                // }
                // resolve(value);
                execPromiseUtil(resolve, reject, this.value, onfulfilled);
            }
            if (this.status === PROMISE_STATUS_REJECT && onrejected) {
                // try {
                //     const reason = onrejected(this.reason);
                //     resolve(reason);
                // } catch(err) {
                //     reject(err);
                // }
                execPromiseUtil(resolve, reject, this.value, onrejected);
            }
            // 2. promise 示例的 状态未被确定
            if (this.status === PROMISE_STATUS_PENDDING) {
                this.fullfilledFns.push(() => {
                    // try{
                    //     const value = onfulfilled(this.value);
                    // // console.log(value);   打印了 两次  'bbbbb'  undefined
                    //     resolve(value);
                    // } catch(err) {
                    //     reject(err);
                    // }
                    execPromiseUtil(resolve, reject, this.value, onfulfilled);
                });
                this.rejectedFns.push(() => {
                    // try{
                    //     // 要把错误放在里面
                    // const reason = onrejected(this.reason)
                    //     resolve(reason);
                    // } catch(err) {
                    //     reject(err);
                    // }
                    execPromiseUtil(resolve, reject, this.reason, onrejected);
                });
            }
        })
    }
}

const promise = new DIYPromise((resolve, reject) => {
    resolve(222);
    // reject(111);
})
// 因为微任务 异步执行，多次调用 then 方法会将 传入的 fulfilled/rejected 覆盖掉
promise.then(res => {
    console.log('res1:', res);
    return 'bbbb'
    // throw new Error('Error Message');
}, err => {
    console.log('err1:', err)
    throw new Error('Error Message')
}).then(res => {
    console.log(res);
}, err => {
    console.log('Catch err:', err);
})

// const promise2 = new Promise((resolve, reject) => {
//     resolve(11111);
// })
// promise2.then(res => {
//     console.log(res);
//     return 'vvvvvv'
// }).then(res => {
//     console.log(res);
// })