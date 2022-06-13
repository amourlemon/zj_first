function preprocessing(num1, num2) {
    const index1 = String(num1).split('.')[1] || ''.length
    const index2 = String(num2).split('.')[1] || ''.length
    const base1 = Math.pow(10, index1);
    const base2 = Math.pow(10, index2);
    return Math.max(base1, base2);
}


function plus(num1, num2) {
    const base = preprocessing(num1, num2)
    return (num1 * base + num2 * base) / base;

}


// 不能运算超级大的数
function product(num1, num2) {
    // const index1 = String(num1).split('.')[1] || ''.length
    // const index2 = String(num2).split('.')[1] || ''.length;
    // const base = Math.pow(10, index1 + index2);
    // console.log('ddd', Number(String(num2).replace('.', '')), base, index1);
    // return Number(String(num1).replace('.', '')) * Number(String(num2).replace('.', '')) / base
    const num1String = num1.toString()
    const num2String = num2.toString()
    const num1Digits = (num1String.split('.')[1] || '').length
    const num2Digits = (num2String.split('.')[1] || '').length
    const baseNum = Math.pow(10, num1Digits + num2Digits)
    return Number(num1String.replace('.', '')) * Number(num2String.replace('.', '')) / baseNum
}

function subtraction(num1, num2) {

}
console.log(0.1 + 0.2);
console.log(plus(0.1, 0.2));
console.log(0.000000001 * 0.1);
console.log(product(0.0000000001, 0.0000001));