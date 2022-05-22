function diyThrottle(fn, interval, options = {
  leading: true,
  trailing: true
}) {
  let lastTime = 0;
  // leading 表示 是否在第一次执行前调用
  // trailing 表示 是否在最后一次执行后调用
  const { leading, trailing } = options;
  let timer = null;
  const _throttle = function (...args) {
    const nowTime = new Date().getTime();
    if (lastTime === 0 && !leading) lastTime = nowTime;
    const remainTime = interval - (nowTime - lastTime);
    if (remainTime <= 0) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      fn.call(this, args);
      lastTime = nowTime;
      return;
    } else {
      // 只有在定时器为null的时候才会执行
      if (trailing && timer === null) {
        timer = setTimeout(() => {
          fn.call(this, args);
          //   防止在连续点击时，在末尾时间段触发和下一段的开始时间触发，导致重复触发事件
          lastTime = !leading ? 0 : new Date().getTime();
          timer = null;
        }, remainTime)
      }
    }
  }
  return _throttle;
}