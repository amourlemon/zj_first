function foo(num1, num2) {
    // 方式一： for 循环
    // var newArr = [];
    // for(var i = 0; i < arguments.length; i++) {
    //     newArr.push(arguments[i]);
    // }
    // console.log(newArr);

    // 方式二： 使用 slice()
    // var newArray = Array.prototype.slice.call(arguments);
    // console.log(newArray);

    // 方式三： 使用 ES6 的语法
    // var newArray = [...arguments];
    // console.log(newArray);
    
    // 方法四： Array.from
    var newArray = Array.from(arguments);
    console.log(newArray);
}

foo(21, 32, 32, 23);