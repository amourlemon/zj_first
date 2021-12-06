const names = ['sfs', 'abc', 'nba', 'cba', NaN];

// 之前的 indexof 方法
console.log(names.indexOf('cba'), names.indexOf('fsff'));  //3 -1 如果存在返回下标，如果不存在，返回 -1

// include

console.log(names.includes('abc'), names.includes('fsdf'));  // true false

// 两者的不同
    // 1. includes 可以规定从哪一个元素开始寻找  searchElement: string, fromIndex?: number
console.log(names.includes('sfs', 1));

   // 2. 对 NaN 的处理结果不同
console.log(names.indexOf(NaN));  // -1
console.log(names.includes(NaN)); // true
