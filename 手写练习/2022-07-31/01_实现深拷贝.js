function deeepClone(obj) {
    if(typeof obj !== 'object') return obj
    const newObj = {};
    for(const key in obj) {
        newObj[key] = deeepClone(obj[key])
    }
    return newObj;
}

const person = {
    name: 'zs',
    age: 23,
    friend: {
        name: 'ls',
        age: 12
    }
}

const clonePerson = deeepClone(person);
clonePerson.friend.name = 'ww';
console.log(clonePerson)
console.log(person);