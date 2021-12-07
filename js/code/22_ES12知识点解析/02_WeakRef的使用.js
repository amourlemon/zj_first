const finalRegistry = new FinalizationRegistry(() => {
    console.log('对象被删除掉了');
});

let obj = {
    name: ' 张三'
}

let info = new WeakRef(obj);
// 1. 属性分析
console.log(info); // WeakRef {}
// console.log(info.deref());  // 取出对象 这一步会影响 GC
console.log(Object.getOwnPropertyDescriptors(info)); // {}  具体的方法应该是放到了 WeakRef 的显示原型中
console.log(info.__proto__);
console.log(Object.getOwnPropertyDescriptors(WeakRef.prototype)); // 确实


// 2. 作用
// 如果直接让 info = obj  那么后续执行 obj = null 时，对象并不会清空，因为 info 仍然在指向这个对象
// 现在 如果让 obj = null， 那么对象就会清空
finalRegistry.register(obj)
obj = null;


