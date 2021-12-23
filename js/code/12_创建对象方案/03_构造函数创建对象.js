function Person(name, age, address) {

    // 在使用构造函数时，默认在函数内部  创建了一个对象
    // 并将 this 绑定在这个对象上
    // 然后执行函数中的代码
    // 最后将这个对象 返回
    this.name = name;
    this.age = age;
    this.address = address;
    this.eating = function () {
        console.log(this.name + '正在吃饭');
    }
}

var p1 = new Person('zs', 12, 'bj');
var p2 = new Person('ls', 22, 'yt');
var p3 = new Person('ww', 33, 'cq');


console.log(p1, p2, p3);