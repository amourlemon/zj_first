 /**
  * @description 时间格式化
  * @param {String} 需要格式化的时间
  * @param {String}  格式化的后的时间样式
  * @return void    
  */

  function formatDate(time, format = 'YY-MM-DD hh:mm:ss 星期w') {
    let date = new Date(time);
    const dayArr = ['日','一', '二', '三', '四', '五', '六']
    let year = date.getFullYear(),
      month = date.getMonth() + 1, //月份是从0开始的
      day = date.getDate(),
      hour = date.getHours(),
      min = date.getMinutes(),
      sec = date.getSeconds(),
      day2 = date.getDay()
    let preArr = Array.apply(null, Array(10)).map(function (elem, index) {
      return '0' + index;
    }); //开个长度为10的数组 格式为 ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"]
 
    let newTime = format.replace(/YY/g, year)
      .replace(/MM/g, preArr[month] || month)
      .replace(/M/g, month)
      .replace(/DD/g, preArr[day] || day)
      .replace(/D/g, day)
      .replace(/hh/g, preArr[hour] || hour)
      .replace(/h/g, hour)
      .replace(/mm/g, preArr[min] || min)
      .replace(/m/g, min)
      .replace(/ss/g, preArr[sec] || sec)
      .replace(/s/g, sec)
      .replace(/w/g, dayArr[day2])
 
    return newTime;
  }
 
  let time = formatDate(new Date(),format = 'YY-M-DD hh:mm:ss 星期w')

  console.log(time )



var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    let j = 0;
    let maxLen = 0;
    for(let i = 0; i < s.length; i++) {
        while(set.has(s[i])) {
            set.delete(s[j])
            j++
        }
        set.add(s[i])
        maxLen = Math.max(maxLen, set.size)
    }
    return maxLen
};
