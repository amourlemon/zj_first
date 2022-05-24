function myInstanceof(left, right) {
    let proto = Object.getPrototypeOf(left);
    let prototype = right.prototype;
    while (true) {
        console.log(proto);
        if (!proto) return false;
        if (proto === prototype) return true
        proto = Object.getPrototypeOf(proto);
    }
}

myInstanceof(1, Array)