// ventTarget 是一个 DOM 接口，由可以接收事件、并且可以创建侦听器的对象实现。

const handleMouseDown = () => {
    console.log('哈哈哈哈');
}
window.addEventListener('click', handleMouseDown)

window.removeEventListener('click', handleMouseDown) // 移除事件



// 自定义事件
const event = new Event('getDate');
window.addEventListener('getDate', () => {
    console.log(new Date());
}, false);
window.dispatchEvent(event)