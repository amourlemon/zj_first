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