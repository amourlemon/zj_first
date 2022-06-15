function newInterval(callbackFunc, millionSeconds) {
    function inside() {
        callbackFunc()
        setTimeout(inside, millionSeconds)
    }
    setTimeout(inside, millionSeconds)
}

function printInfo() {
    console.log(new Date().toLocaleString());
}
console.log('start'+new Date().toLocaleString());
setInterval(() => {
    let a = 1;
    for(let i = 0; i <9999999; i++) {
       let slogon = 'hello'
       let b = a++
       b += slogon

    }
    console.log(new Date().toLocaleString());
},1000)
// newInterval(() => {
//     console.log(new Date().toLocaleString());
//     // for(let i = 0; i <10000; i++) {
//     //     printInfo()
//     // }
// },1000)
console.log('end'+new Date().toLocaleString());
