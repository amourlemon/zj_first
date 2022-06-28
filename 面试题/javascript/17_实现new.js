function newOperator(callBack) {
    if(typeof callBack !== 'function') {
        throw new Error(`${callBack} isn't a function`)
    }

    // 1. 创建一个新的对象， 并且将这个对象的原型指向 callBack 的显示原型对象
    newOperator.target = callBack;
    const newObj = Object.create(callBack.prototype);
    // 2. 执行传入函数， 并将函数 this 绑定为 这个新的对象
    const argsArr = [].slice.call(arguments, 1);
    const executorObj = callBack.apply(newObj, argsArr)
    // 3. 判断原函数是不是返回对象或者函数， 如果是则返回执行结果， 否则返回新的对象
    const isObject = typeof executorObj === 'object' && executorObj !== null;
    const isFunction = typeof executorObj === 'function'
    if(isObject || isFunction) {
        return executorObj
    }
    return newObj
}



const p1 = newOperator(Foo, 'sd', 3)
// const p2 = newOperator(Foo) 

function Foo(name, age) {
    this.name = name;
    this.age = age;
}

// function newOperator(ctor){
//     if(typeof ctor !== 'function'){
//       throw 'newOperator function the first param must be a function';
//     }
//     newOperator.target = ctor;
//     var newObj = Object.create(ctor.prototype);
//     var argsArr = [].slice.call(arguments, 1);
//     var ctorReturnResult = ctor.apply(newObj, argsArr);
//     var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
//     var isFunction = typeof ctorReturnResult === 'function';
//     if(isObject || isFunction){
//         return ctorReturnResult;
//     }
//     return newObj;
// }


// const p1 = newOperator(Foo, 'AS',12)

const p2 = new Foo('dd', 34);
console.log(p1)
console.log(p2)