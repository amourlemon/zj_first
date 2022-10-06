// // 实现防抖
// function debouce(fn, delay, immediate=true) {
//     let [timer, invoked] = [null, false];
//     const _debounce = function(...args) {
//         if(timer) clearTimeout(timer);
//         if(immediate && !invoked) {
//             fn.apply(this, args);
//             invoked = true;
//         } else {
//             timer = setTimeout(() => {
//                 fn.apply(this, args);
//                 invoked = false;
//             }, delay)
//         }
//     }
//     return _debounce;
// }

// function throttle(fn, interval) {
//     // 定义一个开始的时间
//     let startTime = 0;
//     const _throttle = function(...args) {
//         let currentTime = Date.now();
//         if(currentTime -startTime >= interval) {
//             fn.apply(...args);
//             startTime = Date.now();
//         }
//     }
//     return _throttle
// }


function _debounce(fn, delay) {
    let timer = null;
    const debounce = function(...args) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(this, args);
        }, delay)
    }
    return debounce;
}

function _throttle(fn, interval) {
    let lastTime = 0;
    const throttle = function(...args) {
        const currentTime = Date.now();
        const waitTime = interval - (currentTime - lastTime);
        if(waitTime < 0) {
            fn.apply(this, args);
            lastTime = Date.now();
        }
    }
    return throttle;
}