const arr = [2,1,4,6,23,-2,0,5,6,-5,42,7];

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

// quickSort(arr, 0, arr.length -1)

// console.log(arr);


// 归并排序： 主要思想 分治法
function merge(left=[], right=[]) {
    const result = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    while(left.length) {
        result.push(left.shift())
    }
    while(right.length) {
        result.push(right.shift())
    }
    return result;
}


function mergeSort(arr=[]) {
    if(arr.length < 2) return arr;
    const len = arr.length;
    const middle = Math.floor(len / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort(arr));


  



//   const arr =[[3, 0, 5, 6,],[0, 9, -1, 4], [-1, 8, 1, 1], [4, -1, 5, -1]] 
//   getArea(arr, 4,4)