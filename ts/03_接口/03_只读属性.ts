interface Point {
    readonly x: number;
    readonly y: number;
}

// 通过赋值一个对象字面量来构造一个Point。赋值后， x 和 y 再也不能发生改变了
let p1: Point = { x: 2, y: 3 };

// TypeScript 具有readOnlyArray<T>类型，它与Array<T>相似，只是把所有可变的方法去掉了，因此可以确保数组创建后再也不能被修改
let a: number[] = [23, 4, 5, 6];
let ro: ReadonlyArray<number> = a;
// ro 中的值不可以被改变了

// readonly 和 const 的区别： 最主要的区分是： readonly 用在属性当中， const 用在变量当中
