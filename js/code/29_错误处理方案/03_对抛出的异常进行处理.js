function foo(type) {
    if (type === 0) {
        const err = new Error('prams type error');
        // 可以获取抛出错误的类型（可以自定义）
        console.log('err的name：', err.name);
        // 可以获取抛出错误的信息（可以自定义）
        console.log('err的message：', err.message);
        // 可以获取抛出错误的调用栈（可以自定义）
        console.log('err的stack：', err.stack);
        throw err;
    }
}

function boo() {
    // 将可能会抛出异常的代码用 try catch 包裹，来捕获异常
    try {
        foo(9);
    } catch (err) {
        console.log(err.message);
    } finally {
        console.log('finally代码块执行');
    }
}

function test() {
    boo();
}

test();

// 处理方式：
//  1. 如果不处理，那么异常就会一直向外层函数抛，直至抛到最顶层的调用
// 如果在最顶层的调用也没有对异常进行处理，那么就会使程序停止，并报错
//  2. 使用 try catch