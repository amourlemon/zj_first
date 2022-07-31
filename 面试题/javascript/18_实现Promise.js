class DIYPromise {
    static PROMISE_STATUS_PENDDING = 'pendding';
    static PROMISE_STATUS_FULFILLED = 'fulfilled';
    static PROMISE_STATUS_REJECTED = 'rejected';
    constructor(executor) {
        this.status = this.constructor.PROMISE_STATUS_PENDDING;
        this.value = undefined;
        this.reason = undefined;
        this.fulfilledFn = [];
        this.rejectedFn = [];
        // 要改成箭头函数，否则this的绑定会出现问题
        const resolve = (value) => {
            if(this.status === this.constructor.PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    // 更新状态，并且执行微任务队列中的任务
                    this.status = this.constructor.PROMISE_STATUS_FULFILLED;
                    this.value = value;
                    this.fulfilledFn.forEach(fn => {
                        value && fn(value)
                    })
                })
            }
        }
        const reject = (reason) =>  {
            if(this.status === this.constructor.PROMISE_STATUS_PENDDING) {
                queueMicrotask(() => {
                    this.status = this.constructor.PROMISE_STATUS_FULFILLED;
                    this.reason = reason;
                    this.rejectedFn.forEach(fn => {
                        reason && fn(reason);
                    })
                })
            }
        }
        try {
            executor(resolve, reject)
        } catch(err) {
            reject(err)
        }
    }
    then(onfulfilled, onrejected) { 
        return new DIYPromise((resolve, reject) => {
            // 状态确定
            if(this.status === this.constructor.PROMISE_STATUS_FULFILLED && onfulfilled) {
                try{
                    // TODO 为什么要把 this.value 作为参数再去执行一遍
                    const value = onfulfilled(this.value)
                    resolve(value)
                } catch(err) {
                    reject(err)
                }
            }
            // 状态确定
            if(this.status === this.constructor.PROMISE_STATUS_REJECTED && onrejected) {
                try{
                    // TODO 为什么要把 this.value 作为参数再去执行一遍
                    const reason = onfulfilled(this.reason)
                    resolve(reason)
                } catch(err) {
                    reject(err)
                }
            }
            if(this.status === this.constructor.PROMISE_STATUS_PENDDING) {
                debugger
              this.fulfilledFn.push(() => {
                try {
                  const value = onfulfilled(this.value)
                  resolve(value)
                } catch(err) {
                  reject(err)
                }
              })
              this.rejectedFn.push(() => {
                try {
                  const reason = onfulfilled(this.reason)
                  resolve(reason)
                } catch(err) {
                  reject(err)
                }
              })
            }
        })
    }
}

const promise2 = new DIYPromise((resolve, reject) => {
    // console.log(11111);
    debugger
    resolve(1111)
    // console.log(222)
})

promise2.then(res => {
    console.log(res)
})
