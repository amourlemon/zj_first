var btns = document.getElementsByTagName('button');

// for 循环的作用域不会起到任何作用 ：for 循环中的 i 相当于是全局定义，然后再进入点击函数的作用域中
// for(var i = 0; i < btns.length; i++) {
//     btns[i].onclick = function() {
//         console.log(`第${i}个按钮点击了`);
//     }
// }

// 解决方法 使用立即函数执行

// for(var i = 0; i < btns.length; i++) {
//     (function (n) {
//         btns[n].onclick = function() {
//             console.log(`第${n}个按钮点击了`);
//         }
//     }) (i)
// }

// ES6 之后的 for 循环块级作用域生效

for(let i = 0; i < btns.length; i++ ) {
    btns[i].onclick = function() {
        console.log(`第${i}个按钮被点击了`);
    }
}