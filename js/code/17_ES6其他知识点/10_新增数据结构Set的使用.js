const set = new Set();
// 1. set 中不能有重复的值
set.add(10);
set.add(100);
set.add('bbb');
set.add(10);

// 2. 添加对象时，特别注意
set.add({});
set.add({});
console.log(set);  // Set(5) { 10, 100, 'bbb', {}, {} }

// 3. set 的应用：数组去重
const arr = [1,2,4,5,6,7,8,9,6,4,2,21,3,1,2,3,4,5];
const set2 = new Set(arr);
console.log(set2);
// 复原数组
const newArr = Array.from(set2);
console.log(newArr);

// 4. size 属性
console.log(set2.size);

// 5.循环属性
for(const item of set2) {
    console.log(item);
}

// 6. has 方法
console.log(set2.has(24));
// 7. clear
set2.clear();
console.log(set2);