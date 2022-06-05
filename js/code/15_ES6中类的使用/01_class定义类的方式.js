// 直接定义
class Person {

}

// var Student = class Student{

// }
function Student() {}
console.log('p1', p1);
var stu1 = new Student();
// Person 类的原型对象，实际上就是构造函数的原型对象
console.log(Person.prototype);
console.log(Student.prototype);
// 打印构造函数 和 类 的原型中的原型
console.log(Person.prototype.__proto__);   // [Object: null prototype] {}
console.log(Student.prototype.__proto__);  // [Object: null prototype] {}
// 打印 原型中的构造函数
console.log(Person.prototype.constructor);  // 指向的是 class Person
console.log(Student.prototype.constructor); // 指向的是 Function Student

console.log(Object.getOwnPropertyDescriptors(Person.prototype));
console.log(Object.getOwnPropertyDescriptors(Student.prototype));