/**
 *总结： 生成器的 throw 方法
   只能在执行了一次或者是多次 next 方法后进行 throw 方法
   并且应该在上一次的 yield 中进行捕捉 异常
   捕捉异常后，代码正常执行     
 *
 */
function* foo() {
    console.log('生成器函数执行开始');
    let index = 10;
    console.log(index);
    try {
        yield index;
    } catch (err) {
        console.log(err);
    }

    try {
        index = 20;
        console.log(index);
        yield index;
    } catch (err) {
        console.log('捕捉到的异常为:', err);
    }

    index = 30;
    console.log(index);
    yield index;

    console.log('生成器函数结束');
}

// foo()  生成器函数执行时  不会执行执行里面的代码， 而是 返回了一个 生成器(特殊的迭代器)

const generator = foo();

console.log('-----------------------------------------------');

console.log(generator.next());
console.log(generator.throw('类型错误'));
console.log(generator.next());