const PROMISE_STATUS_PENDDING = 'pendding';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMSIE_STATUS_REJECTED = 'rejected'

class DIYPromise {
    // queueMicrotask 是微任务
    // setTimeout 是宏任务
    constructor(executor) {
        this.status = PROMISE_STATUS_PENDDING;
        const resolve = (value) => {
            if (this.status === PROMISE_STATUS_PENDDING) {
                this.status = PROMISE_STATUS_FULFILLED;
                console.log('resolve 被调用了');
                queueMicrotask(() => {
                    value && this.onFulfilled(value)
                });
            }

        }
        const reject = (reason) => {
            if (this.status === PROMISE_STATUS_PENDDING) {
                this.status = PROMSIE_STATUS_REJECTED;
                console.log('reject 被调用了');
                setTimeout(() => {
                    reason && this.onRejected(reason)
                }, 0)
            }

        }
        executor(resolve, reject);
    }
    then(onFulfilled, onRejected) {
        this.onFulfilled = onFulfilled;
        this.onRejected = onRejected;
    }
}

const promise = new DIYPromise((resolve, reject) => {
    // resolve();
    reject(222222);
})

promise.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})