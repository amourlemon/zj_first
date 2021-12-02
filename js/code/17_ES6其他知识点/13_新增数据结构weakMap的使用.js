// 1. WeakMap 是弱引用，同样不可以使用 基本数据结构作为 key 值

// 2. WeakMap 常见的四种方法
const weakMap = new WeakMap();
const obj1 = {name: 'zs'}
   // set
   weakMap.set(obj1, 'aaa');
   console.log(weakMap); // WeakMap { <items unknown> }  弱引用 数据类型是无法遍历的
   // get 
   console.log(weakMap.get(obj1));
   // has 
   console.log(weakMap.has(obj1));
   // delete
   console.log(weakMap.delete(obj1));
