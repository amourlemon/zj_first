/**
 * 总结：
 *  当生成器调用 return 函数时， 生成器函数中，只会执行到该次执行的代码段，并且后面
 *  执行 next 函数时，返回的对象不再是 yield 返回的值， done 属性也会变成 true
 *  return 函数传参不会报错， 但是无意义
 *
 */
function* foo() {
    console.log('生成器函数执行开始');
    let index = 10;
    console.log(index);
    const res = yield index;

    console.log(res);
    index = 20;
    console.log(index);
    yield index;

    index = 30;
    console.log(index);
    yield index;
    console.log('生成器函数结束');
}

// foo()  生成器函数执行时  不会执行执行里面的代码， 而是 返回了一个 生成器(特殊的迭代器)

const generator = foo();

console.log('-----------------------------------------------');

console.log(generator.next());
console.log(generator.return('addd')); // 无用
console.log(generator.next());
console.log(generator.next());