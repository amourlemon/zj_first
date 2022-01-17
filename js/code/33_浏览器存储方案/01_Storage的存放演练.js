// 客户端的 storag 有两种
// 一种是 localStorage  另一种是 sessionStorage
// localStorage 可以永久 存储数据的, 而 sessionStorage 只能存储一个页面的数据(页面关闭,或者跳转到新的标签页数据都会消失)

const btn = document.querySelector("button")
btn.onclick = () => {
    localStorage.setItem('name', 'localStorage');
    sessionStorage.setItem('name', 'sessionStorage')
}