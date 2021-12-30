// 当函数中没有出现 await 时， 执行顺序与普通函数一样
async function foo() {
    console.log('script start !!');
    console.log(1);
    console.log(2);
    console.log(3);
    console.log('script end !!');
}

console.log('start');
foo();
console.log('end');