const info = {
    name: '张三',
    age: 23,
    friend: {
        name: '李四'
    }
}

// console.log(info.fiend.girlFriend.name); 报错 Cannot read property 'girlFriend' of undefined

// 作用： 避免了在调用对象中的属性出现 undefined 的情况
console.log(info?.friend?.girlFriend?.age); // undefined