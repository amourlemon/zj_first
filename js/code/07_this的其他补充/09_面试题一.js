var name = "window";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  }
};
function sayName() {
  var sss = person.sayName;
  sss(); // var 声明的变量作用域提升 window
  person.sayName(); // 'person 隐式调用'
  (person.sayName)(); // window
  (b = person.sayName)(); // window
}
// sayName();

(person.sayName)()


// function sayName() {
//     var sss = person.sayName;
//     // 独立函数调用，没有和任何对象关联
//     sss();  
//     // 关联
//     person.sayName(); 
//     (person.sayName)(); 
//     (b = person.sayName)(); 
//   }