// 柯里化 将带有多个参数的函数转换为比原有的函数参数的数量少，并返回带有参数的函数（最后一层带不带无所谓）
function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

var res1 = add(12, 23, 4);
console.log(res1);


// 柯里化函数
function sum1(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

var res2 = sum1(12)(23)(4);
console.log(res2);

// 箭头函数优化柯里化函数
var sum2 = num1 => num2 => num3 => {
    return num1 + num2 + num3;
}
var res3 = sum2(12)(23)(4);
console.log(res3);