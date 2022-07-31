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

console.log(undefined > null)