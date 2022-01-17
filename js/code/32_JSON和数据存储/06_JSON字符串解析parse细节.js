const obj = {
    name: '张三',
    age: 23,
    friends: {
        name: "李四"
    },
    hobbies: ['篮球', '足球'],
    // toJSON() {
    //     return '哈哈哈哈哈'
    // }
}

const objString1 = JSON.stringify(obj);
console.log(objString1); // {"name":"张三","age":23}


// parse 方法额外的参数 reviver  是一个回调函数
const info = JSON.parse(objString1, (key, value) => {
    if (key === 'age') return value + 1;
    return value
})
console.log(info);