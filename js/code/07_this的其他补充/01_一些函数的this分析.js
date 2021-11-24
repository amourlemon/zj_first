
// 1.特殊函数  
setTimeout(function() {
    console.log(this);  // 自动绑定了 this
},2000)

// 2.监听点击
var boxEl = document.querySelector('.box');
boxEl.addEventListener('click', function() {
    console.log(this);  // 绑定的是   boxEl 这个元素
})

//   说明在此类高阶函数的内部进行了某种隐式的绑定