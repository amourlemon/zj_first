// 总结： 生成器函数
// 标识： 会在 function 后面有一个 *
// 特点： 单独执行时不会执行任何代码， 会返回一个生成器
// 内容： 在生成器函数中， 会有一个 yield 关键字，这个关键字相当于 return， 可以返回 值， 也可以暂停代码执行

function* foo() {
    console.log('生成器函数执行开始');
    let index = 10;
    console.log(index);
    yield index;

    index = 20;
    console.log(index);
    yield index;

    index = 30;
    console.log(index);
    yield;

    console.log('生成器函数结束');
}

// foo()  生成器函数执行时  不会执行执行里面的代码， 而是 返回了一个 生成器(特殊的迭代器)

const generator = foo();


// console.log(generator.length); // undefined

// for (const item of generator) {
//     console.log(item); // 会把每一段的代码进行执行, 并且可以将每一段的 yield 的返回值打印出来
// }

console.log('-----------------------------------------------');

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());