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

class Student {
    constructor(name) {
        this.name = name
    }
}
const myTarget = function() {}; 
const StudentProxy = new Proxy(Student, { 
 construct(target, argumentsList, newTarget) { 
 console.log('construct()'); 
 return Reflect.construct(...arguments) 
 } 
}); 
new StudentProxy; 
// construct()