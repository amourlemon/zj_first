// 空值合并运算
const foo = undefined

// const bar = foo || 'default value'  但是传入 0 或者是 ‘’ 时， 仍然是 default value

const bar = foo ?? 'default value'

console.log(bar);