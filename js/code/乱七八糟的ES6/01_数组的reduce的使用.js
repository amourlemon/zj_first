// reducer 函数接收4个参数:
    //1. callback中的四个参数
        // Accumulator (acc) (累计器)
        // Current Value (cur) (当前值)
        // Current Index (idx) (当前索引)
        // Source Array (src) (源数组)
    // 2. 初始值
    // 您的 reducer 函数的返回值分配给累计器，该返回值在数组的每个迭代中被记住，并最后成为最终的单个结果值。
    // arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])





console.log(con);
// 2. 统计数组中的名字 并打印
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bruce'];

let con2 = names.reduce((acc, current) => {
    console.log(acc[current]);
    return ((acc[current]++)|| (acc[current] = 1), acc)
}, {})

let con3 = names.reduce((acc, current) => {
    // acc = (acc[current]++) || (acc[current] = 1); 错误返回的是 1
    //  acc[current] = (acc[current]++) || (acc[current] = 1);  错误 结果不对
    acc[current] = (++acc[current]) || (acc[current] = 1) // 正确
    // acc[current] = (acc[current] + 1) || (acc[current] = 1); // 正确
    return acc
}, {})
console.log(con2);
console.log(names);
console.log(con3);


// 数组的计算属性
// let obj = {};
// obj['name'] = (obj['name']++) || 1;
// // console.log(obj['name']+1);
// obj['name'] = (obj['name']++) || 1;
// console.log(obj);

// ++i 和 i++
let i = 1;
let j = 1;
let a = i++;
let b = ++j;
// 可见， i++ 是先将 i 的值给 a，然后再进行 ++ 操作；
//  ++i，是先进行 ++ 操作，然后赋值给b
console.log(a, i, b, j); // 1 2 2 2