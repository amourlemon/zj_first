const arr = [1, 2, 2];

console.log(arr instanceof Array)
console.log((Object.getPrototypeOf(arr).slice(1)))
console.log(arr.__proto__ === Array.prototype)
console.log(Array.isArray(arr))
console.log(Array.prototype.isPrototypeOf(arr))
console.log(arr.constructor === Array)
console.log(Object.prototype.toString.call(arr));