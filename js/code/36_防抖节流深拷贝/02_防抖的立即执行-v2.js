function diyDebounce(fn, delay, immediate = false) {
    let timer = null;
    // 判读是否被调用过
    let isInvoke = false;
    // 真正意义上的元素的 oninput 方法
    const debounce = function (...args) {
        if (timer) clearTimeout(timer);
        if (immediate && !isInvoke) {
            fn.apply(this, args);
            isInvoke = true;
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args);
                // 执行完以后，再次回到未被调用的状态
                isInvoke = false;
            }, delay)
        }
    }
    return debounce;
}