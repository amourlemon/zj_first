// js 也是有多态的，但是 JS是动态语言，所以可以不满足传统多态的三个条件

var obj1 = {
    eating() {
        console.log('张三正在吃饭');
    }
}

var obj2 = {
    eating() {
        console.log('李四正在吃饭');
    }
}