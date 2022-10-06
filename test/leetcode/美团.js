// const n = 2
// const m = 1
// const pi = [89,38 ];
// // for(let i = 0; i < n; i++) {
// //   pi[i] = parseInt(read_line());
// // }
// const points = [445, 754];
// // for(let i = 0; i < n; i++){
// //   points[i] = parseInt(read_line());
// // }
// const pairs = [];
// for(let i = 0; i < n; i++) {
//     const pair = {
//         point: points[i], 
//         p: pi[i],
//     }
//     pairs.push(pair)
// }

// pairs.sort((a, b) => b.point - a.point);

// let res = 0;
// for(let i = 0; i < m; i++) {
//     res += pairs[i].point
// }
// for(let i = m; i < n; i++) {
//     res += (pairs[i].point * pairs[i].p)/100
// }
// console.log(res.toFixed(2));

// let str = 'ddrree'
// let count = 0;
// const length = str.length
// for(let i = 1; i < length; i++) {
//     if(str[i] !== 'e' && (str[i] === 'r' || str[i] === 'd') && ((str[i - 1] === 'r' && str[i+1] === 'd') || (str[i - 1] === 'd' && str[i+1] === 'r'))) {
//         count++
//     }
// }
// console.log(count)

// function seqSum( n ) {
//     // write code here
//     let x = 1, y = 2;
//     let sum = 0;
//     for(let i = 0; i < n; i++) {
//         let temp = y;
//         sum += x/y;
//         y += x;
//         x = temp;
//     }
//     return sum.toFixed(2)
// }

// console.log(seqSum(100));
function winMazeGift( maze ) {
    // write code here
    let res = [];
    let minCount = Number.MAX_VALUE;


    function solution(arr, x, y, stepCount, tempArr) {
        if(x < 0 || y < 0 || x >= arr.length || y >= arr.length) {
            if(minCount > stepCount) {
                res = tempArr.slice();
                minCount = stepCount;
            }
            return
        }
        if(arr[x][y] === 1) return
        arr[x][y] = 1;
        tempArr.push([x, y]);
        solution(arr, x + 1, y, stepCount + 1,tempArr);
        solution(arr, x, y + 1, stepCount + 1,tempArr);
        solution(arr, x, y - 1, stepCount + 1,tempArr);
        solution(arr, x - 1, y, stepCount + 1,tempArr);
        tempArr.pop();
    }

    const len = maze.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(maze[i][j] === 8) {
                solution(maze, i, j, 0, []);
                res = res.reverse();
                let rel = [];
                for(let i = 0; i < res.length; i++) {
                    rel.push(`(${res[i][0]},${res[i][1]})`)
                }
                return rel;
            }
        }
    }
}

console.log(winMazeGift([
    [0, 1,1,1],
    [0,0,0,1],
    [1,0,8,1],
    [1,0,1,1]
]));