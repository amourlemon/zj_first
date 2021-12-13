// Proxy 的方式监听， 共可以监听到 13 种变化

const obj = {
    name: '张三',
    age: 34
}
// 参数1： 监听的对象， 参数2： trap 扑捉器
const objProxy = new Proxy(obj, {
    set: function(target, key, value) {
        console.log(target);
        console.log(`obj的${key}正在发生变化`);
        target[key] = value
    },
    get: function(target, key) {
        console.log(`监听到有位置在获取target的${key}`);
        return target[key]
    },
    deleteProperty: function(target, key) {
        console.log(`删除了target的${key}`);
        delete target[key];
    }
    // 其他捕捉器  https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
});

objProxy.name = '李四';
console.log(obj.name);
console.log(objProxy.age);
delete objProxy['age']
console.log(obj);
