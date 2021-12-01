const info = {
    name: '张三',
    age: '24',
    friend: {name: '李四'}
}

const obj = {...info, address: '上海'};

obj.name = '王五';
obj.friend.name = '赵六';

console.log(obj);
console.log(info);