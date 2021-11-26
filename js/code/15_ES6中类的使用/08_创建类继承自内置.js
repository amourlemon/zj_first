// 所有的类默认继承 Object 类
class Person extends Object {}

class DiyArr extends Array {
    getFirstEl() {
        return this[0];
    }
}

var p1 = new DiyArr('张三', '李四', '王五');
console.log(p1.getFirstEl());
console.log(p1 instanceof DiyArr);
p1 = [];
console.log(p1 instanceof DiyArr);
// console.log(p1);
// console.log(Object.getOwnPropertyDescriptors(p1.__proto__));