// CommonJS 是一种针对 node 服务器编写的一种模块化，
// 并不能有效的并行执行（但是可以借助其余的库实现并行），而浏览器中需要可以并行执行，
// 因此有了 AMD（Asynchronous Module Definition, 异步模块定义） 规范，实际上，AMD 的出现比CommonJS的出现还要早
// AMD实现的比较常用的库是require.js和curl.js；

require.config({
    baseUrl: './src',
    paths: {
        aaa: 'aaa',
        bbb: 'bbb'
    }
})

require(["aaa"], function (aaa) {
    console.log('main：', aaa);
})