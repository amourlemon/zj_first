var arr = [323,44,23];
console.log(...arr);


function boo(num1,num2) {
    return num1 + num2;
}

var res = boo(...arr);
console.log(res);
