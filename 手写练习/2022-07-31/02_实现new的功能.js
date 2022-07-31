function newOperation(constructorFn) {
    if(typeof constructorFn !== 'function') {
        throw TypeError('constructorFn must be a Function')
    }
    // 创建一个新的对象，并让这个对象的原型指向构造函数的显示原型
    const newObj = Object.create(constructorFn.prototype);
    // 获取参数
    const args = [].concat(...arguments).slice(1);
    // 执行构造函数
    const res = constructorFn.apply(newObj, args);
    const isObj = typeof res === 'object' && res !== null;
    const isFn = typeof res === 'function';
    if(isObj || isFn) return res;
    return newObj;
}

function Person(name) {
    this.name = name
}

const p1 = newOperation(Person, 'zs');
console.log(p1);