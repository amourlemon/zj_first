// Proxy 中有多少捕捉器， Reflect 中就有多少个回调函数
const obj = {
    name: '张三',
    age: 56
}

const objProxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        // return target[key];
        console.log(`监听到了${key}的get操作`);
        return Reflect.set(target, key)
    },
    set: function(target, key, newVal, receicer) {
        // target[key] = newVal;
        console.log(`监听到了${key}的set操作`);
        Reflect.get(target, key, newVal)
    }
})

objProxy.name = '李四'
console.log(objProxy.name);