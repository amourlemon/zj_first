const iterableObj = {
    names: ['张三', '李四', '王五'],
    [Symbol.iterator]: function () {
        let index = 0;
        return {
            next: () => {
                if (index < this.names.length) {
                    return {
                        done: false,
                        value: this.names[index++]
                    }
                } else {
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
    }
}

// 1. 可以使用 for...of

// 2. 可以使用扩展运算符（spread syntax）

console.log(...iterableObj);
const obj = {
    name: 'zs',
    age: 23
}
const newObj = {
    ...obj
}
// 此时用的不是迭代器，而是ES9（ES2018）新的语法
console.log('新的对象：', newObj);

// 3. 可以解构
const [name1, name2, name3] = {
    ...iterableObj
};
console.log(name1, name2, name3);

// 4. 可以使用 Promise.all
Promise.all(iterableObj).then(res => {
    console.log(res); // [ '张三', '李四', '王五' ]
})

// 5. 创建一些其他的对象
const set1 = new Set(iterableObj);
console.log(set1);

// 数组去重练习
let nums = [1, 2, 4, 5, 2, 2, 3, 1];
nums = new Set(nums);
console.log('nums：', nums);

// new Array 的使用
const array1 = new Array(1, 2, 4);
console.log(array1);