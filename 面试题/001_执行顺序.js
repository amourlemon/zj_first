// let a = 10,
//   b = 2,
//   c = 0,
//   d;
// try {

// } catch (e) {
//   a = a / b;
// } finally {
//   c = a / b;
// }
// console.log(a, b, c, d);

// function isT(n) {
//   const arr = String(n).split('')
//   arr.sort((a, b) => a - b);
//   let str = arr.join('');
//   if(str == n) return true;
//   arr.sort((b, a) => a - b);
//   str = arr.join('');
//   if(str == n) return true;
//   return false
// }

// function foo(n) {
//   let index = 0;
//   let i = 100;
//   while(true) {
//     if(!isT(i)) {
//       index++;
//       if(index === n) return i
//     }
//     i++
//   }
// }

// console.log(foo(1000000));

// let url = "http://www.nowcoder.com?"
// let sKey = 'key=1&key=2&key=3&test=4#hehe key'
// function getUrlParams(sUrl, sKey) {

// }

var hammingWeight = function(n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
      if ((n & (1 << i)) !== 0) {
          ret++;
      }
  }
  return ret;
};