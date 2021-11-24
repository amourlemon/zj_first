function Person() {
    this.name = 'zs',
    this.age = 23;
    this.friends = []; 
}

Person.prototype.eating = function() {
    console.log(this.name + '正在吃');
}

function Student() {
    this.snu = '232434'
}

Student.prototype = new Person();   // Student 的原型指向了 Person的 prototype 原来的默认原型被删除

Student.prototype.studing = function() {
    console.log(this.name + '正在学');
}

var stu1 = new Student();
var stu2 = new Student();
console.log(stu1.name);
console.log(stu1.snu);
stu1.studing();

// 原型链继承的缺点
// 1. 不能打印出对象的所有属性
console.log(stu1);

// 2. 会影响两个相互独立的属性

stu1.friends.push('ls');
console.log(stu1.friends);  // [ls]
console.log(stu2.friends);  // [ls]

// 以下的不会影响，因为这是相当于在 stu1 的对象中新增了一个属性，两者互不影响
stu1.name = 'sh'
console.log(stu1.name);  // 去自己的属性中寻找
console.log(stu2.name);  // 去原型链中寻找

// 3. 不能够传递参数