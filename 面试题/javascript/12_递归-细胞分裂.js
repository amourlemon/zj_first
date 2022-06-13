// 一个细胞，一个小时分裂一次，生命周期是3个小时，求 n 小时后容器内，有多少个细胞

function total(n) {
    function twoHourCell(n) {
        if (n === 0 || n === 1) return 0
        return oneHourCell(n - 1)
    }

    function oneHourCell(n) {
        if (n === 0) return 0
        return originCell(n - 1);
    }

    function originCell(n) {
        if (n === 0) return 1
        return originCell(n - 1) + oneHourCell(n - 1) + twoHourCell(n - 1)
    }
    return twoHourCell(n) + oneHourCell(n) + originCell(n)
}

console.log(total(1));
console.log(total(2));
console.log(total(3));
console.log(total(4));
console.log(total(5));