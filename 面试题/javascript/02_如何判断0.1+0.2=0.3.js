function numberepsilon(args1, args2) {
    return Math.abs(args1 - args2) < Number.EPSILON
}
const res = numberepsilon(0.1 + 0.2, 0.3)
console.log(res);

function foo() {
    return void 0
}

console.log(foo());