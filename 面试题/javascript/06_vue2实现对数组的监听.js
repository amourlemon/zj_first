let person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age:34
    },
    arr: [1,2,4,6]
}

const arrayMethods = Array.prototype;
// 先克隆一份 Array 的原型出来
const arrayProto = Object.create(arrayMethods)

const methodsToPatch = [
    'push',
    'pop',
    'shift',
    'unshift',
    'sort', 
    'reverse'
]

methodsToPatch.forEach(method => {
    arrayProto[method] = () => {
        // 执行原始操作
        arrayMethods[method].apply(this, arguments)
        console.log('监听数组方法成功，', method);
    }
})

function defineProperty(obj, key, value) {
    // 监听对象的某一属性是对象的类型
    observe(value);
    Object.defineProperty(obj, key, {
        get() {
            console.log(`监听获取${obj}的属性${key}成功`);
            return value
        },
        set(newVal) {
            if(newVal === value) return 
            console.log(`监听设置${obj}的属性${key}成功，新值为：${newVal}`);
            // 这里不可以直接设置 obj[key] = newVal,因为判断终止的条件是 val === newVal
            value = newVal
            observe(value)
        }
    })

}

function observe(obj) {
    // 判断类型数据
    if(typeof obj !== 'object' || obj === null) return 
    if(Array.isArray(obj)) {
        // 如果是数组，就将 obj 的原型发生改变
        obj.__proto__ = arrayProto;
        // 数组中的元素也可能是对象
        obj.forEach(el => {
            observe(el)
        })
    } else {
        for(const key in obj) {
            defineProperty(obj, key, obj[key])
        }
    }
}

observe(person);
// console.log(person.friend.name)
// person.friend.name = 'ww'
debugger
// person.name = {
//     sname: '小白龙'
// }
// person.name.sname = '小黑'
person.arr.push(12)
