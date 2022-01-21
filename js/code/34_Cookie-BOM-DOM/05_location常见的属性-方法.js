console.log(location);

// href: 地址栏中的完整地址
// origin： 从协议到端口号   http://127.0.0.1:5500
// pathName：/js/code/34_Cookie-BOM-DOM/index.html

// 重新加载来自当前 URL的资源。他有一个特殊的可选参数，类型为 Boolean (en-US)，
// 该参数为true时会导致该方法引发的刷新一定会从服务器上加载数据。如果是 false或没有制定这个参数，浏览器可能从缓存当中加载页面。
// location.reload(false) // 重新加载页面

// 加载给定URL的内容资源到这个Location对象所关联的对象上。
// location.assign('shoppingCart');



// 用给定的URL替换掉当前的资源。与 assign() 方法不同的是用 replace()替换的新页面不会被保存在会话的历史 History中，这意味着用户将不能用后退按钮转到该页面。
location.replace('http://www.baidu.com')