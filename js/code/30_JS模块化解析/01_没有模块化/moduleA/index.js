// 创建一个自执行函数，并将需要使用的变量放在新建的对象中返回出去
var moduleA = (function () {
    var name = '张三';
    var age = 12;
    var flag = true;
    return {
        name,
        age,
        flag
    }
})()