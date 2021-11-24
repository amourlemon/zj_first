function Foo(name, sex) {
    //  代码的执行顺序 严格的自上到下执行
    this.name = name;
    this.sex = sex;
    console.log(this);
    }

// 实例的绑定
var p1 = new Foo('张三','男');
console.log(p1);
var p2 = new Foo('李四','男');