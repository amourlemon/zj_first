var obj = {
    age: 12
}

Object.defineProperties(obj, {
    name: {
        configurable: true,
        value: 'zs',
        enumerable: false
    }
})

var properties = Object.getOwnPropertyDescriptors(obj);
console.log(properties);