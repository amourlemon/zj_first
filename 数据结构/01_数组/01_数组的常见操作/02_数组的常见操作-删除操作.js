const names = ['zs', 'ls', 'ww', 'zl', 'sss'];

// 1. 删除数组最后的元素  pop()  方法删除数组最后一个元素，并将该元素作为返回值返回
let lastName = names.pop();
console.log(lastName);

// 2. 删除数字首位元素 shift()   方法删除数组的首位元素， 并将该元素作为返回值返回

let firstName = names.shift();
console.log(firstName);

console.log(names); // [ 'ls', 'ww', 'zl' ]

// 3. 删除指定索引位置的元素  splice(start, num) start 表示删除的起始位置， num 表示删除的元素个数，并且可以将删除的元素以数组的形式返回

console.log(names.splice(0, 1));