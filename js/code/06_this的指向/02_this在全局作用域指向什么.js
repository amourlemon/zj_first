function foo() {
    // 在 node 中指向的是 globalObject （之前据说是空数组）
    // 在网页中，指向的是 window 对象
    console.log(this);
}
foo();