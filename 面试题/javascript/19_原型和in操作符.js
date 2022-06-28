class Person {
    constructor (name, age) {
        this.name = name;
        this.age = age
    }
}

class Student extends Person {
    constructor(name, age, sno) {
        super(name, age)
        this.sno = sno
    }
}
// in 操作符 可以检查某个对象在原型链上是否存在某个属性
const p1 = new Student('zs', 23, '10010')

const key1 = 'name', key2 = 'constructor', key3 = 'sno';

console.log(key1 in p1, key2 in p1, key3 in p1)

console.log(p1[key1] === undefined , p1[key2] === undefined, p1[key3] === undefined)