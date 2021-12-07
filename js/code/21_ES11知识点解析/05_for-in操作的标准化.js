const info = {
    name: '张三',
    age: 70
}

// 之前 使用 for... in .. 根据浏览器的不同，打印的 item 可能是 value 但也可能是 key(绝大多数是key)
// ES11 之后打印的都是 key 值
for(const item in info) {
    console.log(item);
}