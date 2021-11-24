function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

function sum(num1) {
    return function(num2) {
        return function(num3) {
            return num1 + num2 + num3;
        }
    }
}

function curried(fn) {
  function curring(...args) {
        if(fn.length <= args.length) {
            return fn.call(this,...args);
        } else {
            return function(...args2) {
                return curring.apply(this, [...args,...args2]);
            }
        }
    }
    return curring;
}

console.log(add.length);

var sum2 = curried(add);
console.log(sum2(12,23,34));
console.log(sum2(12, 23)(34));
console.log(sum2(12)(23)(34));