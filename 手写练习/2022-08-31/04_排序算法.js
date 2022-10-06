const arr = [2,1,4,6,23,-2,0,5,6,-5,42,7];

// function sort(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length - 1; j++) {
//             const temp = arr[j];
//             if(arr[j+1] < temp) {
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
// }

// sort(arr)
// console.log(arr);

// function partition2(arr, low, high) {
//     let pivot = arr[low];
//     while (low < high) {
//       while (low < high && arr[high] > pivot) {
//         --high;
//       }
//       arr[low] = arr[high];
//       while (low < high && arr[low] <= pivot) {
//         ++low;
//       }
//       arr[high] = arr[low];
//     }
//     arr[low] = pivot;
//     return low;
//   }
  
//   function quickSort2(arr, low, high) {
//     if (low < high) {
//       let pivot = partition2(arr, low, high);
//       quickSort2(arr, low, pivot - 1);
//       quickSort2(arr, pivot + 1, high);
//     }
//     return arr;
//   }

//   console.log(quickSort2(arr, 0, arr.length-1));

//   console.log(arr);

function getPrivot(arr, low, high) {
    let pivot = arr[low];
    while(low < high) {
        while(low < high && arr[high] > pivot) {
            --high;
        }
        arr[low] = arr[high];
        while(low < high && arr[low] <= pivot) {
            ++low;
        }
        arr[high] = arr[low];
    }
    arr[low] = pivot;
    return low;
}

function quickSort(arr, low, high) {
    if(low < high) {
        let pivot = getPrivot(arr, low, high);
        quickSort(arr, low, pivot -1);
        quickSort(arr, pivot + 1, high);
    }
}

quickSort(arr, 0, arr.length -1)

console.log(arr);

let str = 'sds/u200dd'
console.log(str);

// function getArea(arr = [[]], n, m) {
//     let total = -999;
//     for(let i = 0; i < n; i++) {
//       for(let j = 0; j < m; j++) {
//         let start = 1;
//         while(i+start < n && j +start < m) {
//           let flag = true;
//           let temp = 0; 
//           let k = i;
//           let m2 = j;
//           for(;k <  i + start; k++) {
//             for(;m2 < j+start; m2++) {
//               if(arr[k][m2] < 0) {
//                 flag = false;
//               }
//               temp += arr[k][m2];
//             }
//             m2 = j;
//           }
//           if(k == i + start && flag) {
//             total = Math.max(total, temp);
//           }
//           start++
//         }
//       }
//     }
//     console.log(total)
//   }

  



//   const arr =[[3, 0, 5, 6,],[0, 9, -1, 4], [-1, 8, 1, 1], [4, -1, 5, -1]] 
//   getArea(arr, 4,4)