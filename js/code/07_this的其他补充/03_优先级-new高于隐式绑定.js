function foo() {
    console.log(this);
};

var obj = {
    name: 'cs',
    fn: foo,
};

var boo = new obj.fn();  // foo{}  

