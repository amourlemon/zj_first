/**
 *  总结 generator.next() 传递参数：
 *     1. 在调用 foo() 函数时传入的参数可在所有分段的代码中生效
 *     2. 调用生成器函数生成的生成器的只能从第二个 next 函数开始传参
 *     3. 传递的参数 由 上一段的 yield 接受 
 *
 */
function* foo(num) {
    console.log('生成器函数执行开始');
    let index = 40;
    const numTemp2 = yield index;

    index = 20;
    console.log('第二段中的numTemp2：', numTemp2);
    console.log('第二段中的num:', num);
    const numTemp3 = yield index + num;

    index = 30;
    console.log('第三段中的numTemp3：', numTemp3);
    console.log('第三段中的num:', num);
    yield;

    console.log('生成器函数结束');
}

// foo()  生成器函数执行时  不会执行执行里面的代码， 而是 返回了一个 生成器(特殊的迭代器)

const generator = foo(10);

console.log('第一次执行：', generator.next());
console.log('第二次执行：', generator.next(50));
console.log('第三次执行：', generator.next(60));