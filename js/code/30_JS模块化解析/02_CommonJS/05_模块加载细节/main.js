// 结论一： 被引入的js文件，在引入时会将文件中的代码执行
// 结论二： 同一文件被多次引入时，只会执行一次 js 文件中的内容（相当于缓存在了main文件中）

console.log('main中的代码执行开始');
const foo = require('./foo.js');
require('./foo.js');
console.log('main中的代码执行结束');