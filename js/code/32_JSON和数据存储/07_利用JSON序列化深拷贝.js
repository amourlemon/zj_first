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
    foo() {
        console.log('foo!!!!');
    }
}

// JSON 序列化不会处理 对象中的函数

const info = JSON.parse(JSON.stringify(obj));
console.log(obj);
obj.friends.name = '王五';
console.log(info);