function add(num1, num2) {
    return num1 + num2;
}

function sqr(num) {
    return num * num;
} 

function composeAS(num1, num2) {
    return sqr(add(num1, num2));
}

var res = sqr(add(2,2));
console.log(res);

function composeFn(...fns) {
    var length = fns.length;
    for(var i = 0; i < length; i++) {
        if(typeof fns[i] !== "function") {
            throw new TypeError("Expected arguments is Function");
        }
    }
    return function(...args) {
        var index = 0;
        var res = length ? fns[index].apply(this, [...args]) : args;
        while(++index < length) {
            res = fns[index].call(this,res);
        }
        return res;
    }
}

 var Fn1 = composeFn(add, sqr);
console.log( Fn1(2, 2));