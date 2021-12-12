// 利用 Proxy 和 Reflect 实现自动收集依赖

// 创建 depend 类 方便管理
class Depend {
    constructor() {
        this.reactiveFns = [];
    }
    addDepend(fn) {
        this.reactiveFns.push(fn);
    }
    notify() {
        this.reactiveFns.forEach( fn => {
            fn();
        })
    }
}

const obj = {
    name: 'zs',
    age: 18
}

const depend = new Depend();

function watchFn(fn) {
    depend.addDepend(fn);
}

const objProxy = new Proxy(obj, {
    set: function(target, key, newVal, receiver) {
        
       if( Reflect.set(target, key, newVal, receiver)) {
        depend.notify();
       }
    },
    get: function(target, key, receiver) {
        Reflect(target, key, receiver);
    }
})

watchFn(function() {
    console.log('name 发生变化了');
})
objProxy.name = 'ls';
//  缺点： 不能判断是哪一个属性发生了变化