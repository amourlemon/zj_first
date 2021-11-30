function boo (m, n, ...args) {
    console.log(m, n); // 12 12
    console.log(args); // [ 3, 4, 5 ]
}

// rest 和 arguments 的具体区别
// rest 是 数组
// arguments 类似数组但不是真的数组
boo(12, 12, 3, 4, 5);
