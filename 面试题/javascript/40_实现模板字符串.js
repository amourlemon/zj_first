const name = '张三';
const age = 12;
const address = '重庆';
const reg = /\$\{([^}]+)\}/g

function templateReplace(str) {
    return str.replace(/\$\{([^}]+)\}/g, function(match, key) {
        console.log(match);
        console.log(key);
        return eval(key)
    })
}

// console.log(templateReplace('大家好，我是${name},今年${age}岁，现居${address}'));

function templateReplace2(str) {
    return str.replace(/\$\{(.+?)\}/g, function(match, key) {
        console.log(match);
        console.log(key);
        return eval(key)
    })
}
console.log(templateReplace2('大家好， 我是${name},今年${age}岁，现居${address}'));

let a = 0.899999999;
console.log(typeof a.toFixed(2));