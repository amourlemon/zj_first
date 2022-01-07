// 栈 是一种数据结构， 遵循先进后出，后进先出的原则

// 使用数组封装 栈
class Stack {
    constructor() {
        this.items = [];
    }
    // 栈的基本操作
    // push() 添加一个新元素到栈顶位置。
    push(item) {
        this.items.push(item);
    }

    // pop() 移除栈顶的元素，同时返回被移除的元素。
    pop() {
        return this.items.pop();
    }

    // peek() 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
    peek() {
        return this.items[this.items.length - 1];
    }
    // isEmpty() 如果栈里没有任何元素就返回 true，否则返回 false。
    isEmpty() {
        return this.items.length === 0;
    }
    // size() 返回栈里的元素个数。这个方法和数组的 length 属性类似。
    size() {
        return this.items.length;
    }
    // toString() 将栈结构的内容以字符串的形式返回。
    toString() {
        let res = '';
        for (const item of this.items) {
            res += item + '';
        }
        return res;
    }
}

const stack = new Stack();
//  测试 
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack);

stack.pop()
stack.pop()

console.log(stack);

console.log(stack.peek());

console.log(stack.size());

console.log(stack.isEmpty());

console.log(stack.toString());


//  利用栈结构进行十进制转二进制

function dec2bin(decNum) {
    const stack = new Stack();
    let res = '';
    while (decNum > 0) {
        stack.push(decNum % 2);
        decNum = Math.floor(decNum / 2);
    }
    console.log(stack);
    while (!stack.isEmpty()) {
        res += stack.pop();
    }
    return res;
}

const binNum = dec2bin(6);
console.log(binNum);