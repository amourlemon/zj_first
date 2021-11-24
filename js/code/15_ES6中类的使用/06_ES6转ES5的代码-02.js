// class Person {
//  constructor(name, age) {
//     this.name = name;
//     this.age = age;
//  }
//  eating() {
//      console.log(this.name + '正在吃饭');
//  }   
// }

// var p1 = new Person('张三', 23)

"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    console.log(descriptor);
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}


// 设置了一个 纯函数  不影响外界参数
// 加了这个注释的好处是，如果这个函数没有用到，那么在项目打包的时候 会将这个函数删除
// 写成这样的好处是 不会受到外界参数的影响
var Person = /*#__PURE__*/ (function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [
    {
      key: "eating",
      value: function eating() {
        console.log(this.name + "正在吃饭");
      }
    }
  ]);

  return Person;
})();

var p1 = new Person("张三", 23);
