// 获取 全局对象
console.log(this);
// console.log(window); // 在 node 环境下会报错

// ES11 新增 globalThis 无论在 node 环境下 还是在 浏览器环境下，都可以打印全局对象
console.log(globalThis);