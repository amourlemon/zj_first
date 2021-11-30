// 在 es6 中新增的作用域
// if switch 等会有单独的作用域
if(false) {
    let address = '上个';
}

console.log(address);