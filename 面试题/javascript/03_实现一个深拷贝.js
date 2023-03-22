
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
    },
}

const obj = {
    a: person1
}

person1.b = obj

console.log(typeof person1);
debugger
const person2 = deepClone(person1)
person2.friend.name = 'ww';
console.log(person1);
console.log(person2);




function deepClone2(origin) {
    return new Promise((resolve, reject) => {
        const { port1, port2 } = new MessageChannel();
        port1.postMessage(origin);
        port2.onmessage = (msg) => {
            resolve(msg.data)
        }
    })
}

function getPivot(arr, low, high) {
    const pivot = arr[low];
    while (low < high) {
        while (low < high && pivot < arr[high]) {
            high--
        }
        arr[low] = arr[high];
        while (low < high && pivot >= arr[low]) {
            low++
        }
        arr[high] = arr[low]
    }
    arr[low] = pivot;
    return low;
}

function quickSort(arr, low, high) {
    if (low < high) {
        const pivot = getPivot(arr, low, high);
        quickSort(arr, low, pivot - 1);
        quickSort(arr, pivot + 1, high)
    }

}