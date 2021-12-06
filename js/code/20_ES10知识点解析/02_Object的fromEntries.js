const info = {
    name: '张三',
    age: 90,
    address: '济南'
}

const entries = Object.entries(info)

console.log(entries);
// 1. 还原 info 方式 1
const newInfo1 = {};
for(const entry of entries) {
    newInfo1[entry[0]] = entry[1];
}
console.log(newInfo1);

// 2. 方式二： 
//  entries 二维数组， 数组中的元素，第一位是 对象的 key， 第二位 是对象的 value
const newInfo2 = Object.fromEntries(entries);
console.log(newInfo2);

// 3. Object.fromEntries 的应用场景
const queryString = 'name=why&age=18&height=1.99';
const queryParams = new URLSearchParams(queryString);

for(const param of queryParams) {
    console.log(param);
}

const paramsObj = Object.fromEntries(queryParams);
console.log(paramsObj);

