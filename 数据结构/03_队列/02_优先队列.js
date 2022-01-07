class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

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

// 
class PriorityQueue extends Queue {
    constructor() {
        super()
    }
    enqueue(element) {
        if (this.items.length === 0) {
            this.items.push(element);
        } else {
            let added = false; // 自定义一个变量， 判断元素是否比队列中某一元素的优先级高
            for (let i = 0; i < this.size(); i++) {
                if (element.priority > this.items[i].priority) {
                    this.items.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(element);
            }
        }
    }
}

const qEl1 = new QueueElement('张三', 1);
const qEl2 = new QueueElement('李四', 2);
const qEl3 = new QueueElement('王五', 3);

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(qEl2);
priorityQueue.enqueue(qEl1);
priorityQueue.enqueue(qEl3);

console.log(priorityQueue);
console.log(priorityQueue.size());