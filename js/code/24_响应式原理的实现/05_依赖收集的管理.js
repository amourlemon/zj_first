class Depend{
    constructor() {
        this.reactiveFns = [];
    }
    addDepend( fn ) {
        this.reactiveFns.push(fn);
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn();
        })
    }
}

// 封装一个获取 depend 的函数
function getDepend(target, key) {
    const objMap = targetMap.get(target);
    return objMap.get(key);

}

const obj = {
    name: 'zs',
    age: 34
}

const info = {
    name: 'ls',
    age: 65
}
// 方法一： 对本身对象进行收集，操作时将其转为代理对象

// 方法二： 先转为代理对象，然后再进行收集（从之前的几个代码来看， 优选第二种）
//  应该将 转化代理对象单独封装
const objProxy = new Proxy(obj, {
    set(target, key, newVal, receiver) {
        if(Reflect.set(target, key, newVal, receiver)) {
            // const objMap = targetMap.get(target);
            const keyDepend = getDepend(target, key)
            keyDepend.notify();
        }
    },
    get(target, key, receiver) {
        if(Reflect.get(target, key, receiver)) {
        const objMap = targetMap.get(target);
        const keyDepend = objMap.get(key);
        keyDepend.notify();
        } 
        
    }
});


const infoProxy = new Proxy(info, {
    set(target, key, newVal, receiver) {
        if(Reflect.set(target, key, newVal, receiver)) {
            const infoMap = targetMap.get(target);
            const keyDepend = infoMap.get(key);
            keyDepend.notify();
        }
    },
    get(target, key, receiver) {
        if(Reflect.get(target, key, receiver)) {
        const infoMap = targetMap.get(target);
        const keyDepend = infoMap.get(key);
        keyDepend.notify();
        } 
        
    }
});


const objMap = new Map();
const infoMap = new Map();
function objNameChangeFn() {
    console.log('obj的name发生变化');
}
function objageChangeFn() {
    console.log('obj的age发生变化');
}
function infoNameChangeFn() {
    console.log('info的name发生变化');
}
function infoageChangeFn() {
    console.log('info的age发生变化');
}

Object.keys(objProxy).forEach( key => {
    const depend = new Depend();
    switch(key) {
        case 'name': {
            depend.addDepend(objNameChangeFn);
        }
        break;
        case 'age': {
            depend.addDepend(objageChangeFn);
        }
    }
    objMap.set(key, depend);
})

Object.keys(infoProxy).forEach( key => {
    const depend = new Depend();
    switch(key) {
        case 'name': {
            depend.addDepend(infoNameChangeFn);
        }
        break;
        case 'age': {
            depend.addDepend(infoageChangeFn);
        }
    }
    infoMap.set(key, depend);
})

const targetMap = new WeakMap();
targetMap.set(obj, objMap);
targetMap.set(info, infoMap)

infoProxy.name = 'ww';
objProxy.name = 'ww';