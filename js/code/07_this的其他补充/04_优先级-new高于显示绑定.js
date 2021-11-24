function foo(){
    console.log(this);
}

var obj = {
    name: 'zs',
    fn: foo
};

var vr = foo.bind('dsf');
var voo = new vr();

//  new 关键字不能与  call 和 bind 一起使用
var boo = new foo.call('acs');  