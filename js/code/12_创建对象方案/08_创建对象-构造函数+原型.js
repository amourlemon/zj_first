function Person(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
}

Person.prototype.eating = function() {
    console.log(this.name + '在吃东西');
}

var p1 = new Person('zs', 20, 'bj');
var p2 = new Person('ls', 23, 'sh');

p1.eating();
p2.eating();