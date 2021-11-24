// 对象的原型  [[prototype]] 又被称为隐式原型
var obj = {
    name: 'zs'
}

// 在早期的 ECMA 中并没有规范如何去查看原型
// 但是通过浏览器的解析，可以使用 obj.__proto__进行查看
console.log(obj.__proto__);

// 在 ECMA5 之后规范了如何查看原型
console.log(Object.getPrototypeOf(obj));

// 原型的作用
// 查看对象的属性时，首先会查找对象的作用域存在该属性与否，如果不存在然后再去原型中查看
console.log(obj.age);
obj.__proto__.age = 20;
console.log(obj.age);