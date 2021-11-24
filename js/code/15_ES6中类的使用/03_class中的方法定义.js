var names = ['张三', '李四', '王武'];
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this._address = '北京市';
    }
    // 出现在 Person 的原型中
    eating() {
        console.log(this.name + '正在吃饭');
    }

    // 类的访问器操作
    get address() {
        console.log('拦截访问操作');
        return this._address;
    }
    set address(address) {
        // 拦截设置操作
        if(address !== '烟台市') {
            this._address = '烟台市'
        } else {
            this._address = address;
        }
    }

    static createPerson() {
        var nameIndex = Math.floor(Math.random()* names.length);
        var name = names[nameIndex];
        return new Person(name, Math.floor(Math.random() * 100))
    }
}

var p1 = new Person('张三', 23);
console.log(Person.prototype.eating);
p1.eating();
p1.address = '上海市';
console.log(p1);

for(var i = 0; i<2; i++) {
    // 直接使用类调用
    console.log(Person.createPerson());
}

// p1 的原型中不存在类的静态方法
console.log(Object.getOwnPropertyDescriptors(p1.__proto__));