const info = {
    name: '张三',
    age: '24',
    friend: {name: '李四'}
}

let obj = {...info, address: '上海'};

obj.name = '王五';
obj.friend.name = '赵六';

console.log(obj);
console.log(info);
obj = JSON.stringify(obj)
console.log(typeof obj === 'string');