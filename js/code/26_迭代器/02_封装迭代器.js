function createIterator(IteratorObj) {
    let index = 0;
    return {
        next: function () {
            if (index < IteratorObj.length) {
                return {
                    done: false,
                    value: IteratorObj[index++]
                }
            } else {
                return {
                    done: false,
                    value: undefined
                }
            }
        }
    }
}

const names = ['张三', '李四', '王五'];
const iterator = createIterator(names);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());