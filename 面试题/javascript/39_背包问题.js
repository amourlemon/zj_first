function bag(limit, n, weights, values) {
    // values.unshift(0);
    // weights.unshift(0);
    // const dp = new Array(n+1).fill(0).map(() => new Array(limit + 1).fill(0));
    const dp = new Array(limit+1).fill(0)
    for(let i = 1; i <= n; i ++) {
        // for(let j = 1; j <= limit; j ++) {
        //     if(j < weights[i]) {
        //         // 不拿， 那么就等于上一个的值
        //         dp[i][j] = dp[i-1][j]
        //     } else {
        //         // 要拿
        //         dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - weights[i]] + values[i])

        //     }
        // }

        for(let j = limit; j >= 1; j --) {
            // 逆向退， 用到的是上一条的旧数据
            if(j >= weights[i]) {
              dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i])
            }
        }
    }
    console.log(dp);
}

const values = [1,3,5,9];
const weights = [2,3,4,7]
bag(10, 4, weights, values)

// process.nextTick(function A() {
//     process.nextTick(function B() {
//         console.log(1);
//         process.nextTick(function D() {
//             console.log(2);
//         })
//         process.nextTick(function E() {
//             console.log(3);
//         })
//     })
//     process.nextTick(function C() {
//         console.log(4);
//     })
// })

// weight = 2;
// function Car() {
//     this.weight = 1;
//     this.sheet = function() {
//         console.log(this.weight);
//     }
//     this.sheet1 = () => {
//         console.log(this.weight);
//     }
// }

// const ccz = new Car();
// ccz.sheet();
// ccz.sheet1();
// const sheet = ccz.sheet;
// const sheet1 = ccz.sheet1;
// sheet()
// sheet1()

// function time() {
//     let data = new Date().getTime();
//     return function() {
//         let endTime = new Date().getTime();
//         return endTime - data
//     }
// }

// const timeEnd = time();
// for(let i = 0; i < 100000; i++) {}
// const cost = timeEnd()
// console.log(cost);

// console.log(Function instanceof Object);
// console.log(Object instanceof Function);

// function Animal() {
//     this.name = 'Animal'
// }

// Animal.prototype.changeName = function(name) {
//     this.name = name
// }

// function Cat() {
//     this.name = 'Cat'
// }

// var animal = new Animal();

// Cat.prototype = animal;
// Cat.prototype.constructor = Cat;


// var cat = new Cat();
// animal.changeName('Tiger')
// console.log(cat.name);

// var _val = 10;
// function rootFn() {
//     function childFn() {
//         this._val--;
//         console.log(this._val);
//         return childFn
//     }
//     return {_val:20, fn: childFn}
// }

// rootFn().fn()()

// function cb(msg) {
//     return function() {console.log(msg);}
// }

// setTimeout(cb('setTimeout'), 1000)
// setImmediate(cb('setImmediate'))
// process.nextTick(cb('processNextTick'))
// cb('Main process')()

// var a = 10, b = 11, c = 12;
// function test(a) {
//     a = 1
//     var b =2
//     c = 3
// }
// test(10)

// console.log(a);
// console.log(b);
// console.log(c);


function factorization( n ) {
    // write code here
    let k = 2; // 最小的质数
    let y = n;
    const res = [];
    
    while(y >= k) {
        if(y === k) {
            res.push(k)
            break
        } else if(y % k === 0) {
            res.push(k);
            y = ~~(y / k)
        } else {
            k++
        }
    }
    return res
}
console.log(factorization(98));


function foo(m, n, j) {
    let min = Math.min(m, n, j);
    let k = 1;
    let res = 1;
    while(k <= min) {
        if(m % k === 0 && n % k === 0 && j % k === 0) {
            res *= k;
            ~~(m /= k);
            ~~(n /= k);
            ~~(j /= k);
            k = 1;
        }
        k++
    }
    return res
}

console.log(foo(12,16, 24));