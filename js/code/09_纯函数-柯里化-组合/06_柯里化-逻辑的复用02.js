function log(date, type, message) {
    console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}:${message}]`);
}

var nowDate = new Date();

log(nowDate, 'DEBUG', '轮播图播放问题1');
log(nowDate, 'DEBUG', '轮播图播放问题2');

function log2(date) {
    return function(type) {
        return function(message) {
            console.log(`[${date.getHours()}:${date.getMinutes()}] [${type}:${message}]`);
        }
    }
}


var timeLog = log2(nowDate);
timeLog('UPDATE')('新闻更新');