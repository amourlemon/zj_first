function diyThrottle(fn, inteval) {
    let lastTime = 0;
    const _throttle = function (...args) {
        const nowTime = new Date().getTime();
        const remainTime = inteval - (nowTime - lastTime);
        if (remainTime <= 0) {
            fn.apply(this, args);
            lastTime = nowTime;
        }
    }
    return _throttle;
}
let str = 'string';
str.age = 23;
console.log(str.age)