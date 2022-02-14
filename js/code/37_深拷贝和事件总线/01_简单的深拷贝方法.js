// 使用 JSon 进行深拷贝
const obj = {
  name: 'zs',
  age: 23,
  friend: {
    name: 'ls',
    age: 42
  },
  foo() {
    console.log('foo');
  }
}

const newObj = JSON.parse(JSON.stringify(obj));

console.log(newObj); // 虽然完成了深拷贝，但是不会对 函数、Symbol 进行拷贝