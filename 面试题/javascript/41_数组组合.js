const list = [['热', '冷', '冰'], ['大', '中', '小'], ['重辣', '微辣']];
function compose(list) {
    var res = list.reduce((result, property) => {
        return property.reduce((acc, value) => {
            return acc.concat(result.map(ele => [].concat(ele, value)))
        }, [])
    })
    // console.log(res);
    // res 返回的是组合数组的数组
    return res.map(arr => arr.join('+'))
}

console.log(compose(list));