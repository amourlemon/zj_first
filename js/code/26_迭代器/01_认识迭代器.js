// 迭代器本身就是一个对象，里面定义了一个 next 函数，
// next 函数无参数或者仅存在一个参数，并且返回一个带有 done属性 和 value属性 的对象

let index = 0;
let names = ['张三', '李四', '王五']

const iterator = {
    next: function () {
        if (index < names.length) {
            return {
                done: false,
                value: names[index++]
            };
        } else {
            return {
                done: true,
                value: undefined
            };
        }
    }
}

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());