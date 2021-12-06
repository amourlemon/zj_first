// flat  降维
// 1. flat 的使用
const arr = [2,4,6,7,8,9,23,[23,54],[[32, 0, 1], [23, 34, 45]], 89];
// 参数表示的是 降的维数
console.log(arr.flat(1));
console.log(arr.flat(2));


// 2. flatMap 的使用 
const arr2 = [12,34,56];
const arr3 = arr2.flatMap(item => {
    return item * 2
})
// 和 map 的使用没有什么不同
console.log(arr3); // arr2 并没有发生变化

// 3. flatMap 的应用场景
const message = ['Hello World', 'Hello LYH', 'Hello uniapp'];

const newMessage = message.flatMap(item => {
    return item.split(' ')
})
console.log(newMessage);// [ 'Hello', 'World', 'Hello', 'LYH', 'Hello', 'uniapp' ]

const words = message.map(item => {
    return item.split(' ');
})
console.log(words); // [ [ 'Hello', 'World' ], [ 'Hello', 'LYH' ], [ 'Hello', 'uniapp' ] ]

// 此时的 flatMap 相当于先执行了 map 操作，然后执行 flat（默认参数是1） 操作
console.log(words.flat()); // [ 'Hello', 'World', 'Hello', 'LYH', 'Hello', 'uniapp' ]