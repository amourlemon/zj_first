
Promise._all = function(promises) {
    return new Promise((resolve, reject) => {
        const values = [];
        promises.forEach(promise => {
            promise.then(res => {
                values.push(res);
                if(values.length === promises.length) {
                    resolve(values);
                }
            }).catch(err => {
                reject(err)
            })
        });
    })
}

Promise._allSettled = function(promises) {
    return new Promise((resolve, reject) => {
        const values = [];
        promises.forEach(promise => {
            promise.then(res => {
                values.push({status: 'fulfilled', value: res})
            }).catch(err => {
                values.push({status: 'rejected', reason: err})
            })
        })
        resolve(values);
    })
}

Promise._race = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    })
}

Promise._any = function(promises) {
    return new Promise((resolve, reject) => {
        const reasons = [];
        promises.forEach(promise => {
            promise.then(res => {
                resolve(res)
            }).catch(err => {
                reasons.push(err);
                if(reasons.length === promises.length) reject(reasons);
            })
        })
    })
}
