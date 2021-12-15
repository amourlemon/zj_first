let activeReactiveFn = null;
// 建立一个 depend 类， 方便管理
class Depend {
    constructor() {
        this.reactiveFns = new Set();
    }
    addReactiveFn() {
        if(!activeReactiveFn) {
            this.reactiveFns.add(activeReactiveFn);
        }
    }
    notify() {
        this.reactiveFns.forEach(fn => {
            fn();
        })
    }
}

// 封装一个函数，获取 depend
let targetMap = new WeakMap();
function getDepend(target, key) {
    let map = targetMap.get(target);
    if(!map) {
        map = new Map();
        targetMap.set(target, map);
    }
    let depend = map.get(key);
    if(!depend) {
        depend = new Depend();
        map.set(key, depend);
    }
    return depend;
}

// 封装一个函数，用来收集依赖
function watchFn(fn) {
    activeReactiveFn = fn;
    fn();
    activeReactiveFn = null;
}

// 对 reactive 进行封装
function reactive(obj) {
    return new Proxy(obj, {
        set(target, key, newVal, receiver) {
            if(Reflect.set(target, key, newVal, receiver)) {
                const depend = getDepend(target, key);
                console.log(key + '被重新赋值了');
                depend.notify();
            }
        },
        get(target, key, receiver) {
            console.log(key + '被获取了');
            const depend = new Depend();
            depend.addReactiveFn();
            return Reflect.get(target, key, receiver);
        }
    })
}

const obj = reactive({
    name: 'eee',
    age: 67
})

watchFn(() => {
    console.log(obj.name);
})

// console.log(obj.name);
obj.name = 'sss'