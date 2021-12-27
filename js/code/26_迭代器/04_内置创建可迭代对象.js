// 内置创建可迭代的对象有：String/Array/Map/Set/arguments对象/NodeList集合

const names = ['zhangs', 'ls', 'ww'];
const iterator = names[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());