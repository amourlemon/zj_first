const loading = document.querySelector('.loading');

// 建立观察者模式
var ob = new IntersectionObserver(function(entries) {
    const entry = entries[0];
    // 进入监听的状态
    if(entry.isIntersecting) {
        // 元素出现和消失都能够监听的到
        console.log('加载更多')
    }
}, {
    // 表示视口底部和监听元素重叠的百分比，达到之后就启动监听
    threshold: 0.1
})

ob.observe(loading)