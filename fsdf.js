function test(arr = []) {
    let list1 = [arr[0]]
    let list2 = [arr[1]]

    for (let i = 2; i < arr.length; i++) {
        const sum1 = list1.length === 0 ? 0 : list1.reduce((cur, pre) => cur + pre)
        const sum2 = list2.reduce((cur, pre) => cur + pre)

        if (sum1 + sum2 <= arr[i]) {
            list2 = [...list1, ...list2]
            list1 = [arr[i]]
        } else {
            if (sum1 <= sum2) {
                list1.push(arr[i])
            } else {
                list2.push(arr[i])
            }
        }
    }
    return Math.abs(list1.reduce((cur, pre) => cur + pre) - list2.reduce((cur, pre) => cur + pre))
}

// console.log(test([200, 100, 500, 1000, 100, 100, 200, 100, 200]));

var shortestSubarray = function (nums, k) {
    const path = [];
    const res = [];
    // nums.sort((a, b) => a - b)
    const backing = (startIndex) => {
        let sum = 0;
        for (const num of path) {
            sum += num
        }
        if (sum >= k) {
            res.push([...path])
            return
        }


        for (let i = startIndex; i < nums.length; i++) {
            path.push(nums[i])
            backing(i + 1);
            path.pop()
        }
    }
    backing(0)
    console.log(res);
    return res[res.length - 1] ? res[res.length - 1].length : -1
};

console.log(shortestSubarray([2, -1, 2], 3));
