const person = {
    name: 'zs',
    age: 12
}

// 所以 assign 在对象只有一层时，进行的是一个深拷贝
const assignPerson = Object.assign({}, person);
console.log(assignPerson)
assignPerson.name = 'li'
console.log(person)
console.log(assignPerson);

// assign 的另一个用处就是合并对象，但是他不能够合并原型链中的属性以及不可枚举的属性
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

// assign 的返回值与 target 是同一个值
console.log(target === returnedTarget)

