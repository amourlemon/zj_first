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
obj = JSON.stringify(obj)
console.log(typeof obj === 'string');
// 展开运算符赋值，只是对 对象(info) 进行了一个浅拷贝
// 即 对象中的对象没有创建，而是将地址拿了过来