var obj = {
    name: '张三',
    age: 100,
    height: 1.88
}

// 对象的解构 1
var { name, age, height } = obj;
console.log(name, age, height);

// 对象的解构 2
var { name } = obj;
console.log(name);

// 对象的解构 3
var {name: newName} = obj;
console.log(newName);

// 对象的解构四

var{ name, address:newAddress = '上海' } = obj;

console.log(name, newAddress); 
console.log(obj);

var {name, ...objArr} = obj;

console.log(name, objArr);