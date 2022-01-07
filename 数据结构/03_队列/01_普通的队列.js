// 遵循  先进先出
// 弊端: 必须要在尾端插入, 首端删除

// 实现方式: 可以通过 链表实现 也可以通过数组实现

class Queue {
    constructor() {
        this.items = [];
    }
    // 数组的常见操作

    // enqueue(element) 向队列尾部添加一个（或多个）新的项。
    enqueue(element) {
        this.items.push(element);
    }
    // dequeue() 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
    dequeue() {
        return this.items.shift();
    }
    // front() 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）。
    front() {
        return this.items[0];
    }
    // isEmpty() 如果队列中不包含任何元素，返回 true，否则返回 false。
    isEmpty() {
        return this.items.length === 0;
    }
    // size() 返回队列包含的元素个数，与数组的 length 属性类似。
    size() {
        return this.items.length;
    }
    // toString() 将队列中的内容，转成字符串形式。
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

console.log(queue);

queue.dequeue();
queue.dequeue();

console.log(queue);

console.log(queue.size());
console.log(queue.front());
console.log(queue.isEmpty());


console.log('================================');

// 应用：击鼓传花
//  分析：传入一组数据集合和设定的数字 number，循环遍历数组内元素，遍历到的元素为指定数字 number 时将该元素删除，直至数组剩下一个元素。

function drinkingGame(persons, num) {
    const queue = new Queue();
    queue.items = [...persons];
    let index = 0;
    while (queue.size() !== 1) {
        if (index !== num - 1) {
            queue.enqueue(queue.dequeue());
            index++;
        } else {
            queue.dequeue()
            index = 0;
        }
    }
    return queue;
}

const person = drinkingGame(['zs', 'll', 'ww', 'ss', 'zz', 'aa'], 3)
const person2 = drinkingGame(["lily", "lucy", "tom", "tony", "jack"], 4)
console.log(person);
console.log(person2);