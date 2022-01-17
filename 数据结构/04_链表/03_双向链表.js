class LinkedList {
    length = 0;
    head = null;
    // append(element) 向链表尾部添加一个新的项。
    append(element) {
        // 有两种情况， 第一种是链表为空时插入， 第二种是链表不为空时插入
        const newNode = new Node(element);
        newNode.next = null;
        if (this.head === null) {
            this.head = newNode;
        } else {
            let node = this.head;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = newNode;
        }
        this.length++;
    }
    // insert(position, element) 向链表的特定位置插入一个新的项。
    insert(position, element) {
        // 加入对 position 的判断
        if (position < 0 || position > this.length) return;
        // 分两种情况， 1. 插入表头 2.插入其他位置
        const newNode = new Node(element);
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else {
            let index = 0;
            let node = this.head;
            while (index < position - 1) {
                node = node.next;
                index++;
            }
            newNode.next = node.next;
            node.next = newNode;
        }
        this.length++;
    }
    // get(position) 获取对应位置的元素。
    getElement(position) {
        if (position < 0 || position > this.length - 1) {
            return;
        }
        let node = this.head;
        let index = 0;
        while (index < position) {
            index++;
            node = node.next;
        }
        return node;
    }
    // indexOf(element) 返回元素在链表中的索引。如果链表中没有该元素就返回-1。
    indexof(element) {
        if (this.head === null) return -1; //空链表直接返回 
        let node = this.head;
        let index = 0;
        while (node.data !== element) {
            node = node.next;
            index++;
            if (index > this.length - 1) return -1; // 没有该元素，返回 -1
        }
        return index;
    }
    // update(position, element) 修改某个位置的元素。
    updata(position, element) {
        this.removeAt(position);
        this.insert(position, element)
    }
    // removeAt(position) 从链表的特定位置移除一项。
    removeAt(position) {
        if (position < 0 || position > this.length - 1) return;
        // 1. 删除表头元素  2. 删除其他元素 
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let node = this.head;
            let index = 0;
            while (index < position - 1) {
                node = node.next;
                index++;
            }
            node.next = node.next.next;
        }
        this.length--;
    }
    // remove(element) 从链表中移除一项。
    remove(element) {
        // 1. 删除表头元素 2. 删除其他元素
        if (this.head.data === element) {
            this.head = this.head.next;
        } else {
            let node = this.head;
            let index = 0;
            while (node.data !== element && index < this.length) {
                node = node.next;
                index++;
            }
            if (!index < this.length) return;
            this.removeAt(index);
        }
    }
    // isEmpty() 如果链表中不包含任何元素，返回 trun，如果链表长度大于 0 则返回 false。
    isEmpty() {
        return this.length === 0;
    }
    // size() 返回链表包含的元素个数，与数组的 length 属性类似。
    size() {
        return this.length;
    }
    // toString() 由于链表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
}

class Node {
    data;
    next = null;
    constructor(data) {
        this.data = data;
    }
}

class DoublyNode extends Node {
    constructor() {
        super(data);
        this.prev = null;
    }
}

class DoublyLinkedList extends LinkedList {
    constructor() {
        super();
        this.tail = null;
    }
    append(element) {
        let newNode = new Node(element);
        // 1. 链表为空链表
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // 2. 链表不为空 
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }
    insert(position, element) {
        if (position < 0 || position > this.length) return;
        const newNode = new Node(element);
        if (position === 0) {
            // 1.插入头部
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else if (position === this.length) {
            // 2. 插入尾部
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            // 3. 插入其余位置
            let index = 0;
            let currentNode = this.head;
            while (index < position - 1) {
                currentNode = currentNode.next;
                index++;
            }
            newNode.next = currentNode.next;
            currentNode.next.prev = newNode;
            currentNode.next = newNode;
        }
        this.length++;
    }
    // getElement(position) 获取指定位置的元素。  //不需要重写
    // indexOf(element) 返回元素在链表中的索引。 如果链表中没有该元素就返回 - 1。 // 不需要重写
    // update(position, element) 修改指定位置上的元素。
    update(position, element) {
        if (position < 0 || position > this.length - 1) return;
        // 修改头部元素
        if (position === 0) {
            this.head.data = element;
        } else {
            let index = 0;
            let currentNode = this.head;
            if (index < position) {
                currentNode = currentNode.next;
                index++;
            }
            currentNode.data = element;
        }
    }
    // removeAt(position) 从链表中的删除指定位置的元素。
    removeAt(position) {
        if (position < 0 || position > this.length - 1) return;
        // 只有一个元素
        if (this.length === 1) {
            this.head = null;
            this.tail = null
        } else {
            // 1. 删除头部元素
            if (position === 0) {
                this.head.next.prev = null;
                this.head = this.head.next;
            } else if (position === this.length - 1) {
                // 2. 删除尾部元素
                this.tail.prev.next = null;
                this.tail = this.tail.prev;
            } else {
                // 3. 删除其余元素
                let index = 0;
                let currentNode = this.head;
                while (index < position - 1) {
                    currentNode = currentNode.next;
                    index++;
                }
                currentNode.next.next.prev = currentNode;
                currentNode.next = currentNode.next.next;
            }
        }
        this.length--;
    }
    // remove(element) 从链表删除指定的元素。
    remove(element) {
        const position = this.indexOf(element);
        this.removeAt(position);
    }
    // isEmpty() 如果链表中不包含任何元素， 返回 trun， 如果链表长度大于 0 则返回 false。
    // size() 返回链表包含的元素个数， 与数组的 length 属性类似。
    // toString() 由于链表项使用了 Node 类， 就需要重写继承自 JavaScript 对象默认的 toString 方法， 让其只输出元素的值。
    // forwardString() 返回正向遍历节点字符串形式。
    // backwordString() 返回反向遍历的节点的字符串形式。
}

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append('a');
doublyLinkedList.append('b');
doublyLinkedList.append('c');
doublyLinkedList.append('d');

// doublyLinkedList.insert(0, 'd');
// doublyLinkedList.insert(2, 'e');
// doublyLinkedList.insert(5, 'f');

doublyLinkedList.removeAt(2);
console.log(doublyLinkedList);




// console.log('第0个元素是：', doublyLinkedList.getElement(0));
// console.log('第2个元素是：', doublyLinkedList.getElement(2));
// doublyLinkedList.updata(0, 'h');
// console.log('第3个元素是：', doublyLinkedList.getElement(3));
// console.log('第5个元素是：', doublyLinkedList.getElement(5));

// console.log('e元素的位置是：', doublyLinkedList.indexof('e'));
// console.log('b元素的位置是：', doublyLinkedList.indexof('b'));