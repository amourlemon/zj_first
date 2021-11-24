
// add() 是一个纯函数
function add(num1, num2) {
    return num1 + num2;
}


// boo 不是纯函数， 因为其改变了外部的数据
var obj = {
    name: 'cv',
    age: 34
}
function boo() {
    obj = {
        ...obj,
        age: 23
    }

}

boo();
console.log(obj);

