// Storage 中的 localStorage 和 sessionStorage 共用一套方法
//  这里全部以 localStotage 为例


// storage.setItem(key, value) 存值
localStorage.setItem('name', '张三');
localStorage.setItem('age', '12');

// storage.key(i)  获取 storage 第 i 个 key
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}

// storage.getItem(key)  根据 key 获取 value
console.log(localStorage.getItem('name'));

// storage.removeItem(key)  根据 key 删除缓存
localStorage.removeItem('name');

// storage.clear()  清空存储storage中的所有键名
localStorage.clear();