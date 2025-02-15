/** 
如果在执行JavaScript代码的过程中，有异步操作呢？
中间我们插入了一个setTimeout的函数调用；
这个函数被放到入调用栈中，执行会立即结束，并不会阻塞后续代码的执行；

那么，传入的一个函数（比如我们称之为timer函数），会在什么时候被执行呢？
事实上，setTimeout是调用了web api，在合适的时机，会将timer函数加入到一个事件队列中；
事件队列中的函数，会被放入到调用栈中，在调用栈中被执行；
*/