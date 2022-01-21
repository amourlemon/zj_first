console.log(window.screenX, window.screenY); // 浏览器距离屏幕的左、上的距离

var topWindow = window.top;
console.log(topWindow);

console.log(window.innerHeight, window.innerWidth); // 浏览器窗口内部的大小（除去导航栏和控制台）

window.onclick = () => {
    console.log('点击了页面');
}

window.onblur = () => {
    console.log('页面失去了焦点');
}



window.onscroll = () => {
    console.log('竖向滚动距离：', window.scrollY);
}