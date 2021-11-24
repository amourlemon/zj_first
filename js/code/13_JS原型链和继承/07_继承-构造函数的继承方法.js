function Person(name, age, friends) {
    this.name = name;
    this.age = age;
    this.friends = friends;
}

function Student(name, age, friends, sno) {
    Person.call(this, name, age, friends);
    this.sno = sno;
}

Student.prototype = new Person();

var stu1 = new Student('zs', 33, ['kobe'], 213123);
var stu2 = new Student('ls', 22, ['james'], 5345345);

// 解决了第一个问题： 不能打印 对象的全部信息
console.log(stu1);
console.log(stu2);

// 解决了第二个问题： 对象之间的独立问题
stu1.friends.push('xiaoming');
console.log(stu1.friends);
console.log(stu2.friends);

// 同时解决了第三个问题， 可以传递参数

// 但是使用构造函数进行继承也是有两个缺点的
    // 1.Person 函数至少要调用两次
    // 2.stu 的原型对象上会出现多余的属性，这些属性是没有必要的