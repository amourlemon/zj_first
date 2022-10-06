// const arr1 = read_line().split(' ').map(Number);

// 3 3 2
// 90 90 90
// 80 100 90
// 80 85 85
// const [n, m, id] = [arr1[0], arr1[1], arr1[2]];

// for(let i = 0; i < n; i++) {
//   const arr = read_line().split(' ').map(Number);
//   nums.push(arr);
// }
// const [n, m, id] = [3, 3, 2];
// const nums = [[90, 90, 90], [80, 100, 90], [80, 85, 85]];
// function getnum(arr=[]) {
//   let res = 0;
//   for(let i = 0; i < m; i++) {
//     res += arr[i];
//   }
//   return res;
// }
// const targetNum = getnum(nums[id - 1]);
// console.log(targetNum);
// const numsArr = [];
// for(let i = 0; i < n; i++) {
//   numsArr.push(getnum(nums[i]));
// }
// numsArr.sort((a, b) => b-a);
// console.log(numsArr);
// const startIndex = numsArr.indexOf(targetNum);
// let endIndex = startIndex;
// for(let i = startIndex+1; i < n; i++) {
//     if(numsArr[i] === targetNum) {
//         endIndex++;
//     } else {
//         break;
//     }
// }

// // 判断前面是否还有和他相等的
// let count = 0;
// for(let i = startIndex - 1; i >= 0; i --) {
//     if(getnum(nums[i]) === targetNum) {
//         count++
//     } else {
//         break
//     }
// }
// console.log(endIndex + 1 - count);
// console.log(index + 1 + count)




// const [n, k] = [3, 3];
// const nums = [3, 2,1]

// nums.sort((a, b) => a - b);
// let [left, right, res] = [0, nums.length - 1, 0];
// for(let i = 0; i < n; i++) {
//     let j ;
//     for( j = i + 1; j < n; j++) {
//         if(nums[i] * nums[j] >= k) {
//             res += 2;
//             break;
//         }
//     }
//     if(j < n) {
//         res += (n - j - 1) * 2;
//     }
// }

// console.log(res);

// let a = {
//     num: 1,
//     valueOf: function() {
//         return this.num++
//     }
// }
// console.log(a == 1 && a == 2 && a == 3)

// const arr = [1,2,3];
// // arr.join = arr.shift;
// arr.join = function() {
//     return 1
// }
// console.log(arr.valueOf().toString());

// const A = true, B  = false, C = 1, D = 2, E = 3

// console.log(A?B?C:D:E);


// const arr = [1,2,3,4,5];
// var newArr = arr.splice(1,2,'string')

// console.log(arr);



// let res = 10000;
// const n = 10;
// for(let i = 0; i < n; i++) {
//     res += (res* 10 * 0.1)/10
// }

// console.log(res);



let str = '222BCC111CB';

// for(let i = 0; i < 10; i++) {
    
// }
str = str.replace(/(.)\1{2,}/g, '')
console.log(str);
