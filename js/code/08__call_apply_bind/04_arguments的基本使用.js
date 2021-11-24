// arguments 在 ES6 中已经不推荐使用
// arguments 是一种类数组的元素，不是数组，但是和数组很相似，但是不能使用 forEach map 等方法
function foo(num1, num2, num3, num4) {
    console.log(arguments);

    // 使用一： 获取 arguments 的长度
    console.log(arguments.length);

    // 使用二： 根据下标获取元素
    console.log(arguments[4]);

    // 使用三： callee()  谨慎使用该方法， 否则会陷入死循环（递归）
    console.log(arguments.callee());
}

foo(21, 4, 3, 5, 43, 4);