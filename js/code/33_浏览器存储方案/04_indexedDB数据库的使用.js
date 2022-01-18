import {
    User
} from "./User.js";

// 打开 indexedDB 数据库，如果没有数据库的话，会创建一个新的数据库
const dbRequest = indexedDB.open('amour'); // 后面还可以继续添加参数 1 表示版本号
// 数据库打开失败的回调函数
dbRequest.onerror = (err) => {
    console.log('打开数据库失败');
}

let db = null;
// 数据库打开成功的回调函数
dbRequest.onsuccess = (event) => {
    console.log('数据库打开成功');
    db = event.target.result;
}

// 第一次打开/或者版本发生更新时的回调函数
dbRequest.onupgradeneeded = (event) => {
    const db = event.target.result;
    // 创建一些存储对象
    db.createObjectStore('users', {
        keyPath: 'id'
    }); // keyPath 设置主键

}



const btns = document.querySelectorAll("button");

// switch 中的 case 没有单独的作用域

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = () => {
        const transaction = db.transaction(['users'], 'readwrite'); // 第一个参数可以是个数组， 处理多个表结构的数据
        const store = transaction.objectStore('users')
        switch (i) {
            case 0: {
                console.log('点击了增加');
                store.add(new User(100, '张三', 12));
                store.add(new User(101, '李四', 13));
                store.add(new User(102, '王五', 15));
                break;
            }
            case 1: {
                console.log('点击了查询');
                // 查询方式一： 根据主键进行查询
                // const request = store.get(102);
                // request.onsuccess = (event) => {
                //     console.log(event.target.result);
                // }

                // 查询方式二： 
                const request = store.openCursor();
                request.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        console.log(cursor);
                        cursor.continue();
                    } else {
                        console.log('查询完成');
                    }
                }
                break;
            }
            case 2: {
                console.log('点击了修改');
                const updateRequest = store.openCursor();
                updateRequest.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        if (cursor.key === 102) {
                            // cursor.value.name = '赵六';
                            const value = cursor.value;
                            console.log(value.name);
                            value.name = '赵六'
                            console.log(value.name);
                        } else {
                            cursor.continue();
                        }
                    }
                }
                break;
            }
            case 3: {
                console.log('点击了删除');
                const deleteRequest = store.openCursor();
                deleteRequest.onsuccess = (event) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        if (cursor.key === 101) {
                            cursor.delete();
                        } else {
                            cursor.continue();
                        }
                    }
                }
                break;
            }
        }
    }
}