// 监听 obj1，obj2 中数据发生变化

const obj1 = {
    name: '张三',
    age: 79
}

const obj2 = {
    name: '李四',
    age: 80
}

function obj1NameFn1() {
    console.log('obj1NameFn1执行了');
}
function obj1NameFn2() {
    console.log('obj1NameFn2执行了');
}
function obj1AgeFn1() {
    console.log('obj1AgeFn1执行了');
}
function obj1AgeFn2() {
    console.log('obj1AgeFn2执行了');
}
function obj2NameFn1() {
    console.log('obj2NameFn1执行了');
}
function obj2NameFn2() {
    console.log('obj2NameFn2执行了');
}

// 1. 创建 weakMap
const weakMap = new WeakMap();

// 2. 收集依赖结构
   // 2.1 对 obj1 进行收集
const obj1Map = new Map();
obj1Map.set('name', [obj1NameFn1, obj1NameFn2]);
obj1Map.set('age', [obj1AgeFn1, obj1AgeFn2]);
weakMap.set(obj1, obj1Map);
    // 2.2 对 obj2 进行收集
const obj2Map = new Map();
obj2Map.set('name', [obj2NameFn1, obj2NameFn2]);
weakMap.set(obj2, obj2Map);

obj1.name = '王五';
const targetMap = weakMap.get(obj1);
const fnArr = targetMap.get('name');
fnArr.forEach(fn => {
    fn();
})