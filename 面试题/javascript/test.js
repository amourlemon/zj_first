// // 实现new
// function newOperator(conFn) {
//     if(typeof conFn !== 'function') {
//         throw new Error(`${conFn} isn't a function`)
//     }
//     const newObj = Object.create(conFn.prototype)
//     const args = [...arguments]
//     args.splice(0, 1)
//     const returnObj = conFn.apply(newObj, args)
//     const isObject = typeof returnObj === 'object' && returnObj !== null;
//     const isFunction = typeof returnObj === 'function'
//     if(isObject || isFunction) {
//         return returnObj
//     }
//     return newObj
// }

// function Foo(name, age) {
//     this.name = name;
//     this.age = age
// }

// const p1  = newOperator(Foo, 'zx', 23)
// // console.log(p1);


// const obj = {
//     name: 'zs',
//     foo: () => {
//         setTimeout(() => {
//             console.log(this.name);
//         }, 1000)
//     }
// }
// function boo() {
//     console.log(this);
//     setTimeout(function () {
//         console.log(this);
//     }, 1000)
// }
// boo.call(obj)

// const myTarget = {
//     name: '张三',
//     age: 34
// }; 
// const proxy = new Proxy(myTarget, { 
//     get(target, property, receiver) { 
//         console.log('get()'); 
//         console.log(target,property,receiver)
//         return Reflect.get(...arguments) 
//     },
//     set(target, property, receicer) {
//         console.log(`${property}的值被重新设置了`)
//         return Reflect.set(...arguments)
//     }
// }); 

// console.log(proxy.age)

// proxy.name = '李四'
// console.log(myTarget)

// class Student {
//     constructor(name) {
//         this.name = name
//     }
// }
// const myTarget = function() {}; 
// const StudentProxy = new Proxy(Student, { 
//  construct(target, argumentsList, newTarget) { 
//  console.log('construct()'); 
//  return Reflect.construct(...arguments) 
//  } 
// }); 
// new StudentProxy; 
// construct()

// function countSum(matrix) {
//     const m  = matrix.length;
//     const n = matrix[0].length;
//     const l = Math.min(m, n);
//     const colEnd = m -l;
//     const columnEnd = n - l;
//     let sum = 0;
//     for(let i = 1; i < l; i++) {
//         for(let k = 0; k <= columnEnd; k++) {
//             for(let j = 0; j <= colEnd; j++) {
//                 sum = Math.max((matrix[j][k]+ matrix[j+i][k]+ matrix[j][k+i]+matrix[j+i][k+i]), sum)
//             }
//         }
//     }
//     return sum
// }

// const matrix = [[2,8,4,2], [2,8,4,2]]

// console.log(matrix);

// console.log(countSum(matrix))


// const numArr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9'];

// const newArr = numArr.map(item => {
     
//      return item = + item
// })

// const iterator = newArr[Symbol.iterator]()

// for(let num of iterator) {
//     if(num > 3) break
// }


// for(let num of iterator) {
//      console.log(num)
// }


// 箭头函数 this 问题
// 对象没有上下文，因为相对于函数来说其本身就是上下文
// const obj = {
//     name: 'zs',
//     sayName: () => {
//         console.log(this.name)
//     }
// }

// obj.sayName();


// function Foo() {}

// const f = new Foo();

// console.log(f.__proto__ === Foo.prototype)   // true
// console.log(Foo.prototype.__proto__ === Object.prototype) // true

// console.log(Foo.__proto__ === Function.prototype) // true

// console.log(Object.__proto__ === Function.prototype) // true

// console.log(Object.prototype.__proto__) // null



// function Person() {
//     this.name = 'person'
// }

// function Student() {
    
// }
// // Student.prototype= new Person();

// Student.prototype = Object.create(Person.prototype)

// const s = new Student();
// console.log(s.name)

// class Person {
//     eating() {
//         console.log('eating')
//     }
// }

// class Student extends Person {
//     constructor() {
//         super()
//     }
// }

// const s1 = new Student();
// s1.eating();

// process.nextTick(function A() {
//     console.log(1);
//     process.nextTick(function B(){console.log(2);});
//   });

//   Promise.resolve('aaa').then(res => {
//     console.log(res)
//   })
  
//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
//   }, 0)
  // 1
  // 2
  // TIMEOUT FIRED

  
// setImmediate(function A() {
//     console.log(1);
//     setImmediate(function B(){console.log(2);});
//   });
  
