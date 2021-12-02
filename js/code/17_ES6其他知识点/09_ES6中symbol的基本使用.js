// symbol 在ES6中 是一种新的基本数据类型
const s1 = Symbol('aaa');
const s2 = Symbol('bbb')
console.log(s2.description);

// 相当于生成了永不会重复的随机字面两
console.log(s1, s2, s1 === s2);

// Es6 之前
var info = {
    name: '张三',
    age: 12
}
// 向 info 中添加一个新的属性 name 会把之前的 name 属性覆盖掉（情况发生在）
info['name'] = '李四';
console.log(info);

// Symbol 作为 key
// 1. 在定义对象字面量中使用
const obj = {
    [s1]: 'aaa',
    [s2]: 'bbb'
}
console.log(obj);

// 2. 新增属性
const s3 = Symbol();
obj[s3] = 'ccc';
console.log(obj);

// 3. 获取 key
    // 不能直接使用 Object.keys(obj)、Object.getOwnPropertyDescriptors来获取
    console.log(Object.getOwnPropertySymbols(obj));

// 4. Symbol.for 的使用
const s4 = Symbol.for('ddd');
const s5 = Symbol.for('ddd');

console.log(s4 === s5);
    