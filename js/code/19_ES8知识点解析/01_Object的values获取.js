const info = {
    name: '张三',
    age: 23
}

// keys 的获取
for(const key of Object.keys(info)) {
    console.log(key);
}

// values 的获取

console.log(Object.values(info)); // [ '张三', 23 ] 数组的形式
for(const value of Object.values(info)) {
    console.log(value);
}

console.log(Object.values(['fasd','fasdf', 'gsar'])); // [ 'fasd', 'fasdf', 'gsar' ]

console.log(Object.values('sff')); // [ 's', 'f', 'f' ]