//   setTimeout(function timeout() {
//     console.log('TIMEOUT FIRED');
//   }, 0);

// class Foo {
//   #count = 0;
//   constructor(x) {
//     this.#count = x;
//   }
//   increasement() {
//     this.#count++;
//   }
//   logCount() {
//     console.info(this.#count)
//   }
//   static {
//     getPrivateField = () => {}
//   }
// }

// const foo = new Foo();
// foo.increasement()
// foo.logCount()
// console.log(foo.constructor)

// function func1(){}
// function func2(){}
// func1.prototype = func2.prototype = {}
// const son = new func1();
// console.log(son instanceof func1, son instanceof func2)

// class cls {
//   constructor() {
//     this.flag = true
//   }
//   func1(){
//     console.log(this.flag)
//   }
//   func2 = () => {
//     console.log(this.flag);
//   }
// }

// const son = new cls()
// console.log(son)
// console.log(son.func1)
// setTimeout(son.func1, 0)
// setTimeout(son.func2, 0)



// console.log(cls.prototype === son.__proto__)
// console.log(cls.prototype.func1)


// class Person {
//   constructor() {
//      this.sayHi = function() {
//       console.log('sayHi');
//     }
//   }
//   stringKey() {
//     console.log('invoked stringKey');
//   }
// }
//   let p = new Person();
//   p.stringKey(); // invoked stringKey
// p.sayHi()
// console.log(p)


// var n = 123;

// function f1() {
//   console.log(this.n);
// }

// var n2 = {
//   n: 456,
//   f1: function () {
//     f1();
//   },
//   f2: f1
// };

// n2.f1();
// n2.f2();

// var a=b=10; 
// (function() {var a = b = 20})();
// console.log(a,b)

// var a=b=10; (function() {var a = b =20})();console.log(a,b)

// console.log(a,b)

// function foo(n, p1, p2, p3) {
//   let res = 0;
//   const p = [p1,p2, p3];
//   for(let i = 0; i < n; i++) {
//     if(p[i] > 0.5) {
//       res += p[i]
//     } else {
//       res += 1-p[i]
//     }
//   }
//   return res.toFixed(4);
// }

// console.log(foo(3, 1.0000, 0.0000, 0.5000))
// const obj = {
//   func() {
//     setTimeout(function() {
//       console.log(this);
//     }, 0)
//   }
// }

// obj.func.call(obj)


// var value = parseFloat(1). toString(2)
// let index = 0, flag = false;
// let pre = ''
// for(let i = 0; i < value.length; i++) {
//   pre += value[i]
//   if('.' === value[i]) {
//     index = i;
//     flag = true;
//     break;
//   }
// }

// const res = flag ? pre + value.substring(index+1, index + 9) : value
// console.log(res)

// const data = new Date()
// console.log(data)
// console.log(data.getFullYear())
// console.log(data.getMonth())
// console.log(data.getDate())
// console.log(data.getHours())
// console.log(data.getMinutes())
// console.log(data.getSeconds())

// function foo() {
//   let s1 = '6 5';
//   let s2 = '5 6 7 8 9 10';
//   const orderDetail = s1.split(' ')
//   const time = parseInt(orderDetail[1])
//   const orderArray = s2.split(' ')
//   orderArray.forEach((item, index) => {
//     orderArray[index] = Number(item)
//   })
//   orderArray.sort((a, b) => a-b)
//   let ddl = 0;
//   let res = 0;
//   for(let i = 0; i < orderArray.length; i++) {
//     if(ddl + time <= orderArray[i]) {
//       ddl = ddl + time
//     } else {
//       res++
//     }
//   }
  
// }
// foo()

// function foo() {
//   let s1 = 4;
//   let s2 = '1 2 3 4';
//   const origin = [];
//   const map = new Map();
//   const pk = s2.split(' ');
//   pk.forEach((item, index) => {
//     pk[index] = parseInt(item);
//   })
//   const res = new Array(s1);
//   for(let i = 0; i < s1; i++) {
//     origin.push(i)
//   }
//   let index = 0;
//   for(let i = 0; i < s1; i++) {
//     origin.push(origin.shift());
//     origin.push(origin.shift());
//     let value = origin.shift();
//     map.set(value, i)
//   }
// }

