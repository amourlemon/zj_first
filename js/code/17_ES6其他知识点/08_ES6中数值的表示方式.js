const num1 = 100;
const num2 = 0b100; // 二进制
const num3 = 0o100; // 八进制
const num4 = 0x100; // 十六进制

console.log(num1, num2, num3, num4);

// 大数的表示

const num5 = 100_000_000_000_000; // 使用下划线，代码更加直观
console.log(num5);