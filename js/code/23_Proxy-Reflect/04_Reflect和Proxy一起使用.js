// Proxy 中有多少捕捉器， Reflect 中就有多少个回调函数
const obj = {
    name: '张三',
    age: 56
}

// 使用 Reflect 之前，虽然可以捕捉到 对象变化的时机，但是仍然会对对象本身进行操作
// 违背代理对象的定义
// 使用 Reflect 之后，不会再对对象本身进行操作了

const objProxy = new Proxy(obj, {
    get: function(target, key, receiver) {
        // return target[key];
        console.log(`监听到了${key}的get操作`);
        return Reflect.set(target, key)  // 返回值是以个 boolean 值 可以判断设置是否成功
    },
    set: function(target, key, newVal, receicer) {
        // target[key] = newVal;
        console.log(`监听到了${key}的set操作`);
        Reflect.get(target, key, newVal)
    }
})

objProxy.name = '李四'
console.log(objProxy.name);