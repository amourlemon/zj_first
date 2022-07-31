const map = new Map();
let obj = {name: 'zs'};
map.set(obj, 'zs')

console.log(map)

obj = null;
console.log(map)

const weakMap = new WeakMap();
let newObj = {name: 'ls'};
weakMap.set(newObj, 'ls');
// 下面的 newObj = null 也会影响到下面的输出语句
console.log(weakMap);
newObj = null;
console.log(weakMap);

const set = new Set()
set.add('zs').add('ls').add('ww').add(1).add(3).add(2)
for(let val of set) {
    console.log(val)
}