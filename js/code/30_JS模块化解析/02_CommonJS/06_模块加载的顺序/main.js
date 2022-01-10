console.log('main');
require('./components/aaa.js')
require('./components/bbb.js')


// 图结构在遍历的过程中，有深度优先搜索（DFS, depth first search）和广度优先搜索（BFS, breadth first search）；
// main
// aaa
// ccc
// ddd
// eee
// bbb
// 显然 require 执行顺序是 深度优先搜素