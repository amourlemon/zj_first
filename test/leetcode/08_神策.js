// function curry(fn) {

//     const len = fn.length;
//     // const len = arguments.length;
//     function curring(...args) {
//         if(args.length >= len) {
//             return fn.apply(this, args)

//         } else {
//             // 接受新的参数
//             return function(...newArgs) {
//                 // return curring.apply(this, [...args, ...newArgs]);
//                 return curring.apply(this, [...args, ...newArgs]);
//             } 
//         }
//     }
//     return curring;
// }

// function sum(num1, num2) {
//     return num1 + num2;
// }

// const add = curry(sum);
// console.log(add(1)(4)());

// function add2() {
//     // const len = arguments.length;

//     // let res = [...arguments].reduce((pre, cur) => pre + cur);
//     let res = 0;
//     let arr = [...arguments].length;
//     for(let i = 0; i < arr.length; i++) {
//         res += arr[i]
//     }
//     return function(...args) {
//         return res + add2(...args)
//     }
// }

// console.log(add2(1,2,3)());

function carrying(fn) {
    let arr = [];
    const _carry = function (...args) {
      if (!args.length) {
        return fn.apply(this, arr);
      } else {
        arr = arr.concat(args);
        return _carry;
      }
    };
    return _carry;
  }
  
  function add(...args) {
    return args.reduce((prev, cur) => {
      return prev + cur;
    }, 0);
  }
  const foo = carrying(add);

console.log(foo(1,2)(3,4)(5)());

const person = {
  name: 'zs',
  age: 12,
  address: '济南'
}

let str = JSON.stringify(person);

Promise.prototype.syayHi = function() {
  console.log('hi');
}

const primise = new Promise((resolve, reject) => {
  resolve(111)
});
primise.syayHi()