// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eating() {
//         console.log(this.name + '正在吃饭');
//     }
// }

// class Student extends Person{
//     constructor(name, age, sno) {
//         super(name, age);
//         this.sno = sno;
//     }
//     running() {
//         console.log(this.name + '正在跑步');
//     }
// }

"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

// 寄生组合式继承
function _inherits(subClass, superClass) {
    // 判断父组件是不是函数
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

// o: subClass p:superClass
// 作用:继承父类中的静态方法
// 子类的__proto__ 指向父类
//  上一级函数只判断了 父类是不是函数，没有判断子类是不是函数，所以设置 __proto__的指向
function _setPrototypeOf(o, p) {
  _setPrototypeOf =
  // Object.setPrototypeOf() 设置一个对象的prototype对象,并且返回对象本身， 第一个参数是 对象本身， 第二个参数是设置的prototype
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

// Derived： 派生 子类
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;  // Student
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

// o：子类
function _getPrototypeOf(o) {
   
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
    // 判断是不是 构造函数
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}


// 给构造器函数 赋值
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    //   descriptor 中存在 key 也存在 value
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
// Constructor： 构造函数
// protoProps：函数中的非静态函数
// staticProps： 函数中的静态函数
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// 只能 进行 new Person() 操作，不能直接调用 Person()
// 那么他的作用就是创建一个新的对象，并将这个对象的原型，指向 Person.prototype
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

var Student = /*#__PURE__*/ (function (_Person) {
    // 寄生组合式继承
  _inherits(Student, _Person);
  var _super = _createSuper(Student);

  function Student(name, age, sno) {
    var _this;

    _classCallCheck(this, Student);
    debugger;
    _this = _super.call(this, name, age);
    _this.sno = sno;
    return _this;
  }

  _createClass(Student, [
    {
      key: "running",
      value: function running() {
        console.log(this.name + "正在跑步");
      }
    }
  ]);

  return Student;
})(Person);
