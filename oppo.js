// const arr = [1, 2, 3, 4, 5]
// let res = [];
// const path = [];
// const backtrace = (arr, index) => {
//     if (path.length === 3) {
//         res.push([...path]);
//         return
//     }
//     for (let i = index; i < arr.length; i++) {
//         path.push(arr[i]);
//         backtrace(arr, i + 1)
//         path.pop()
//     }
// }
// backtrace(arr, 0)
// res.forEach((el, index) => {
//     res[index] = el.join('')
// })
// res = [...new Set(res)]
// res.forEach((el, index) => {
//     res[index] = el.split('').map(Number)
// })
// console.log(res);
// let num = 0;
// for (let i = 0; i < res.length; i++) {
//     res[i].sort((a, b) => a - b);
//     if (res[i][0] ** 2 + res[i][1] ** 2 === res[i][2]) {
//         num++
//     }
// }
// console.log(num);

// let line = 'simpleHTMLElement';
// const arr = line.split('');
// console.log('A'.charCodeAt(), 'z'.charCodeAt());
// for (let i = 1; i < line.length; i++) {
//     if (arr[i].charCodeAt() < 97) {
//         arr[i] = '_' + arr[i].toLowerCase();
//     }
// }

// console.log(arr.join(''));


// let line = 'Visit our website at https://www.oppo.com/customer to learn more!';
// line = line.replace(/[(0-9)]/g, '');
// const arr = line.split(' ');
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i] >= 'a' && arr[i] <= 'z' || arr[i] >= 'A' && arr[i] <= 'Z') {
//             if (arr[i].indexOf('https:') === -1) {
//                 count++
//                 break
//             }
//         }
//     }
// }

// console.log(count);


// const recall1 = [0.5291, 0.5342, 0.5367, 0.5401, 0.5567, 0.5446, 0.5437, 0.5392, 0.5306, 0.5288]
// const precison1 = [0.4867, 0.4892, 0.4902, 0.4961, 0.5032, 0.4972, 0.4782, 0.4817, 0.4863, 0.4716]


const recall1 = [0.4933, 0.4985, 0.5167, 0.5236, 0.5326, 0.5308, 0.5327, 0.5212, 0.5132, 0.4965]
const precison1 = [0.4867, 0.4882, 0.4902, 0.4932, 0.4962, 0.4868, 0.4803, 0.4798, 0.4762, 0.4701]
recall1.forEach((item, index) => {
    recall1[index] = item + 0.3
})
precison1.forEach((item, index) => {
    precison1[index] = item + 0.3
})
// const recall2 = [0.4689, 0.4725, 0.4892, 0.5136, 0.5428, 0.5722, 0.5561, 0.5412, 0.5132, 0.4813]
// const precison2 = [0.4703, 0.4731, 0.4902, 0.5234, 0.5497, 0.5768, 0.5602, 0.5498, 0.5212, 0.4897]


console.log(recall1)
console.log(precison1)


const precison4 = [0.7118, 0.7297, 0.7316, 0.7502]
const recall4 = [0.7301, 0.7562, 0.7589, 0.8157]

const precison3 = [0.7319, 0.7423, 0.7465, 0.7617]
const recaall3 = [0.7561, 0.7681, 0.7796, 0.8213]
function getF1(recall = [], precison = []) {
    const f1 = [];
    for (let i = 0; i < recall.length; i++) {
        f1.push((2 * recall[i] * precison[i] / (recall[i] + precison[i])).toFixed(3))
    }
    return f1
}

console.log(getF1([0.7481, 0.7761, 0.7983, 0.8313], [0.7298, 0.7651, 0.7665, 0.7817]).map(Number));