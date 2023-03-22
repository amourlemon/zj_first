// function getProto(target, source) {
//     let prototype = source.prototype;
//     while (target) {
//         if (target.__proto__ === prototype) return true
//         target = target.__proto__
//     }
//     return false
// }

// console.log(getProto([], Array));


// const urls = [1, 2, 3, 4, 5];

// function request(url) {
//     return new Promise(async (resolve, reject) => {

//         resolve(await axios(url))
//     })
// }

//  async function getRes(urls) {
//     let index = 0;
//     const res = [];
//     while(index < urls.length) {
//         res.push(await request(urls[index]))
//         index++
//     }
//     return res;
// }

// function sleep(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, delay)
//     })
// }

// async function foo() {
//     await sleep(3000)

//     console.log('run');
// }

// foo()


let num = 1

var obj = {
    'num': 4,
    'dbl': (function () {
        this.num *= 2
        return function () {
            console.log(this);
            this.num *= 2
        }
    })()
}

var obj1 = obj.dbl

obj1()
obj.dbl()

// console.log(num + obj.num) // 12