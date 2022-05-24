// 自己实现 call 方法
// Function.prototype.functionName 表示 该文件的下的方法 都可以调用这个 functionName
Function.prototype.zjcall = function (thisArg, ...argArray) {
  // 1. 获取到要执行的函数
  var fn = this;
  // this() 返回全局对象,在绑定的函数中是  window
  // console.log(this());  打印出来是  undefined

  // 2. 处理绑定的 thisArg
  // 转成对象的格式 是因为 数字类型不可以 加 .
  // thisArg = thisArg ? Object(thisArg) : {};
  thisArg = Object(thisArg) || {};

  // 3. 执行函数
  thisArg.fn = fn;
  var res;
  if (!argArray) {
    // 如果使用 this() ,那么在进行函数的显示绑定时 绑定的不再是特定的绑定数据，而是  globalObject
    res = thisArg.fn;
    res = fn();
  } else {
    // arr = [3,4,5,6]
    // fn(...arr) 
    res = thisArg.fn(...argArray);
  }

  // console.log('Hello,prototype');
  delete thisArg.fn;

  return res;
}


function foo() {
  console.log(this);
}

function sum(num1, num2) {
  return num1 + num2;
}

foo.zjcall('fsd');


var sum = sum.zjcall('abc', 12, 23);
console.log(sum);