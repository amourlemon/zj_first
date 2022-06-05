// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })



// new Promise((resolve, reject) => {
//     resolve(9999);
// }).then(res => {
//     console.log(res);
// })

// process.nextTick(() => {
//     console.log(111111);
// })
// setImmediate(() => {
//     console.log('ccc');
// })


// setTimeout(() => {
//     console.log('bbb');
// }, 0)

// setTimeout(() => {
//     console.log('aaa');
// })


















//  Promise.resolve(2).finally(() => {
//     console.log(111);
//     return 'finally'
// }).then((res) => {
//     console.log(res);
// })


//  Promise.resolve(555).finally(() => {
//     console.log(333);
//     return new Promise((resolve, reject) => {
//         resolve(6666)
//     })
// }).then(res => {
//     console.log(res);
// })

// const promise1 = new Promise((resolve, reject) => {
//     resolve(1111)
// }).finally(() => {
//     console.log(23222);
// }).then(res => {
//     console.log(res);   
// })

// const promise2 = new Promise((resolve, reject) => {
//     reject(3333)
// }).finally(() => {
//     console.log(44444);
//     return new Promise((resolve, reject) => {
//                 resolve(6666)
//         })
// }).then(res => {
//     console.log(res);   
// }).catch(err => {
//     console.log(err);
// })


// const promise1 = new Promise((resolve, reject) => {
//     resolve(1111)
// })

// const promise2 = Promise.resolve(2222).finally(() => {
//     console.log('promise2');
// }).then(res => {
//     console.log('res2', res);
// })

// promise1.finally(() => {
//     console.log('promise1');
// }).then(res => {
//     console.log('res1', res);
// })



const p1 = new Promise((resolve, reject) => {
    resolve(222)
}).then(res => {
    console.log(res);
    setTimeout(() => {
        console.log(p1);
    },0)
    return 1
}).finally(res => {
    console.log('finally', res);
})  