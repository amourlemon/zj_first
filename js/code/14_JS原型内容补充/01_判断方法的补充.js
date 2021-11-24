var obj = {
    name: '张三',
    age: 23
}

var info = Object.create(obj, {
    address: {
        value: 'sh',
        configurable: true
    }
})

console.log(info.hasOwnProperty('address')); // 判断属性是不是属于自己
console.log(info.__proto__.hasOwnProperty('address'));

//  in 操作符：不管属性是在原型对象当中还是对象本身中 返回的都是 true

console.log('address' in info);
console.log('name' in info);

// for in  
for(var key in info) {
    console.log(key);
}