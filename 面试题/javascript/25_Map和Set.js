const map = new Map();
let obj = {name: 'zs'};
map.set(obj, 'zs')
map.set(NaN, 'li')
console.log(map.get(NaN))

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
set.add('zs').add('ls').add('ww').add(1).add(3).add(2).add(null).add(undefined).add(NaN).add({name: 'zs'}).add(true).add(false)
console.log(set.has(false));
for(let val of set) {
    console.log(val)
}