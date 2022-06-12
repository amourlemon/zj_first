const obj = {
    name: 'zs',
    friends: ['ls', 'ww', 'zl'],
    foo: function () {
        this.friends.forEach(function () {
            console.log(this.name);
        })
    }
}
// 变成箭头函数之后可以正常打印
obj.foo()