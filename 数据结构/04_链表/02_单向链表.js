class LinkedList {
    length = 0;
    head = null;

    Node = class {
        data;
        next = null;
        constructor(data) {
            this.data = data;
        }
    }

    // append(element) 向链表尾部添加一个新的项。
    append(element) {
        // 有两种情况， 第一种是链表为空时插入， 第二种是链表不为空时插入
        const newNode = new this.Node(element);
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
        const newNode = new this.Node(element);
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
    get(position) {
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

const linkedList = new LinkedList();
linkedList.append('a');
console.log(linkedList);
linkedList.append('b');
console.log(linkedList);
linkedList.append('c');
console.log(linkedList);
linkedList.insert(0, 'd');
console.log(linkedList);
linkedList.insert(4, 'e');
console.log(linkedList);

console.log('第0个元素是：', linkedList.get(0));
console.log('第3个元素是：', linkedList.get(3));

console.log('c 元素下标为：', linkedList.indexof('c'));
console.log('d 元素下标为：', linkedList.indexof('d'));
console.log('e 元素下标为：', linkedList.indexof('e'));
console.log('g 元素下标为：', linkedList.indexof('g'));


linkedList.updata(3, 'dd')
console.log(linkedList);
console.log('第3个元素是：', linkedList.get(3));