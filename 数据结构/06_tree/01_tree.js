class Node {
    constructor(data) {
        this.leftNode = null;
        this.rightNode = null;
        this.data = data
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    // insert(key) 向树中插入一个新的键。
    insert(key) {
        const newNode = new Node(key);
        // 判断是不是空树
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (node.data > newNode.data) {
            if (node.leftNode === null) {
                node.leftNode = newNode;
            } else {
                this.insertNode(node.leftNode, newNode);
            }
        } else {
            if (node.rightNode === null) {
                node.rightNode = newNode
            } else {
                this.insertNode(node.rightNode, newNode);
            }
        }
    }
    // search(key) 在树中查找一个键，如果节点存在，则返回 true；如果不存在，则返回 false。
    search(key) {
        if (this.root === null) {
            return false;
        } else {
            return this.searchNode(this.root, key);
        }
    }
    searchNode(node, key) {
        if (node === null) return false;
        // 判断 三种情况 ： 等于、大于、 小于
        if (node.data === key) {
            return true;
        } else if (node.data > key) {
            return this.searchNode(node.leftNode, key);
        } else {
            return this.searchNode(node.rightNode, key);
        }
    }
    // preOrderTraverse 通过先序遍历方式遍历所有节点。
    preOrderTraverse() {
        if (this.root === null) return null;
        this.preOrderTraverseNode(this.root);

    }
    preOrderTraverseNode(node) {
        if (node === null) return;
        console.log(node.data);
        this.preOrderTraverseNode(node.leftNode);
        this.preOrderTraverseNode(node.rightNode);
    }
    // inOrderTraverse 通过中序遍历方式遍历所有节点。
    inOrderTraverse() {
        if (this.root === null) return;
        this.inOrderTraverseNode(this.root);

    }
    inOrderTraverseNode(node) {
        if (node === null) return;
        this.inOrderTraverseNode(node.leftNode);
        console.log(node.data);
        this.inOrderTraverseNode(node.rightNode);
    }

    // postOrderTraverse 通过后序遍历方式遍历所有节点。
    postOrderTraverse() {
        this.postOrderTraverseNode(this.root);
    }
    postOrderTraverseNode(node) {
        if (node === null) return null;
        this.postOrderTraverseNode(node.leftNode);
        this.postOrderTraverseNode(node.rightNode);
        console.log(node);
    }
    // min 返回树中最小的值/键。
    min() {
        return this.findMinNode(this.root);
    }
    findMinNode(node) {
        if (node.leftNode === null) return node.data;
        return this.findMinNode(node.leftNode);
    }
    // max 返回树中最大的值/键。
    max() {
        return this.findMaxNode(this.root);
    }
    findMaxNode(node) {
        if (node.rightNode === null) return node.data;
        return this.findMaxNode(node.rightNode)
    }
    // remove(key) 从树中移除某个键。
    remove(key) {
        
    }
}

const bst = new BinarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);

console.log(bst);

console.log(bst.search(11));

console.log(bst.min());

console.log(bst.max());
// bst.preOrderTraverse();
// bst.inOrderTraverse(); // 从小到大的排列
// bst.postOrderTraverse();