// class Person {}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  var Person = function Person() {
    // 这里的 this，就是Person实例的构造函数
    _classCallCheck(this, Person);
  };

//   Person();   Cannot call a class as a function

var p1 = new Person();

function Student() {
    // console.log(this);
    // console.log(this instanceof Student);
    // console.log(Student);
}

Student(); // this 是 win
new Student(); // this 指向的是 Student {}