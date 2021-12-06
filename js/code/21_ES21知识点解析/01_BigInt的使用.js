// 最大安全 数字，超过之后运算可能会出现错误
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991

// BigInt 的使用
const num1 = 9007199254740991n
// const num2 = num1 + 10; 报错，因为 一个是大数字类型， 一个是 Number 类型
const num2 = num1 + 10n;
console.log(num1);
console.log(num2);
const num3 = 45;

console.log(num1 + BigInt(num3));