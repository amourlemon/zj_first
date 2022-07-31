const arr = [1,2,3,[[4,5]],6,7,8]

Array.prototype._flat = function(deep=1) {
    let res = this;
    for(let i = deep; i > 0; i--) {
        res = [].concat(...res);
    }
    return res
}

console.log(arr._flat(2));