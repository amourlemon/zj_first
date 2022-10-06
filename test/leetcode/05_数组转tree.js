var arr = [['a', 'aa', 'aaa', 'aaaa'], ['b','bb', 'bbb'], ['a', 'ab', 'aba'], ['a', 'aa', 'aab']]

function arr2tree(arr = [[]]) {
    const res = [];
    let allArr = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            allArr.push(arr[i][j]);
        }
    }
    allArr = Array.from(new Set(allArr))
    allArr.forEach((item, index) => {
        res.push({name: item, children: [], id: item})
        if(item.length !== 1) {
            res[index].pid = item.slice(0, item.length - 1)
        }
    })
    const [map, trueRes] = [{}, []];
    for(let i = 0; i < res.length; i++) {
        map[res[i].id] = i;
    }
    // console.log(res);
    for(const node of res) {
        if(node.pid && res[map[node.pid]]) {
            res[map[node.pid]].children.push(node)
        } else {
            trueRes.push(node)
        }
    }
    return trueRes
}

console.log(arr2tree(arr));


// async function async1() {
//     console.log('async1 start');
//     await async2();
//     console.log('async1 end');
// }

// async function async2() {
//     console.log('async2');
// }

// console.log('script start');

// setTimeout(function() {
//     console.log('setTimeout');
// }, 0)

// async1();

// new Promise(function(resolve) {
//     console.log('promise');
//     resolve(444)
// }).then(res => {
//     console.log(res);
// })
// console.log('script end');

const arr2 = new Array(4).fill(0).map(() => new Array(4).fill(false))

console.log([1, 2, 3].map(item => item * 2));

const arr3 = [3, 15,8,29, 102];
arr3.sort();
console.log(arr3);

const arr4 = [5,5,5,5,5,5,5];