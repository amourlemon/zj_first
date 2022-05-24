//  Object.defineProperty 可以对 对象的属性进行修改，并且加上一些配置
const obj = {}
Object.defineProperty(obj, 'age', {
    configurable: false, // 数据属性描述符  默认值是 true 作用： 数据是否可以删除，是否可以修改属性的特性或者是是否能将他变为存取属性描述符
    enumerable: 'true',  // 是否能够遍历，默认值 true
    value: 12, //属性的值 默认值是 undefined
    writable: true
})
obj.age = 18;
console.log(obj);

console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(obj.age);