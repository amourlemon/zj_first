var partition = function(s) {
    const res = [];
    const path = [];
    const len = s.length;
    function backingTracking(str, start, end) {
        if(end === len - 1) {
            res.push([...path])
            return
        }

        for(let i = start; i < len; i++) {
            let index = i;
            for(let j = i; j < len; j++) {
                if(isMirrow(str, i, j)) {
                    path.push(str.substring(i, j+1))
                }
            }
            backingTracking(str, i, len - 1)
            path.pop();
        }
    }
    backingTracking(s, 0, 0)
    return res
}
function isMirrow(str, start, end) {
    while(start < end) {
        if(str[start] !== str[end]) return false
        start++;
        end--;
    }
    return true
}

console.log(partition("aab"));

console.log(isMirrow('aab', 0,2));
