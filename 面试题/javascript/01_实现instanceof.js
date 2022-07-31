function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
        if (!proto) return false;
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto);
    }
}

myInstanceof(1, Array)

console.log([12,2] instanceof Array);