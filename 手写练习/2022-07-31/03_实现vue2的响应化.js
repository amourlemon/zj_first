function defineProperty(obj, key, value) {
    observe(value);
    Object.defineProperty(obj, key, {
        get() {
            console.log(`监听了对象的${key}被获取了`)
            return value
        },
        set(newVal) {
            if(newVal === value) return;
            console.log(`监听了对象的${key}被重新设置了`);
            value = newVal;
            observe(value);
        }
    })
}

function observe(obj) {
    if(typeof obj !== 'object') return
    for(const key in obj) {
        defineProperty(obj, key, obj[key]);
    }
}

const person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age:12
    }
}
observe(person);
console.log(person.name)

person.friend.age = 13