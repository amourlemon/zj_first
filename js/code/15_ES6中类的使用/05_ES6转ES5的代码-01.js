// class Person {}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  var Person = function Person() {
      console.log(Person);
    _classCallCheck(this, Person);
  };

//   Person();   Cannot call a class as a function

var p1 = new Person();

function Student() {
    console.log(this);
    console.log(this instanceof Student);
    console.log(Student);
}

Student(); // this 是 win
new Student(); // this 指向的是 Student {}