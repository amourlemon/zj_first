const names = ['zs', 'ls'];
// 1. 添加一个元素到数组的最后位置
names.push('ww');
console.log(names);

// 2. 在数组首位插入一个元素
names.unshift('zl');
console.log(names);

// 3. 在指定索引位置插入元素
names.splice(1, 0, 'sss');
console.log(names);