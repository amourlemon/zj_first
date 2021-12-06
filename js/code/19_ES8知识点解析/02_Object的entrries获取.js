const info = {
    name: '张三',
    age: '70',
    address: 'sh'
}

console.log(Object.entries(info));  // [ [ 'name', '张三' ], [ 'age', '70' ], [ 'address', 'sh' ] ] 二维数组

for(const entry of Object.entries(info)) {
    console.log(entry[0], entry[1]);
}

console.log(Object.entries(['fsd', 'dfsda', 'ere'])); // 下标作为 key 值 [ [ '0', 'fsd' ], [ '1', 'dfsda' ], [ '2', 'ere' ] ]  
console.log(Object.entries('dfsf'));// [ [ '0', 'd' ], [ '1', 'f' ], [ '2', 's' ], [ '3', 'f' ] ]