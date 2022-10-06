function logNum(n) {
    if( n < 0) return 
    console.log(n);
    arguments.callee(--n)
}

// logNum(100)


function foo(n) {
    if(n <= 1) return 1
    return n * arguments.callee(n-1)
}

console.log(foo(5));