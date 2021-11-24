var obj = {
    name: 'zs',
    age: 23
}

console.log(obj.__proto__);

console.log(obj.address);

// obj.__proto__.address = 'sh';
// console.log(obj.address);


// 当查找对象的属性时，对象不存在该属性，那么就会一直沿着原型链一直寻找，直至找到顶层原型
// 原型也是对象，故也存在原型
obj.__proto__ = {};  // 如过不赋值为空对象的话，实际上  obj.__proto__  就是顶层原型
obj.__proto__.__proto__.address = 'bj';
console.log(obj.address);