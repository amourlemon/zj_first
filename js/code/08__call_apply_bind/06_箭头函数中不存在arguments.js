// 箭头函数中的 arguments 如同 this 一样，是没有的，出现时，需向上一层查找

// 并且 arguments 在顶层的作用域中  win 和 node 下是不同的
// win 下是不存在  node 下是文件

var foo = () => {
    console.log(arguments);
}

foo();