// 用于检测构造函数的prototype，是否出现在某个实例对象的原型链上
function Person() {}

function Student() {}

function inheritPrototype(subType, parentType) {
    subType.prototype = Object.create(parentType.prototype);
    Object.defineProperty(subType.prototype, 'constructor', {
        configurable: false,
        enumerable:false,
        writable: true,
        value:subType
    })
}

inheritPrototype(Student, Person);

var stu = new Student();
console.log(stu instanceof Student);
console.log(stu instanceof Person);
console.log(stu instanceof Object);