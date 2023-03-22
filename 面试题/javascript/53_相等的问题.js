let flag1 = null || undefined
console.log(null == undefined);
console.log(flag1);

let flag2 = null && undefined
console.log(flag2);

function getPivot(arr, low, high) {
    let pivot = arr[low]
    while (low < high) {
        while (low < high && arr[high] > pivot) {
            high--
        }
        arr[low] = arr[high]
        while (low < high && arr[low] <= pivot) {
            low++
        }
        arr[high] = arr[low]
    }
    arr[low] = pivot
    return low
}

function quickSort(arr, low, high) {
    if (low < high) {
        let pivot = getPivot(arr, low, high)
        quickSort(arr, low, pivot - 1)
        quickSort(arr, pivot + 1, high)
    }
    return arr
}
const arr = [11, 4, 5, 63, 2, 5, 2, 1, -1, 5, 73, -4, 2, 0]
console.log(quickSort(arr, 0, arr.length - 1));


const arr1 = [];
for (let i = 1; i < 21; i++) {
    arr1.push(i)
}

const arr2 = [0.8376, 0.7631, 0.6128, 0.4233, 0.3827, 0.3695, 0.3573, 0.3574, 0.3560, 0.3543, 0.3587, 0.3591, 0.3540, 0.3531, 0.3527,
    0.3589, 0.3521, 0.3520, 0.3517, 0.3508]
arr2.forEach((item, index) => {
    arr2[index] = item + 0.2
});

console.log(arr2);

console.log(arr1);