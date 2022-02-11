function diyThrottle(fn, interval, options = {
    leading: true,
    trailing: true
}) {
    let lastTime = 0;
    const {
        leading,
        trailing
    } = options;
    const _throttle = function (...args) {
        const nowTime = new Date().getTime();
        if (lastTime === 0 && !leading) lastTime = nowTime;
        const remainTime = interval - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.call(this, args)
        } else {
            if (trailing) {
                console.log(remainTime);
                setTimeout(() => {
                    fn.call(this, args)
                }, remainTime)
            }
        }
    }
    return _throttle;
}