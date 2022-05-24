// 深拷贝的简单实现，并没有考虑到 function Array 等形式
function deepClone(obj) {
    if (typeof obj !== 'object') return obj
    const newObj = {};
    Object.keys(obj).forEach(key => {
        newObj[key] = deepClone(obj[key]);
    })
    return newObj;
}

const person1 = {
    name: 'zs',
    age: 12,
    friend: {
        name: 'ls',
        age: 13
    }
}

console.log(typeof person1);
debugger
const person2 = deepClone(person1)
person2.friend.name = 'ww';
console.log(person1);
console.log(person2);