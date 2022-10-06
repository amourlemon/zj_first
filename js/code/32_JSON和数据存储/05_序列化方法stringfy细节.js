const obj = {
    name: '张三',
    age: 23,
    friends: {
        name: "李四"
    },
    hobbies: ['篮球', '足球'],
    foo: function() {}
    // toJSON() {
    //     return '哈哈哈哈哈'
    // }
}

// stringfy 有三个参数
// 1. value ------  序列化处理的对象或者数组
// 2. replacer ----  可以是一个回调函数或者是包含 key 的数组
// 3. space  ----- 可以是数字或者是字符串 表示缩进

// !!! stringfy 遇到含有 toJSON 函数的对象时， 会直接返回 toJSON 方法的返回值
const objString1 = JSON.stringify(obj, ["name", "age"]);
console.log(objString1); // {"name":"张三","age":23}

const objString2 = JSON.stringify(obj, (key, value) => {
    if (key === 'age') {
        return value + 1;
    }
    return value;
})

console.log(objString2);

const objString3 = JSON.stringify(obj, null, '--');
// const objString3 = JSON.stringify(obj, null, 2);
console.log(objString3);