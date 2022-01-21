console.log(history.length); // 当前标签页，存在的页面数量(包含当前页)
const state = {
    'page_id': 1,
    'user_id': 5
}
const title = '' // 已被弃用，之前用于保存 用户名和密码
const url = './demo.html'
const demoPage = document.querySelector('#demoPage');
console.log(demoPage);
if (demoPage !== null) {
    demoPage.addEventListener('click', () => {
        history.pushState(state, title, url)
    })
}

console.log(history.state);