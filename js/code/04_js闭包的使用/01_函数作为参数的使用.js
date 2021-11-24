function foo(num1, num2, numFunction) {
    console.log(numFunction(num1, num2));
}

function add(num1, num2) {
    return num1 + num2;
}

function sub(num1, num2) {
    return num1 - num2;
}

// 这里的 add 后面不能加上括号
foo(10, 20, add);
foo(10, 20, sub);
