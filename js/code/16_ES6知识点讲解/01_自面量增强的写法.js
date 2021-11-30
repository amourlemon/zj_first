var age = 23;
var school = 'ytu';

var obj = {
    // age: age,
    // school: school
    // 1. property shorthand
    age,
    school,
    // 2. method short hand
    eating: function () {
        console.log(this);
    },
    running() {
        console.log(this);
    },
    acFn:() => {
        console.log(this);
    },
    // 3.computed property name(计算属性)
}

obj.eating();
obj.running();
obj.acFn();
obj['年龄是：'+age] = 'hhh';
console.log(obj);

