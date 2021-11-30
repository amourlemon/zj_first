var names = ['张三', '李四', '王五'];

// 数组中的解构
var [name1, name2, name3] = names;
console.log(name1, name2, name3);

// 数组中的解构， 解构后面的元素
var [, namea, nameb] = names;
console.log(namea, nameb);

// 数组中的解构， 解构第一个元素，剩余元素建成新的数组
var [namez, ...newNameArr] = names;
console.log(namez, newNameArr);

// 数组中的解构 默认值

var [named, namee, namef, nameg = '赵六'] = names;
console.log(named, namee, namef, nameg);