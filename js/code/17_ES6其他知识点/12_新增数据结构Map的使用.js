// 在 ES6 之前 一般使用 Object 来保存 key：value
// 但是使用 对象保存的 key value 中的 key 只能是字符串，不能是对象
// 新增数据结构 Map 即可将对象作为 key

const obj1 = { name: 'zs' };
const obj2 = { name: 'ls' };

const obj = {
  [obj1]: 'aaa',
  [obj2]: 'bbb'
}

console.log(obj); // { '[object Object]': 'bbb' }
//  相当于 给 obj1进行 String， 结果为 key：'[object Object]'，value: 'aaa'
// 然后 再将 obj2 进行 String， 结果为 key:'[object Object]', value: 'bbb' 两个 key 相同 直接进行覆盖

// 1. Map 的赋值
const map1 = new Map();
map1.set(obj1, 'aaa');
map1.set(obj2, 'bbb');
console.log(map1); // Map(2) { { name: 'zs' } => 'aaa', { name: 'ls' } => 'bbb' }
// map 构造函数赋值
const map2 = new Map([
  [obj1, 'aaa'],
  [obj2, 'bbb']
])
console.log(map2); // Map(2) { { name: 'zs' } => 'aaa', { name: 'ls' } => 'bbb' }

// 2. Map 的其他属性
// size 
console.log(map1.size);
// get
console.log(map1.get(obj1));
// delete
map1.delete(obj2)
console.log(map1);
// set
map1.set(obj2, 'ccc');
// clear
// map1.clear()
// 遍历 map
map1.forEach((value, key, map) => {
  console.log(key, value);
})
console.log('============================');
map1.entries(entries => {
  console.log(entries)
})

for (const item of map1) {
  console.log(item); // [ { name: 'zs' }, 'aaa' ] 数组的形式
}