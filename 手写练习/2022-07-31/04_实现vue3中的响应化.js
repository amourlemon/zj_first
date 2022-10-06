const person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age:12
    },
    friends: ['ls', 'ww', 'zl']
}
function observe(target) {
    if(typeof target !== 'object' || target === null) return 
    return  new Proxy(target, {
        get(target, key, receiver) {
            console.log(`${target}的${key}被获取了`);
            if(typeof target[key] === 'object') return observe(target[key])
            return Reflect.get(target, key, receiver);
        },
        set(target, key, newVal, receiver) {
            console.log(`${target}的${key}被重新设置为${newVal}`);
            return Reflect.set(target, key,newVal, receiver);
        },
    })
}


const personProxy = observe(person);

// console.log(personProxy.friend.name)

// personProxy.friends.splice(1, 1)
// console.log(personProxy.age = 13)

// console.log(typeof personProxy.friends)

const arr = [1,2,3,4,5,6]
const arrProxy = observe(arr);

arrProxy.push(33)
arrProxy[2] = 10