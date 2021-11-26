// JS 只能实现单继承，不能实现多继承
class Person {
    eating() {
        console.log('正在吃饭');
    }
}


class Student {
    studing() {
        console.log('正在学习');
    }
}

class Child {
    playing() {
        console.log('正在玩耍');
    }
}

// var c1 = new Child();

// c1.eating()

//  Mixin 混入效果（实现多继承的效果）

// 创建一个混入函数
function mixInStuFn(baseClass) {
    class newClass extends baseClass {
        studing() {
            console.log('正在学习');
        }
    }
    return newClass;
}

function mixInPerFn(baseClass) {
    return class extends baseClass {
        eating() {
            console.log('正在吃饭');
        }
    }
}


var NewChild = mixInPerFn(mixInStuFn(Child)); // 实现伪多继承
var c2 = new NewChild();

c2.playing();
c2.eating();
c2.studing();
