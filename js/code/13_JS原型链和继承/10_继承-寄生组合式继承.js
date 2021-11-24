function createObj(o) {
    function Fn() {}
    Fn.prototype = o;
    return new Fn();
}


function inheritPrototype(subFn, parentFn){
    subFn.prototype = Object.create(parentFn.prototype);
    Object.defineProperty(subFn.prototype,'constructor', {
        enumerable: false,
        writable: false,
        configurable: false,
        value: subFn,
    })
}

function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.eating = function() {
        console.log(this.name + "正在吃饭");
    }
}

function Student(name, age, address, sno) {
    Person.call(this, name, age, address); // 绑定 this 确保创建出来的对象是相互独立的
    this.sno = sno;
}

function Teacher(name, age, address, tno) {
    Person.call(this, name, age, address)
    this.tno = tno;
}

Student.prototype = Object.create(Person.prototype);  //创建了一个对象 a， 并且a的__proto__指向了Perosn的Prototype，然后再将对象Student的prototype指向对象a

// 每个子类都需要进行配置，那么你可以写成一个工具函数
Object.defineProperty(Student.prototype,'constructor', {
    enumerable: false,
    writable: false,
    configurable: false,
    value: Student,
})


inheritUtils(Teacher, Person);

var stu1 = new Student('张三', 23, 'sh', 423423);
console.log(stu1);

var teacher1 = new Teacher('李四', 24, 'bj', 234234);
console.log(teacher1);


// 还有一个缺陷就是 打印出来的类名是 Person 而不是子类
// 实际上，打印出来的类名 就是 构造函数原型中的 constructor 的名字
// 但是我们给构造函数的prototype函数更改赋值时，同时也将其中的 constructor 给替换掉了
