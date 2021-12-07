function foo() {
    console.log(this);
}
const fooProxy = new Proxy(foo, {
    apply: function(target, thisArg, argsArray) {
        console.log('函数的显式绑定被监听到了');
        target.apply(thisArg, argsArray);
    },
    construct: function(target, argsArray, newTarget) {
        console.log(target, argsArray, newTarget);
        return new target(...argsArray);
    }
})

fooProxy.apply({}, ['fsdf','fsd','fsddf'])

new fooProxy('dfs', 'dfsdf');