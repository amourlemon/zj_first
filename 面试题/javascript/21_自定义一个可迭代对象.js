class IteratorObjG {
    constructor(name, iteratorObj) {
        this.name = name;
        this.iteratorObj = iteratorObj;
    }
    entry(val) {
        iteratorObj.push(val)
    }
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => {
                if(index < this.iteratorObj.length) {
                    return {done: false, value: this.iteratorObj[index++]}
                } else {
                    return {done: true, value: undefined}
                }
            },
            //  break 的时候自动触发
            return: () => {
                console.log('迭代终止');
                return {done: true, value: undefined}
            }
        }

    }
}


const group2 = new IteratorObjG('第二组', ['张三', '李四']);
for (const crew of group2) {
    console.log(crew);
    if (crew === '张三') break; // 迭代器提前终止了
}