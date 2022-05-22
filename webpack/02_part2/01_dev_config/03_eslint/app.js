console.log('hello, world');
// 进行这一步完全的意义在于当是个位数时，能够以 0 填充十位数
// eslint-disable-next-line prefer-spread
const preArr = Array.apply(null, Array(10)).map((elem, index) => index);
console.log(preArr);
// const newTime = format.replace(/DD/g, preArr[days] || days)
//   .replace(/hh/g, preArr[hours] || hours)
//   .replace(/mm/g, preArr[minutes] || minutes)
//   .replace(/ss/g, preArr[seconds] || seconds);
