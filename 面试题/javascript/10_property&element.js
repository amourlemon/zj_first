let obj  = {
    p2: 'ad',
    2: 'sd',
    1: 'dsf',
    p1: 'dfdf'
}

for(const key in obj) {
    console.log(key);
}


var a = 100;
function foo() {
    debugger
     console.log(a);
     return
     var a = 10;
     console.log(a);
}

foo()