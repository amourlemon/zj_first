// 1. 替代 创建构造器函数
function* createArrIterator(arr) {
    // a. 使用 yield* 后面跟着一个 可迭代对象 
    yield* arr;
    // b. 使用 yield 传递
    // for( const item of arr ) {
    //     yield item;
    // }


    // return {
    //     next: () => {
    //         if (index < arr.length) {
    //             return {
    //                 done: false,
    //                 value: arr[index]
    //             }
    //         } else {
    //             return {
    //                 done: false,
    //                 value: undefined
    //             }
    //         }
    //     }
    // }
}

const names = ['zs', 'ls', 'ww']
const iterator = createArrIterator(names);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

console.log('==================================');
// 2. 替代产生范围内的迭代器
function* createScopeIterator(start, end) {
    let index = start;
    while (index < end) {
        yield index++;
    }
}

const scopeIterator = createScopeIterator(3, 6);
console.log(scopeIterator.next());
console.log(scopeIterator.next());
console.log(scopeIterator.next());
console.log(scopeIterator.next());
console.log(scopeIterator.next());


console.log('----------------------------------------------------');
// 3. 替代自定义类

class Group {
    constructor(name, crews) {
        this.name = name;
        this.crews = crews || [];
    }
    entry(crew) {
        this.crews.push(crew);
    }
    // [Symbol.iterator]() {
    //     let index = 0;
    //     return {
    //         next: () => {
    //             if (index < this.crews.length) {
    //                 return {
    //                     done: false,
    //                     value: this.crews[index++]
    //                 }
    //             } else {
    //                 return {
    //                     done: true,
    //                     value: undefined
    //                 }
    //             }
    //         },
    //         return: () => {
    //             console.log('迭代器提前终止了');
    //             return {
    //                 done: true,
    //                 value: undefined
    //             }
    //         }
    //     }
    // }

    *[Symbol.iterator]() {
        yield* this.crews;
    }
}

const group1 = new Group('第一组', ['zs', 'ls']);
for (const crew of group1) {
    console.log(crew);
}