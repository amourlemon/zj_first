let str = '100000000000'


//?  /(\d{3})/g 表示出现三次数字
//?  /(\d{3})+$/g 表示出现三次数字的情况出现了一次或者多次

//?  /?=(\d{3})+$/g ?= 表示前瞻

//?  /[a-zA-Z]\d/g ?= 表示匹配到字母后面是数字的字母和相邻的一个数字

//?  /?=([a-zA-Z]\d)/g ?= 表示匹配到字母后面是数字的字母

//?  /?=\B(\d{3})+$/g ?= 表示 \B 表示非单词边界
// str = str.replace(/(?=\B(\d{3})+$)/g, ',')
str = str.replace(/(?=\B(\d{3})+$)/g, ',')


console.log(str)

let str2 = 'a12dkkdkp2'
console.log(str2.replace(/[a-zA-Z]\d/g, '哈哈'));

const reg = /(?=\B(\d{3})+$)/g;
const t = reg.exec(100000000000)
console.log(t)
