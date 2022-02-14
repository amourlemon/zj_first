 /**
    对 set map 类型的拷贝，只是实现了 浅拷贝
  */




 function isObject(obj) {
   return obj !== null && (typeof obj === 'object' || typeof obj === 'function');
 }

 function deepClone(originalVal) {
   // 判读如果是 set 类型
   if (originalVal instanceof Set) {
     return new Set([...originalVal]);
   }
   // 判读如果是 Map 类型
   if (originalVal instanceof Map) {
     return new Map([...originalVal]);
   }
   // 判断如果是一个 Symbol 的 value， 那么创建一个新的Symbol
   if (typeof originalVal === 'symbol') {
     return Symbol(originalVal.description);
   }
   if (!isObject(originalVal)) {
     return originalVal
   }
   // 实现函数的拷贝， 并非是一种深拷贝，因为函数的意义就是在于能够实现代码复用，只要拿到原来的就好
   if (typeof originalVal === 'function') {
     return originalVal;
   }
   // 实现数组的拷贝
   const newObj = Array.isArray(originalVal) ? [] : {};
   for (const key in originalVal) {
     newObj[key] = deepClone(originalVal[key]);
   }
   // 对 key 类型为 symbol 的数据进行拷贝
   const skeys = Object.getOwnPropertySymbols(originalVal);
   for (const skey of skeys) {
     // 生成的新对象的 symbol 类型的 key，还是之前的 symbol， 没有必要对 key 重新进行赋值
     newObj[skey] = originalVal[skey];
   }
   return newObj
 }


 const s1 = Symbol('aaa');
 const s2 = Symbol('bbb');
 console.log(typeof s1);
 const obj = {
   name: 'zs',
   age: 23,
   friend: {
     name: 'ls',
     age: 42
   },
   foo: function () {
     console.log('foo');
   },
   hobbies: ['a', 'b', 'c'],
   [s1]: '哈哈哈哈',
   symbol: s2,
   set: new Set('sd', 'dsd', 'fsd'),
   map: new Map([
     ['aaa', 'bbb'],
     ['ccc', 'ddd']
   ])
 }

 const newObj = deepClone(obj);
 console.log(newObj);

 console.log(obj.symbol === newObj.symbol);