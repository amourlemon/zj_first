const obj = {
    name: '张三',
    age: 23,
    friends: {
        name: "李四"
    },
    foo: function () { },
    hobbies: ['篮球', '足球']
}

// 在某些地方，如将数据存放在 localstorage 中，或者携带数据跳转页面时
// 是不支持将对象或者数组数据的，此时，就需要将他们转换为字符串形式
const str = '{"name":"张三","age":23,"friends":{"name":"李四"},"hobbies":["篮球","足球"],"foo":function() {}}'
const objString = JSON.stringify(obj);

const info = (new Function('return ' + str))()
console.log(info);

// console.log(eval( str))

// const info = JSON.parse(objString);