// 有两种方法： 第一种是用 callback 函数， 第二种是用 promise

function diyDebounce(fn, delay, immediate = false, callBack) {
    let timer = null;
    // 判读是否被调用过
    let isInvoke = false;
    // 真正意义上的元素的 oninput 方法
    const debounce = function (...args) {
        if (timer) clearTimeout(timer);
        if (immediate && !isInvoke) {
            callBack(fn.apply(this, args));
            isInvoke = true;
        } else {
            timer = setTimeout(() => {
                callBack(fn.apply(this, args));
                // 执行完以后，再次回到未被调用的状态
                isInvoke = false;
            }, delay)
        }
    }
    debounce.cancel = function () {
        if (timer) clearTimeout(timer);
    }
    return debounce;
}