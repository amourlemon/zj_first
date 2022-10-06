const n = 13
// 放入弹幕
const arr = [
'hello',
'are you ok?',
'how are you',
'how are you',
'qwwwwwwaaa',
'you so good',
'nice',
'wow',
'owiq jjww',
'are you ok?',
'QWQ',
`what's that???`,
'no....'
];
// 统计结果
const keyArr = [];
const res = [];

function judge(str='') {
    const TT = 'qwkhj';
    let i = 0; j = 0;
    while(j < str.length) {
        while(j < str.length && TT.includes(str.charAt(j))) {
            j++
        }
        if(j - i >= 5) {
            return true
        }
        j++;
        i = j;
    }
    return false
}
// 判断字符串是不是存在于一个数组中
function arrIncludesStr(str, arr=[]) {
    const len = arr.length;
   for(const s of arr) {
        if(s === str) return true
   }
   return false;
}
res.push(judge(arr[0]));
keyArr.push(arr[0])
for(let i = 1; i < n; i++ ) {
    console.log(i, judge(arr[i]), arrIncludesStr(arr[i], keyArr));
    if(judge(arr[i]) || arrIncludesStr(arr[i], keyArr)) {
        res.push(true);
    } else {
        res.push(false)
    }
    keyArr.push(arr[i])
}
console.log(keyArr);
console.log(keyArr.length);
// console.log(res.length);
res.forEach(item => {
    if(item) {
        console.log('yes')
    } else {
        console.log('no')
    }
})

