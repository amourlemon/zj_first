const info = {
    _name: '张三',
    get name() {
        return this._name;
    },
    set name(newVal) {
        this._name = newVal
    }

}

// 在未使用 receiver 之前，info 中 get name() 中的 this 指向的应该是 info 对象本身
// 使用 receiver 之后， get name() 中的 this 指向的 是 infoProxy
// 理由：如果在未使用 receiver 的情况下，访问 name 属性，就应该会 访问 _name 属性， 那么就会打印 监听信息， 事实上没有打印
// receiver作用： 将 原来对象中出现的 this 绑定到 代理对象中

const infoProxy = new Proxy(info, {
    set: function (target, key, newVal, receiver) {
        console.log(`监听到了${key}的set操作`);
        Reflect.set(target, key, newVal, receiver);
    },
    get: function (target, key, receiver) {
        console.log(`监听到了${key}的get操作`);
        return Reflect.get(target, key, receiver);
    }
});

infoProxy.name = '李四'
console.log(infoProxy.name);


