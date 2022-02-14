class DiyEventBus {
  constructor() {
    this.eventBus = {};
  }
  on(eventName, eventCallBack, thisArgs) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    handlers.push({
      eventCallBack,
      thisArgs
    });
  }
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    handlers.forEach(handler => {
      handler.eventCallBack.apply(handler.thisArgs, payload);
    });
  }
  off(eventName, eventCallBack) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;
    const tempHandlers = [...handlers];
    for (let i = 0; i < tempHandlers.length; i++) {
      if (tempHandlers[i].eventCallBack === eventCallBack) {
        const index = handlers.indexOf(eventCallBack);
        handlers.splice(index, 1);
      }
    }
  }
}

const eventBus = new DiyEventBus();
eventBus.on('abc', function () {
  console.log('事件abc1');
}, 'ggg')

const eventCallBack = function () {
  console.log('事件abc2');
}
eventBus.on('abc', eventCallBack, 'ggg')
eventBus.emit('abc')
eventBus.off('abc', eventCallBack)
eventBus.emit('abc')