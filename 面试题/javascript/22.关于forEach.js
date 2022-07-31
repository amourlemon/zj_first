const arr = [1,2,4,5,67,8]

arr.forEach(item => {
    if(item === 4) return
    console.log(item)
})

// 对于 forEach 来说， 不可以使用 break 关键字， 并且 return 不能终结 forEach， 只能跳出本次执行