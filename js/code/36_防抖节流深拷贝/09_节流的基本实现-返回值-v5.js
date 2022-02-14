function diyThrottle(fn, interval, options = { leading: true, trailing: true, callBackFn }) {
  let lastTime = 0;
  const { leading, trailing, callBackFn } = options;
  let timer = null;
  const _throttle = function (...args) {
    const nowTime = new Date().getTime();
    if (!leading && lastTime === 0) lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      const res = fn.apply(this, args);
      lastTime = nowTime;
      callBackFn(res);
      return;
    } else {
      if (trailing && timer === null) {
        timer = setTimeout(() => {
          callBackFn(fn.apply(this, args));
          lastTime = !leading ? 0 : new Date().getTime(); // 因为除了第一次fn立即执行以外，其余的fn立即执行都会在 setTimeOut 中执行， 所以保证remainTime 无限接近或者等于 interval
          timer = null;
        }, remainTime)
      }
    }
  }
  return _throttle;
}