
// let n = 5;
// let k = 3;
// let str = 'aBcBa';
// let res = '';
// for(let i = 0; i < n; i++) {
//     if(i < k) {
//         res += str[i].toUpperCase();
//     } else {
//         res += str[i].toLowerCase();
//     }
// }

// console.log(res);

// const n = 3;
// const arr = new Array(n).fill(0).map(() => new Array(n).fill(0));
// if(n % 2 === 1) {
//     let num = 1;
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n ; j++) {
//             arr[i][j] = num++
//         }
//     }
// } else {
//     let num1 = 1, num2 = 2, flag = false;
//     for(let i = 0; i < n; i++) {
//         for(let j = 0; j < n; j++) {
//             if(i % 2 === 0) {
//                 if(j % 2 === 0) {
//                     arr[i][j] = num1;
//                     num1 += 2;
//                 } else {
//                     arr[i][j] = num2;
//                     num2 += 2
//                 }
//             } else {
//                 if(j % 2 !== 0) {
//                     arr[i][j] = num1;
//                     num1 += 2;
//                 } else {
//                     arr[i][j] = num2;
//                     num2 += 2;
//                 }
//             }
//         }
//     }
// }
// console.log(arr);

// for(let i = 0; i < n; i++) {
//     let str = arr[i].join(' ');
//     console.log(str);
// }


const n = 6;
const arr = [1, 1, 4, 5, 1, 4];
// const arr = [1, 1, 2, 2, 3, 3];


const [map1, map2] = [new Map(), new Map()];
for(let i = 0; i < n; i++) {
//     偶数
    if(i % 2 === 0) {
        if(map1.has(arr[i])) {
            let count = map1.get(arr[i]);
            map1.set(arr[i], (count+1))
        } else {
            map1.set(arr[i], 1)
        }
    } else {
//         奇数
        if(map2.has(arr[i])) {
            let count = map2.get(arr[i]);
            map2.set(arr[i], (count+1))
        } else {
            map2.set(arr[i], 1)
        }
    }
}
const arr1 = Array.from(map1);
const arr2 = Array.from(map2);

console.log(arr1, arr2);
// 出现的次数进行排序
arr1.sort((a, b) => b[1] - a[1]);
arr2.sort((a, b) => b[1] - a[1]);



// 表示值
let num1 = arr1[0][0];
// 表示出现的次数
let num2 = arr1[0][1];

// 表示值
let num3 = arr2[0][0];
// 表示出现的次数
let num4 = arr2[0][1];

// 奇数位和偶数位 最多的出现的次数， 表示不用进行编辑的数的个数
let dp = num4 + num2;

// 如果奇数位和偶数位最多出现的数字是相等的
if(num3 === num1) {
    // 取第二多出现的次数
    let temp1 = arr1[1][1];
    let temp2 = arr2[1][1];
    dp = Math.max(temp1 + num4, temp2 + num2)
}

console.log(n - dp);

