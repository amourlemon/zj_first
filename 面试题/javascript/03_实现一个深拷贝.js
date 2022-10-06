
function isObject(target) {
    return target !== null && typeof target === 'object';
}

function deepClone(target) {
    const map = new Map()
    function clone(target) {
        if (isObject(target)) {
            let cloneTarget = Array.isArray(target) ? [] : {};
            if (map.get(target)) {
                return map.get(target)
            }
            map.set(target, cloneTarget)
            for (const key in target) {
                cloneTarget[key] = clone(target[key]);
            }
            return cloneTarget;
        } else {
            return target;
        }
    }
    return clone(target)
};

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


