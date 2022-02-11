function diyDebounce(fn, delay) {
    let timer = null;
    // 真正意义上的元素的 oninput 方法
    const debounce = function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
    return debounce;
}