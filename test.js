function hyCurried(fn) {
  let length = fn.length;

  function myCurried(...arg) {
    console.log('fn', arg)
    // 表明传入的参数已达到原函数需要的参数个数
    if (arg.length >= length) {
      return fn.call(this, ...arg)
    } else {
      function curried(...restArg) {
        console.log([...restArg, ...arg].length)
        return myCurried.call(this, [...restArg, ...arg])
      }
      return curried
    }
  }
  return myCurried
}


let curried1 = hyCurried(add)
// console.log(curried1(1)(2, 3))

function add(x, y, z) {
  return x + y + z;
}