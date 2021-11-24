var obj = {
    name: 'zs',
    age: 23
}

// 禁止对象再添加属性
Object.preventExtensions(obj);
obj.sex = 'male';
console.log(obj);

// 禁止对象配置/删除里面的属性
// Prevents the modification of attributes of existing properties, and prevents the addition of new properties.

// @param o — Object on which to lock the attributes.
Object.seal(obj);

delete obj.name;
console.log(obj);

// 让属性不再被修改
Object.freeze(obj);
obj.name = 'ls';
console.log(obj);
