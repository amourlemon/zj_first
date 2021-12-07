const obj = {
    name: 'Tom',
    age: 57,
    address: 'yt'
} 

Object.keys(obj).forEach(key => {
    let value = obj[key];
    Object.defineProperty(obj, key, {
        get: function() {
            console.log(`监听到了对象的${key}正在被获取`);
            return value;
        },
        set: function(newVal) {
            console.log(value);
            console.log(`监听到了对象的${key}正在被设置`);
            value = newVal;  // 只是 value 在变化，，为什么obj[key] 也发生了变化
        }
    })
})

obj.name = 'Jerry';
console.log(obj.name);

// 缺点：
    // 1. Object.defineProperty() 用途不是来监听属性变化的
    // 2. 只能监听到 set/get


// let msg1 = 'Hello';
// let msg2 = msg1;
// msg2 = 'World';
// console.log(msg1);

// const info = {
//     name: 'zs'
// }

// function foo( val, key ) {
//     let value = val[key];
//     return function() {
//         console.log('执行了测试函数');
//         value = 'Hello';
//     }
// }

// foo(info, 'name')();
// console.log(info.name); // 没有变化