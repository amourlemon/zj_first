let activeReactiveFn = null;
class Depend {
    constructor() {
        this.reactiveFns = new Set();
    }
    addFn() {
        if (activeReactiveFn) {
            this.reactiveFns.add(activeReactiveFn);
        }
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn();
        })
    }
}

// 封装一个获取 depend 的函数
const targetMap = new WeakMap();
function getDepend(target, key) {
    let map = targetMap.get(target);
    if(!map) {
        map = new Map();
        targetMap.set(target) = map;
    }
    let depend = map.get(key);
    if(!depend) {
        depend = new Depend();
        map.set(key) = depend;
    }
    return depend;
}

// 封装一个响应式的函数
function watchFn(fn) {
    activeReactiveFn = fn
    fn()
    activeReactiveFn = null
  }

const obj = {
    name: 'zs',
    age: 'ls'
}

const objProxy = new Proxy(obj, {
    set(target, key, newVal, receiver) {
        console.log(target[key]+'被重新设置了');
        const depend = getDepend(target, key);
        depend.notify();
        return Reflect.set(target, key, newVal, receiver);
    },
    get(target, key, receiver) {
        console.log(target[key] + '被访问了');
        return Reflect.get(target, key, receiver)
    }
})
