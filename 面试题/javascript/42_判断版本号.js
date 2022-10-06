function* walker(str) {
    let part = '';
    let terminal = ['.', '-'];
    for(let i = 0; i < str.length; i++) {
        if(terminal.includes(str[i])) {
            // 将 part 返回出去 
            yield part;
            // part 清空
            part = '';
        } else {
            part += str[i];
        }
    }
    if(part) yield part;
}

const strs = ['12.12.34.1', '12.21.4', '1.11.1', '2.2.1', '3.4', '1.0.0'];
function compare(v1, v2) {
    const iterator1 = walker(v1);
    const iterator2 = walker(v2);
    let index = 0
    while(true) {
        let value1 = iterator1.next().value || 0;
        let value2 = iterator2.next().value || 0;
        
        value1 = parseInt(value1);
        value2 = parseInt(value2);


        if(value1 < value2) {
            return -1
        }
        if(value1 > value2) {
            return 1
        }

        if(index++ === 6) return 0
   }
}
let max = strs[0]
for(let i = 1; i < strs.length; i++) {
    if(compare(max, strs[i]) === -1) {
        max = strs[i];
    }
}
console.log(max);





