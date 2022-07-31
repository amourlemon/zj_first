let a = 3;
let b = 5;

// 临时变量法
let c = a;
a = b;
b = c
console.log(a, b);


// 加减法
 a = 3;
 b = 5;

 a = a+b;
 b = a - b;
 a = a - b;
 console.log(a, b)

 // 数组解构法
 a = 3;
 b = 5;

 a = [a, b];
 b = a[0];
 a = a[1];
 console.log(a, b)


  // 数组运算法
  a = 3;
  b = 5;

  a = [b, b=a][0]
  console.log(a, b);

  // 抑或法
  a = 3;
  b = 5;

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  console.log(a, b);

  
  // 对象解构
  a = 3;
  b = 5;

a = {a:b, b:a}
b = a.b
a = a.a;



console.log(a, b)


const nums = [1,2,3,4];
let left = 1, right = 2

nums[left] = nums[left] ^ nums[right];
nums[right] = nums[left] ^ nums[right];
nums[left] = nums[left] ^ nums[right];
console.log(nums)