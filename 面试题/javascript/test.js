// 实现new
function newOperator(conFn) {
    if(typeof conFn !== 'function') {
        throw new Error(`${conFn} isn't a function`)
    }
    const newObj = Object.create(conFn.prototype)
    const args = [...arguments]
    args.splice(0, 1)
    const returnObj = conFn.apply(newObj, args)
    const isObject = typeof returnObj === 'object' && returnObj !== null;
    const isFunction = typeof returnObj === 'function'
    if(isObject || isFunction) {
        return returnObj
    }
    return newObj
}

function Foo(name, age) {
    this.name = name;
    this.age = age
}

const p1  = newOperator(Foo, 'zx', 23)
console.log(p1);