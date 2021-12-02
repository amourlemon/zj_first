// WeakSet 是 弱引用，若有一个对象有且仅有WeakSet（或其他若引用） 指向时，那么GC会将这个对象回收掉

// 1. WeakSet 和 Set 的区别 1：WeakSet 只能引用加入对象
const set1 = new WeakSet();
// set1.add(11);
//console.log(set1); // TypeError: Invalid value used in weak set

// 2. WeakSet 是弱引用
let obj1 = {
    name: 'zs'
}
let obj2 = {
    name: 'ls'
}

const set2 = new Set();
set2.add(obj1); // 保存的是内存地址

const set3 = new WeakSet()
set3.add(obj2); // 保存的是内存地址

console.log(set2);
console.log(set3);  // WeakSet { <items unknown> } weakSet 不可遍历
obj1 = null;
obj2 = null;

console.log(set2);  // Set(1) { { name: 'zs' } }  仍然能拿到最初始的 obj1（说明最初始的obj1 没有被GC销毁掉）
console.log(set3);  // WeakSet { <items unknown> } 拿不到最初始的 obj2 (说明最初始的 obj2 已经被GC销毁掉了)

//3. 区别3：WeakSet 对象是不能够遍历的，因为进行遍历时，可能造成对象不能正常的销毁 所以存储到 WeakSet中的元素是不能被获取的

// 4. WeakSet 的应用
const set4 = new WeakSet();
class Person {
    constructor() {
        set4.add(this);
    }
   eating() {
       if (set4.has(this)) {
        console.log('eating~~~', this);
       } else {
        throw new Error('this 绑定错误')
       }
   }
}
const p1 = new Person();

p1.eating();  //eating~~~ Person {} 
p1.eating.call('zs'); // eating~~~ zs