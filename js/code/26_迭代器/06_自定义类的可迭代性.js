// 总结： 一个迭代器除了拥有 next 属性以外，还有 return 属性，并且 return 属性可以监听 迭代器的终止，并返回一个对象

class Group {
    constructor(name, crews) {
        this.name = name;
        this.crews = crews || [];
    }
    entry(crew) {
            this.crews.push(crew);
        }
        [Symbol.iterator]() {
            let index = 0;
            return {
                next: () => {
                    if (index < this.crews.length) {
                        return {
                            done: false,
                            value: this.crews[index++]
                        }
                    } else {
                        return {
                            done: true,
                            value: undefined
                        }
                    }
                },
                return: () => {
                    console.log('迭代器提前终止了');
                    return {
                        done: true,
                        value: undefined
                    }
                }
            }
        }
}

const group1 = new Group('第一组', ['zs', 'ls']);
for (const crew of group1) {
    console.log(crew);
}

const group2 = new Group('第二组', ['张三', '李四']);
for (const crew of group2) {
    console.log(crew);
    if (crew === '张三') break; // 迭代器提前终止了
}