var foo = 'adf';

if (true) {
    console.log(foo);
    let foo = 'fsad'; //  Cannot access 'foo' before initialization
    // 在 ES6 中所有的变量在使用之前必须要初始化
}

//  关于  var/let/const 的使用问题
// 在不知道定义的变量以后会不会发生改变的情况下，优先使用 const， 保证了数据的安全性