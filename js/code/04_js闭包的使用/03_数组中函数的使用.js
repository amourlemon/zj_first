var nums = [11,23,4,5,7,45,32];

// filter 的使用
// 包含了三个参数 item(元素)  index(下标)  arr(数组本身)
// 参数是一个 函数，数组中有几个参数，就会执行多少次函数，返回一个 boolean 值
// 如果返回的值是 true，那么就会将元素放入新的数组当中
var newNums = nums.filter(function(item, index, arr) {
    return true;
})
console.log(newNums);

// find / findIndex 的使用  只能返回一个元素
var item = nums.find(function(item) {
    return item === 5;
})

console.log(item);

var items = nums.map(function(item) {
    return item * 2;
}) 

console.log(items);