function add(num1, num2) {
    return num1 + num2;
}

console.log(add(5, 10));
console.log(add(5, 20));


function sum(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

var adder = sum(5)
console.log(adder(10));
console.log(adder(20));