// function foo() {
//     let n = 4;
//     let s2 = '1 2 3 4';
//     const nums = s2.split(' ');
//     nums.forEach((item, index) => {
//       nums[index] = parseInt(item)
//     })
//     const ans = [];
//     for(let i = n -1; i >= 0; i--) {
//       ans.unshift(nums[i]);
//       console.log(ans)
//       ans.unshift(ans.pop());
//       ans.unshift(ans.pop());
//     }

//     // for(let i = 0; i < n; i++) {
//     //   console.log(ans.shift());
//     //   if(i !== n - 1) {
//     //     console.log(' ')
//     //   }
//     // }
//     return ans
// }
// const res = foo().join(' ')
// console.log(res)

// const arr = ['a', 'b', 'c','a','s','c','a','b','c','a']
// const countObj = _.countBy(arr);
// console.log(countObj);

// console.log(['1','2','3'].map(parseInt));
// for(var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1)
// }
// for(let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1)
// }

// console.log(typeof NaN)


// const map = new Map();
// map.set(undefined, 1)
// console.log(map);

// (async () => {
//   console.log(1);
//   setTimeout(() => {
//     console.log(2);
//   })
//   await new Promise((resolve, reject) => {
//     console.log(3);
//     resolve();
//   }).then(() => {
//     console.log(4);
//   })
//   console.log(5);
// })()

// const arr = [];
// arr.push(() => {
//   console.log('aa');
// })
// console.log(arr)

// var a = 10;
// (function() {
//   console.log(a);
//   a = 5;
//   console.log(window.a);
//   var a = 20;
//   console.log(a);
// })()  // undefined, 10, 20

// var a = new A()
// function A() {}
// console.log(a);

// var b = new B();
// class B{}
// console.log(b);

// const arr = ['A', 'A', 'B', 'C', 'C', 'B', 'D', 'E', 'D', 'E', 'A'];

// function countObj(arr=[]) {
//   const obj = {};
//   arr.forEach(item => {
//     obj[item] = ++obj[item] || 1;
//   }) 
//   return obj
// }

// console.log(countObj(arr))

// function compose(...fn) {
//   return (...args) =>
//     fn
//       .reverse()
//       .slice(1)
//       .reduce((acc, cur) => cur(acc), fn[0](...args));
// }


// Promise.resolve(console.log(0))
//   .then(() => {
//     console.log(1);
//     Promise.resolve(console.log(5))
//       .then(() => console.log(3))
//       .then(() => console.log(4))
//       .then(() => console.log(6));
//   })
//   .then(() => console.log(2))
//   .then(() => console.log(7));


// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     // return Promise.resolve(4);
//     const f = new Promise((resolve, reject) => {resolve(4)})
//     return f.then()
//     // return 4
//   })
//   .then((res) => {
//     console.log(res);
//   });

// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });

// let url = "https://shanyue.tech?name=%E5%B1%B1%E6%9C%88&a=3&a=4";
// url = decodeURI(url)
// const obj = new URL(url)
// console.log(obj);

// console.log(new Date(9999999999999));

// let str = '[1,2,3,4]'

// str = str.replace(/(\[)|(\])/g,'');
// console.log(str);

// console.log('1');

// setTimeout(function() {
//     console.log('2');
//     process.nextTick(function() {
//         console.log('3');
//     })
//     new Promise(function(resolve) {
//         console.log('4');
//         resolve();
//     }).then(function() {
//         console.log('5')
//     })
// })
// process.nextTick(function() {
//     console.log('6');
// })
// new Promise(function(resolve) {
//     console.log('7');
//     resolve();
// }).then(function() {
//     console.log('8')
// })

// setTimeout(function() {
//     console.log('9');
//     process.nextTick(function() {
//         console.log('10');
//     })
//     new Promise(function(resolve) {
//         console.log('11');
//         resolve();
//     }).then(function() {
//         console.log('12')
//     })
// })


// var {foo: F, bar: B="123"} = {foo: "aaa", bar: "bbb"};

// console.log(F);
// console.log(B);
// console.log(bar);

class Foo {
  #count = 0;
  #index = 0;
  increasement() {
    this.#count++;
  }
  logCount() {
    if((this.#index++) % 2  === 0) {
      console.log(1);
    } else {
      console.log(2);
    }
  }
}

const foo = new Foo();
// foo.increasement()
foo.logCount()  
foo.logCount()  
foo.logCount()  
foo.logCount()  
foo.logCount()  
foo.logCount()  
foo.logCount()  
const foo2 = new Foo();
foo2.logCount()  
// 在 constructor 中也访问不到 定义的私有变量
// console.log(foo.constructor)
