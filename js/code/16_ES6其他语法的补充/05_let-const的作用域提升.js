// 作用域提升：In Javascript, you can have multiple var-statements in a function. 
// 变量在声明之前，可以被访问，称为作用域提升
// All of these statements act as if they were declared at the top of the function. Hoisting is the act of moving the declarations to the top of the function.

console.log(school); //Cannot access 'school' before initializationat Object.<anonymous> 
// 变量会被创建在包含他们嗯词法环境被实例化时，但是不可访问他们，直到词法绑定被求值
let school = 'ytu';

