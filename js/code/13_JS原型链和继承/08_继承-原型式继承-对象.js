var obj = {
    name: 'zhangsan',
    age: 20
}

// 方式一：
function createObject1(o) {
    var object = {};
    // 创建出一个新的对象，并将这个对象的原型指向 o
    Object.setPrototypeOf(object, o)
    return object;
}

// 方式二
function createObject2(o) {
    function Fn() {}
    Fn.prototype = o;
    return new Fn();
}

var stu1 = createObject1(obj);
var stu2 = createObject2(obj);
// 第三种方法
var stu3 = Object.create(obj);

console.log(stu1.__proto__);
console.log(stu2.__proto__);
console.log(stu3.__proto__);



