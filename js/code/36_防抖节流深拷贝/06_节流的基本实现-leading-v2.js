function diyThrottle(fn, internal, options = {
    leading: true,
    trailing: true
}) {
    const {
        leading,
        trailing
    } = options
    let lastTime = leading ? 0 : new Date().getTime();
    console.log(lastTime);
    const _throttle = function (...args) {
        const nowTime = new Date().getTime();
        // 第一次执行， 并且 leading 为 false 的情况下
        if (lastTime === 0 && !leading) {
            lastTime = nowTime;
        }
        const remainTime = internal - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.call(this, args);
            lastTime = nowTime;
        }
    }
    return _throttle;
}