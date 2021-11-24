
function foo() {
    console.log(this);
}

var obj = {
    name: 'zs',
    fn: foo
};
// bind  apply  同理
obj.fn.call('ava')