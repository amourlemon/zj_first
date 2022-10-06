const arr = [1,2,3,[[4],[9,5]],6,7,8]

Array.prototype._flat = function(deep=1) {
    let res = this;
    for(let i = deep; i > 0; i--) {
        res = [].concat(...res);
    }
    return res
}
function flatten(arr, deep = 1) {
    const res = [];
    (function flat(arr, deep) {
        arr.forEach(element => {
            if(Array.isArray(element) && deep > 0) flat(element, deep - 1);
            else res.push(element)
        });
    })(arr, deep)
    return res
}

console.log(flatten(arr));

console.log(arr._flat(1));

