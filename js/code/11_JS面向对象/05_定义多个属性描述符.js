var obj = {
    name: 'zhangsan'
};
Object.defineProperties(obj, {
    age: {
        configuration: true,
        value: 12,
        enumerable: true,
    },
    'address' : {
        configurable: false,
        value: 'yt'
    }
})

console.log(obj.age);