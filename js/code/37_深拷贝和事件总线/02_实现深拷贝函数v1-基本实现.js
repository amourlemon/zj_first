function isObject(obj) {
  return obj !== null && (typeof obj === 'object' || typeof obj === 'function');
}

function deepClone(originalVal) {
  if (!isObject(originalVal)) {
    return originalVal
  }
  const newObj = {};
  for (const key in originalVal) {
    newObj[key] = deepClone(originalVal[key]);
  }
  return newObj
}

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
  hobbies: ['a', 'b', 'c']
}

// 此时  对函数 数组等其他类型的拷贝是不支持的

const newObj = deepClone(obj);
console.log(newObj);