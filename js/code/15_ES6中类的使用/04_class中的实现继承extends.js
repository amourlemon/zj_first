class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eating() {
        console.log(this.name + '正在吃饭');
    }
    running() {
        console.log(this.name + '正在跑步');
    }
    reading() {
        console.log(this.name + '正在看书');
    }
    static staticMethod() {
        console.log('staticMethod');
    }
}

class Student extends Person {
    constructor(name, age, sno) {
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
            //  at new Student
        // this.name = name;
        // this.age = age;  
        // 使用 super 进行赋值
        super(name, age);
        this.sno = sno;
    }
    // 子类重写父类的方法
    running() {
        console.log('Student' + this.name + '正在跑步');
    }
    // 子类重写父类方法二
    reading() {
        super.reading();
        console.log('看了一本课外书');
    }
    static staticMethod() {
        console.log('Student Static Method');
    }
}

var s1 = new Student('张三', 23, 2345234);
console.log(s1);
// 子类方法的继承
s1.eating();
s1.running();
s1.reading();
// 静态方法的继承
Student.staticMethod();

// 重新的方法会出现在原型中
console.log(Object.getOwnPropertyDescriptors(s1.__proto__));
console.log(Object.getOwnPropertyDescriptors(s1.__proto__.__proto__));
// console.log(Object.getOwnPropertyDescriptors(s1.__proto__.__proto__.__proto__));
