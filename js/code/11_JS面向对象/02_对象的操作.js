var obj = {
    name: 'ls',
    age: 34,
    weight: '43kg'
};

console.log(obj);

// 1. 对象的属性删除
delete obj.age;
console.log(obj);

// 2. 对象属性的修改
obj.name = 'zs'
console.log(obj);

//  Object.defineProperty 可以对 对象的属性进行修改，并且加上一些配置
Object.defineProperty(obj, 'age', {
    configurable: false, // 数据属性描述符  默认值是 false 作用： 数据是否可以删除，是否可以修改属性的特性或者是是否能将他变为存取属性描述符
    enumerable: 'true',  // 是否能够遍历，默认值 false
    value: 12, //属性的值 默认值是 undefined
    writable: true
})
obj.age = 18;
console.log(obj);
// console.log(obj.age);