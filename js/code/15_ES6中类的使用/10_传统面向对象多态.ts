// 多态的概念：不同类执行相同的操作，产生不同的行为

class Animal {
    shot() {}
}

class Dog extends Animal {
    shot() {
        console.log('汪汪汪');
        
    }
}

class Cat extends Animal {
    shot() {
        console.log('喵喵喵');
        
    }
}

var d1 = new Dog();
var c1 = new Cat();

d1.shot();
c1.shot()

// 多态的条件
// 1. 必须有父类
// 2. 子类必须重写父类的方法
// 3. 父类引用指向子类对象：Parent p = new Child();