let obj = {
    p2: 'ad',
    2: 'sd',
    1: 'dsf',
    p1: 'dfdf',
    '': 'sdsd',
    a: '222',
    '0': 'sdfd'
}

for (const key in obj) {
    console.log(key);
}


var a = 100;

function foo() {
    console.log(a);
    return
    var a = 10;
    console.log(a);
}

foo()