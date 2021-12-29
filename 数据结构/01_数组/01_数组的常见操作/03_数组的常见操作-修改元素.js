const names = ['zs', 'ls', 'ww', 'zl', 'sss'];
// 1. 修改指定索引位置的元素 splice(index, 1, item)， 并且可以将修改之前的元素以数组的形式返回
names.splice(0, 1, '张三');
console.log(names);

// 2. 修改多个元素 splice(index, num, item1, item2, ...)

names.splice(1, 2, '李四', '王五');
console.log(names);