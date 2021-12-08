const reactiveFns = [];
function watchFn(fn) {
    reactiveFns.push(fn);
}
const info = {
    name: 'zs',
    age: 45
}

watchFn (function() {
    console.log('info 的属性发生变化了1');
    console.log('info 的属性发生变化了3');
    console.log('info 的属性发生变化了2');
}) 

function boo() {
    console.log('普通函数');
}

obj.name = 'ls';
reactiveFns.forEach(fn => {
    fn()
})