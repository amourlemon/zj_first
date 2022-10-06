// let str = '1660653659557 yyyy    MM    dd -HH:mm:ss'.split(' ');
let str = '1660653659557 yyyy yyyy yyyy'.split(' ')
const stamp = str[0];
str.shift();
let format = str.join(' ');

let date = new Date(+stamp)
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const sec = date.getSeconds();

while(format.includes('yyyy') || format.includes('MM') || format.includes('dd') || format.includes('HH') ||
format.includes('mm') || format.includes('ss')) {
    format = format.replace(/yyyy/, year).replace(/MM/, month).replace(/dd/, day).replace(/HH/, hours)
    .replace(/mm/,minutes).replace(/ss/, sec)
}
console.log(format);

// 计算大数

let a = 999, b = 1;
a += '';
b += '';

let cur = 0;

  while (cur < a.length || cur < b.length) {
    if (!a[cur]) {
      a = "0" + a;
    } else if (!b[cur]) {
      b = "0" + b;
    }
    cur++;
}
let carry = 0, res = '';
for(let i = cur - 1; i > -1; i--) {
    const sum = +a[i] + (+b[i]) + carry;
    carry = 0;
    if(sum < 10) {
        res  = sum + res;
    } else {
        carry = 1;
        res = sum % 10 + res
    }
}
if(carry) res = carry + res

console.log(res);


Promise.prototype._all = function(promises=[]) {
  return new Promise((resolve, reject) => {
    const values = [];
    promises.forEach(promise => {
      promise.then(res => {
        values.push(res);
        if(values.length === promises.length) {
          resolve(values)
        }
      }).catch(err => {
        reject(err)
      })
    });
  })
}