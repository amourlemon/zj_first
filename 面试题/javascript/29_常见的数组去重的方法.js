const arr = [1,1,2,3,4,5,6,6,7,8,9,6,4,3,2,1];

//! 利用数组的解构
const res1 = [...new Set(arr)]
console.log(res1)

//! 利用 indexof + filter
function unique(arr) {
    return Array.prototype.filter.call(arr, (item, index) => {
        return arr.indexOf(item) === index;
    })
}

console.log(unique(arr))

//! 利用 indexof + for
// for(let i = 0; i < arr.length; i++) {
//     if(arr.indexOf(arr[i]) !== i) {
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr)

//! 利用两重 for 循环
// for(let i = 0; i < arr.length; i++) {
//     for(let j = i+1; j < arr.length; j++) {
//         if(arr[i] === arr[j]) {
//             arr.splice(j, 1);
//             j--;
//         }
//     }
// }

// console.log(arr)



//! 利用 sort + for
// arr.sort((a,b) => a-b);
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] === arr[i-1]) {
//         arr.splice(i, 1);
//         i--;
//     }
// }

// console.log(arr)