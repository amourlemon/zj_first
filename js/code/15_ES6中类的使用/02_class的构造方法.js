// 类传递参数
class Person {
    // 注意：类的构造方法只能有一个
    // 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

var p1 = new Person('张三',23)
console.log(p1);