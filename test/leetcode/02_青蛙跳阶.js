function foo(n) {
    let n1 = 1, n2 = 2, n3 = 4;
    if(n === 0 || n === 1) return 1;
    if(n === 2) return 2;
    if(n === 3) return 4;
    let res = n1;
    for(let i = 4; i <= n; i++) {
        res = n1 + n2 + n3;
        n1 = n2;
        n2 = n3;
        n3 = res;
    }
    return res
}

console.log(foo(8))