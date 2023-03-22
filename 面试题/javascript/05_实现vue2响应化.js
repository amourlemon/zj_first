let person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age: 34
    }
}


function defineProperty(obj, key, value) {
    //! 监听对象的某一属性是对象的类型
    observe(value);
    Object.defineProperty(obj, key, {
        get() {
            console.log(`监听获取${obj}的属性${key}成功`);
            return value
        },
        set(newVal) {
            if (newVal === value) return

            console.log(`监听设置${obj}的属性${key}成功，新值为：${newVal}`);
            // 这里不可以直接设置 obj[key] = newVal,因为判断终止的条件是 val === newVal
            value = newVal
            observe(value)
        }
    })
}

function observe(obj) {
    // 判断类型数据
    if (typeof obj !== 'object' || obj === null) return
    for (const key in obj) {
        defineProperty(obj, key, obj[key])
    }
}

observe(person);
// console.log(person.friend.name)
// person.friend.name = 'ww'
debugger
person.name = {
    sname: '小白龙'
}
person.name.sname = '小黑'

