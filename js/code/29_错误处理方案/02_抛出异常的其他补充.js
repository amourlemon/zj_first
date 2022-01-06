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
    foo(0);
}

function test() {
    boo();
}

test();