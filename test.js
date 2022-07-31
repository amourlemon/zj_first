// // var id = 'GLOBAL';
// // var obj = {
// //   id: 'OBJ',
// //   a: function(){
// //     console.log(this.id);
// //   },
// //   b: () => {
// //     console.log(this.id);
// //   }
// // };
// // obj.a();    // 'OBJ'
// // obj.b();    // 'GLOBAL'
// // // new obj().a()  // undefined
// // console.log(new obj.a())
// // // new obj.b()  // Uncaught TypeError: obj.b is not a constructor

// // class Person {
// //   constructor(name) {
// //     this.name = name
// //   }
// // }

// // let p = new Person('zs');
// // let arr = [1,2,3,4,56,7,8]
// // console.log(Object.prototype.toString.call(arr))

// // console.log(p instanceof Person);

// // function Person(name) {
// //   this.name = name
// // }
// // 修改原型
// // Person.prototype.getName = function() {}
// // var p1 = new Person('hello')
// // console.log(p1.__proto__ === Person.prototype) // true
// // console.log(p1.__proto__ === p1.constructor.prototype) // true
// // // 重写原型
// // Person.prototype = {
// //   getName: function() {}
// // }
// // var p2 = new Person('hello')
// // console.log(p2.__proto__ === Person.prototype)        // true
// // console.log( p1.__proto__ ===  p2.__proto__); // false
// // console.log(p2.__proto__ === p2.constructor.prototype) // false


// // 打印出来全是5
// // for(var i = 0; i < 5; i++) {
// //   setTimeout(() => {
// //     console.log(i);
// //   }, 100)
// // }

// // 利用闭包实现有序打印
// // for(var i = 0; i < 5; i++) {
// //   (function(j) {
// //     setTimeout(() => {
// //       console.log(j);
// //     }, 100)
// //   })(i)
// // }


// // let a = 'Hello World!';
// // function first() {
// //   console.log('Inside first function');
// //   second();
// //   console.log('Again inside first function');
// // }
// // function second() {
// //   console.log('Inside second function');
// // }
// // first();



// async function async1(){
//   console.log('async1 start');
//    await async2();
//    console.log('async1 end')
// }
// async function async2(){
//    console.log('async2')
// }
// console.log('script start');
// async1();
// console.log('script end')
// // 输出顺序：script start->async1 start->async2->script end->async1 end


// console.log('=================================================================');
// // 通过这两个案例，也就是说在 async 标识的函数中，如果没有碰到异步函数，那么该函数的执行是在主线程中的
// function testAsy(x){
//   return new Promise(resolve=>{setTimeout(() => {
//       resolve(x);
//     }, 3000)
//    }
//   )
// }
// async function testAwt(){    
//  console.log('dfsfdf')
//  let result =  await testAsy('hello world');
//  console.log(result);    // 3秒钟之后出现hello world
//  console.log('cuger')   // 3秒钟之后出现cug
// }
// testAwt();
// console.log('cug')  //立即输出cug


// // setTimeInterval 精确度修复
// function setInterval(callback, interval) {
//   let timer
//   const now = Date.now
//   let startTime = now()
//   let endTime = startTime
//   const loop = () => {
//     timer = window.requestAnimationFrame(loop)
//     endTime = now()
//     if (endTime - startTime >= interval) {
//       startTime = endTime = now()
//       callback(timer)
//     }
//   }
//   timer = window.requestAnimationFrame(loop)
//   return timer
// }1
// let a = 0
// setInterval(timer => {
//   console.log(1)
//   a++
//   if (a === 3) cancelAnimationFrame(timer)
// }, 1000)

// var obj = {brand: '华为', price: 1999};
// Object.defineProperty(obj, 'id', {value: 1})
// Object.defineProperty(obj, 'price', {configurable: false})

// console.log(Object.keys(obj).length)

// for(var k in obj) {
//   console.log(obj[k])
// }

// obj.price = 999;
// delete obj['price']

// console.log(obj)

// console.log(1)
// let a = setTimeout(() => {console.log(2)}, 0)
// console.log(3)
// Promise.resolve(4).then(b => {
//   console.log(b);
//   clearTimeout(a)
// })
// console.log(5)

// function sort(nums) {
//   let left = 0, right = nums.length;
//   while(left < right) {
//     nums[left] = nums[left] + nums[right];
//     nums[right] = nums[left] - nums[right];
//     nums[left] = nums[left] - nums[right];
//     left++;
//     right--;
//   }
//   return nums
// }

// const nums = [1,2,3,4]

// console.log(Math.max(nums))


// console.log(Object.__proto__ === Function.prototype)

// console.log(Function.__proto__ === Function.prototype)

// console.log(Object.__proto__.__proto__)

const urlS = 'http://www.baidu.com/artical/list?auth=abc';

const urlObj = new URL(urlS)

console.log(urlObj);