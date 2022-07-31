function curried(fn) {
    const length = fn.length;
    function curring(...args) {
        if(args.length >= length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curring.apply(this, [...args, ...args2])
            }
        }
    }
    return curring
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

const curriedFn = curried(sum);
console.log(curriedFn(1,2,4));
console.log(curriedFn(1,2)(4));
console.log(curriedFn(1)(2)(4));