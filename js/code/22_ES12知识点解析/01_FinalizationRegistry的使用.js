// 由于 node 版本问题， 可能会识别不出 ES12 的内容

// 可以在 对象销毁后进行一些操作
const finalRegistry = new FinalizationRegistry((value) => {
    console.log("注册在finalRegistry 中的对象被销毁了" + value);
});

let obj = {
    name: '张三'
}
let info = {
    age: 34
}

finalRegistry.register(obj, 'obj');
finalRegistry.register(info, 'info');

obj = null;
info = null;
