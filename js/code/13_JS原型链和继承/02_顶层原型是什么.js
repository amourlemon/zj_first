var obj = {
    name: 'zs'
}

console.log(obj.__proto__);

console.log(obj.toString);

// 顶层原型不是空的，里面存在着各种方法，只不过是不可以枚举的
console.log(Object.getOwnPropertyDescriptors(obj.__proto__));

// 顶层原型的原型对象必为 null
console.log(obj.__proto__.__proto__);  // null

