// function test(arg1){
//   // 1. 形参 arg 是 "hi"
//   // 2. 因为函数声明比变量声明优先级高，所以此时 arg 是 function

//   console.log(arg);  
//   var arg = 'hello'; // 3.var arg 变量声明被忽略， arg = 'hello'被执行
//   function arg(){
//     console.log('hello world') 
//     }
//   console.log(arg);  
// }
// test('hi');

// var num = 117;
// function func1() {
//   console.log(this.num);
// }


// (function() {
//   // 'use strict'
//   func1();
// })()
// // 'use strict'
// function func2() {
//   console.log(this.num);
// }
// console.log(this);

// function foo3() {
//   setTimeout(function() {

//     func2.call(this)
//   }, 0);
// }

// foo3.call({num: 45})


function isObj(target) {
    return target !== null && typeof target === 'object';
}
function deepClone(target) {
    const map = new Map();
    function clone(target) {
        if (isObj(target)) {
            const cloneTarget = Array.isArray(target) ? [] : {};
            if (map.has(target)) {
                return map.get(target)
            }
            map.set(target, cloneTarget);
            for (const key in target) {
                cloneTarget[key] = deepClone(target[key])
            }
            return cloneTarget
        } else {
            return target
        }
    }
    return clone(target)
}