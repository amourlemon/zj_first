function Student(name, age) {
    this.name = name;
    this.age =  age;
}
function Teacter() {

}

const teacter = Reflect.construct( Student, ['张三',56], Teacter);
console.log(teacter); // Teacter { name: '张三', age: 56 }
console.log(teacter.__proto__ === Teacter.prototype ); // true
console.log(Object.getOwnPropertyDescriptors(Student.prototype));