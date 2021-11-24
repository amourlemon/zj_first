var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss(); 
  person.sayName(); 
  (person.sayName)(); 
  (b = person.sayName)(); 
}
sayName();


function sayName() {
    var sss = person.sayName;
    // 独立函数调用，没有和任何对象关联
    sss();  // window
    // 关联
    person.sayName(); // person
    (person.sayName)(); // person
    (b = person.sayName)(); // window
  }