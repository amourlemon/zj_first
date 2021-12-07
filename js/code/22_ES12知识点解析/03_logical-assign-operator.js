// 1. ||= 逻辑或赋值运算

let message = undefined;
// message = message || 'default value'
message ||= 'default Value';
console.log(message);

// 2. &&= 逻辑与赋值运算( 很少用 )

const obj = {
    name: '张三',
    foo() {
        console.log(this.name);
    }
}
// obj.foo();  // 闭包： 使用上层作用域中的变量， 对象没有作用域

obj.name&&obj.foo(); // obj name属性存在，然后执行 foo 方法

// 3. ??= 逻辑空赋值运算

// let msg = null; // Hello
// let msg = 0; // 0
// let msg = ''; //  
let msg = undefined; // Hello
msg ??= 'Hello';
console.log(msg);