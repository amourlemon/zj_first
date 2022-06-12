//? 立即执行状态下
// for (var i = 0; i < 5; i++) {
//     (function (x) {
//         setTimeout(() => {
//             console.log(x++); // 4s 后同时打印
//         }, 4000)
//     })(i)
// }

//? 非闭包状态下
for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i++);
    }, 4000)
}

console.log(i);



var a = 1;
console.log(a++); // 先赋值再加