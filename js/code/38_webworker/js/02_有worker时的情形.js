const startTime = new Date().getTime();
let endTime = startTime;
while(endTime - startTime <= 5000) {
    endTime = new Date().getTime()
    
}
console.log('5秒结束了')
// 注意： 在 worker.js 中， 不可以使用 dom
onmessage = function(event) {
    console.log(event)
}   