const startTime = new Date().getTime();
let endTime = startTime;
while(endTime - startTime <= 5000) {
    endTime = new Date().getTime()
    
}
console.log('5秒结束了')