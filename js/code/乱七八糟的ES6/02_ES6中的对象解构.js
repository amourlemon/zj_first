const obj1 = {
    name: '张三',
    age: 34,
}

const obj2 = {
    name: '李四',
    age: 45
}

// const target = new Set();
let target = {}
function first() {
    const {name, age} = obj1;
    target = {name, age};
}
function second() {
    const {name, age} = obj2;
    target = {name, age};
}

first();
console.log(target);
second();

console.log(target);


// const {name, age} = obj2; // 发生变化 失败

