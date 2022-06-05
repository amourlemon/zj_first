let person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age:34
    },
    arr: [1,2,4,6]
}


function observe(target) {
    if(typeof target !== 'object' || target === null) return 
    return new Proxy(target, {
        get(target, key, receiver) {
            console.log('get', key);
            return Reflect.get(target, key, receiver)
        },
        set(target, key, value, receiver) {
            console.log('set', key, value);
            return Reflect.set(target, key, value, receiver)
        }
    })
}

let personProxy = observe(person)
// console.log(personProxy.friend.name);
personProxy.arr.push(222)