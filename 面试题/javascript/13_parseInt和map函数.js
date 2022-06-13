["1", "2", "3"].map(parseInt);
// parseInt 默认接受两个参数，第一个是 element，第二个表示进制位
// 而 map 中的回调函数会默认有三个参数，即 element index array
// 因此 实际的操作是 parseInt(1, 0) 十进制
// parseInt(2, 1)  不在 2-26 之间，因此为 NaN
// parseInt(3, 2)  2 进制下出现 3，因此为 NaN

console.log(parseInt('9', 0))
var arr = ['123', '23', '232']

arr.map(console.log)