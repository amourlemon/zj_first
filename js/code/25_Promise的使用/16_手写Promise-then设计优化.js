const PROMISE_STATUS_PENDDING = 'pendding';
const PROMISE_STATUS_FULFILLED = 'fulfilled';
const PROMISE_STATUS_REJECT = 'rejected';
class DIYPromise{
    constructor(executor) {
        // 为了使 promise 实例可以多次调用
        this.fullfilledFns = [];
        this.rejectedFns = [];
        this.status = PROMISE_STATUS_PENDDING;
        const resolve = (value) => {
            this.value = value;
            if(this.status === PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    if(this.status !== PROMISE_STATUS_PENDDING) return;
                    this.status = PROMISE_STATUS_FULFILLED;
                    value && this.fullfilledFns.forEach(fn => {
                        fn(value);
                    });
                })
            }
        };
        const reject = (reason) => {
            this.reason = reason;
            if(this.status === PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    if(this.status !== PROMISE_STATUS_PENDDING) return;
                    this.status = PROMISE_STATUS_REJECT;
                    reason && this.rejectedFns.forEach(fn => {
                        fn(reason)
                    })
                })
            }
        }
        executor(resolve, reject);
    }
    then(fulfilled, rejected) {
        if(this.status === PROMISE_STATUS_FULFILLED && fulfilled) {
            fulfilled(this.value);
        }
        if(this.status === PROMISE_STATUS_REJECT && rejected) {
            rejected(this.reason);
        }
        this.fullfilledFns.push(fulfilled);
        this.rejectedFns.push(rejected);
    }
}

const promise = new DIYPromise((resolve, reject) => {
    resolve(222);
    reject(111);
})
// 因为微任务 异步执行，多次调用 then 方法会将 传入的 fulfilled/rejected 覆盖掉
promise.then(res => {
    console.log('res1:', res);
}, err => {
    console.log('err1：',err);
})

promise.then(res => {
    console.log('res2:', res);
}, err => {
    console.log('err2：',err);
})


setTimeout(()=> {
    promise.then(res => {
        console.log('res3:', res);
    }, err => {
        console.log('err3:', err);
    })
}, 2000) 