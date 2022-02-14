function diyThrottle(fn, interval, options = { leading: true, trailing: true, callBackFn }) {
  let lastTime = 0;
  let timer = null;
  const { leading, trailing, callBackFn } = options
  const _throttle = function (...args) {
    const nowTime = new Date().getTime();
    if (!leading && lastTime === 0) lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      callBackFn(fn.apply(this, args));
      lastTime = nowTime;
    } else {
      if (trailing && timer === null) {
        timer = setTimeout(() => {
          callBackFn(fn.apply(this, args))
          lastTime = !leading ? 0 : new Date().getTime(); // 除了第一次的立即执行外，所有的执行都是在执行 setTimeout 中的函数
          timer = null;
        }, remainTime)
      }
    }
  }
  _throttle.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      lastTime = 0;
    }
  }
  return _throttle;
}