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
    };
    then(onfulfilled, onrejected) {
        const defauleOnrejected = err => {
            throw err;
        }
        onrejected = onrejected || defauleOnrejected;
        return new DIYPromise((resolve, reject) => {
            // 1.promise 的实例在类似于 setTimeout 等异步操作中， promise 的状态已经被确定了
            if (this.status === PROMISE_STATUS_FULFILLED && onfulfilled) {
                execPromiseUtil(resolve, reject, this.value, onfulfilled);
            }
            if (this.status === PROMISE_STATUS_REJECT && onrejected) {
                execPromiseUtil(resolve, reject, this.value, onrejected);
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
        this.then(undefined, onrejected);
    }
}

const promise = new DIYPromise((resolve, reject) => {
    // resolve(1111)
    reject(222)
}).then(res => {
    console.log('res:', res);
}).catch(err => {
    console.log('err:', err);
})