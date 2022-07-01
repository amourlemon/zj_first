// 可迭代对象中，有一个key值为 Symbol.iterator 的属性，该属性是一个函数
// 并且可以返回一个迭代器
// 迭代器对象 可以使用 for...of...  并且打印出来的 是 done 为 false时的 value
// 可迭代对象可以生成多个迭代器


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

const iterator1 = iterableObj[Symbol.iterator]();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

const iterator2 = iterableObj[Symbol.iterator]();
console.log(iterator2.next());
console.log(iterator2.next());

// 可迭代对象  可以使用 for...of...
for (const item of iterableObj) {
    console.log(item);
}

const arr = ['sdfs', 'sdf', 'were'];
console.log(arr[Symbol.iterator]);