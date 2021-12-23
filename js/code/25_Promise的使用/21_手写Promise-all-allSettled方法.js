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
                    this.fullfilledFns.forEach(fn => {
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
                    this.rejectedFns.forEach(fn => {
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
    };
    then(onfulfilled, onrejected) {
        const defauleOnrejected = err => {
            throw err;
        };
        const defauleOnfulfilled = value => {
            return value;
        }
        onrejected = onrejected || defauleOnrejected;
        onfulfilled = onfulfilled || defauleOnfulfilled;
        return new DIYPromise((resolve, reject) => {
            // 1.promise 的实例在类似于 setTimeout 等异步操作中， promise 的状态已经被确定了
            if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
                execPromiseUtil(resolve, reject, this.value, onfulfilled);
            }
            if (this.status === PROMISE_STATUS_REJECT && onrejected) {
                execPromiseUtil(resolve, reject, this.reason, onrejected);
            }
            // 2. promise 示例的 状态未被确定
            if (this.status === PROMISE_STATUS_PENDDING) {
                this.fullfilledFns.push(() => {
                    execPromiseUtil(resolve, reject, this.value, onfulfilled);
                });
                this.rejectedFns.push(() => {
                    execPromiseUtil(resolve, reject, this.reason, onrejected);
                });
            }
        })
    };
    catch (onrejected) {
        return this.then(undefined, onrejected);
    };
    finally(onfinally) {
        this.then(() => {
            onfinally();
        }, () => {
            onfinally();
        })
    };
    static resolve(value) {
        return new DIYPromise(resolve => {
            resolve(value);
        })
    };
    static reject(reason) {
        return new DIYPromise((resolve, reject) => {
            reject(reason);
        })
    };
    static all(promiseArr) {
        const values = [];
        return new DIYPromise((resolve, reject) => {
            promiseArr.forEach(promise => {
                promise.then(res => {
                    values.push(res);
                    if (values.length === promiseArr.length) {
                        resolve(values);
                    }
                }, err => {
                    reject(err);
                })
            })
        })
    };
    static allSettled(promiseArr) {
        const values = [];
        return new DIYPromise((resolve, reject) => {
            promiseArr.forEach(promise => {
                promise.then(res => {
                    values.push({
                        status: 'fulfilled',
                        value: res
                    });
                    if (values.length === promiseArr.length) {
                        resolve(values);
                    }
                }, err => {
                    values.push({
                        status: 'rejected',
                        reason: err
                    });
                    if (values.length === promiseArr.length) {
                        resolve(values);
                    }
                })
            })
        })
    }
}

const p1 = new DIYPromise((resolve, reject) => {
    setTimeout(() => {
        // resolve('res1');
        reject('err1')
    }, 1000)
})
const p2 = new DIYPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('res2');
    }, 2000)
})
const p3 = new DIYPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('res3');
    }, 3000)
})

// const p4 = DIYPromise.all([p1, p2, p3]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

const p5 = DIYPromise.allSettled([p1, p2, p3]).then(res => {
    console.log(res);
})