// function foo(x, y) {
//     return Math.min(x, y, parseInt((x+y)/3))
// }

// console.log(foo(44, 85))

// function Person(age) {
//     this.age = age;
// }

// Person.prototype = {
//     constructor: Person,
//     getAge: function() {
//         console.log(this.age)
//     }
// }

// var ldh = new Person(24);
// Person.prototype.age = 18;
// Object.prototype.age = 20;
// ldh.getAge()

// (function(x) {
//     delete x;
//     console.log(typeof x)
// })(1)

// const people = {name: 'cc'}
// function myAge(age) {
//     console.log(`${this.name}is ${age}`)
// }

// myAge.call(people,21)
// myAge.bind(people,21)


const arr = new Array(4).fill('').map(() => new Array(4).fill(''))

console.log(arr)