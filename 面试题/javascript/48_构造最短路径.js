const n = 5;
const nums = [0, 3,1,2,3,3]

function test(nums) {
    console.log(nums);
    const res = [];
    const ans = [];
    for(let i = 0; i < nums.length; i++) {
        ans.push([nums[i], i+1])
    }
    ans.sort((a,b) => a[0] - b[0])
    let temp  = 1;
    for(let i = 1; i < ans.length; i++) {
        if(ans[i][0] === ans[i-1][0]) {
            res.push([temp, ans[i][1]])
        } else {
            temp = ans[i-1][1];
            res.push([temp, ans[i][1]])
        }
    }
    
    console.log(res.length);
    for(let i = 0; i < res.length; i++) {
        console.log(res[i].join(' '));
    }
}
test(nums)
