// call 和 apply 都是具有显示绑定的用法，唯一的区别就是 apply 绑定的是数组
Function.prototype._call = function(thisArgs, ...args) {
    const fn = this;
    thisArgs = Object(thisArgs) || {};
    thisArgs.fn = fn;
    let res;
    if(args.length !== 0) {
       res =  thisArgs.fn(...args);
    } else {
       res =  thisArgs.fn();
    }
    delete thisArgs.fn;
    return res;
}

Function.prototype._apply = function(thisArgs, args) {
    const fn = this;
    thisArgs = Object(thisArgs) || {};
    thisArgs.fn = fn;
    let res;
    if(args.length !== 0) {
        res = thisArgs.fn(...args);
    } else {
        res = thisArgs.fn();
    }
    delete thisArgs.fn;
    return res
}


function sum(num1, num2) {
    console.log(this)
    return num1+num2;
}


console.log(sum._call('a', 1, 2))
console.log(sum._apply('a', [1, 2]))