Function.prototype.zjapply =  function (thisArg, argsArray){
    // 1.获取到函数 
    var fn  = this;

    // 2.处理绑定的 thisArg
    thisArg = Object(thisArg) || {};

    // 3.执行函数
    thisArg.fn = fn;
    var res;
    if(!argsArray) {
        res = thisArg.fn();
    } else {
        res = thisArg.fn(...argsArray);
    }

    delete thisArg.fn;
    return res;
  
}

function boo() {
    console.log(this);
}

function sum(num1, num2) {
    return num1 + num2;
}

boo.zjapply('af');

var res = sum.zjapply('dede',[20, 30]);
console.log(res);