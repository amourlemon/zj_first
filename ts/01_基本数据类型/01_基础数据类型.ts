// 1. boolean
let isDone: boolean = false;
// 2. 数字 number
let num: number = 2;
// 3. 字符串 String
let firstName: string = 'zahngsan';
// 4. 枚举 enum, 从位置 0 开始编号，但是可以手动确认标号的位置，并且也可以全部进行手动编号
enum Color { Red = 1, White, Black };
let c: Color = Color.Red;
console.log(c); // 1
console.log(Color[2]); // 'white'
// 5. 数组 数组的定义有两种
let arr1: number[] = [1, 2, 3];
let arr2: Array<number> = [1, 23, 4];
// 6. 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
let tuple: [string, number] = ['abc', 10];
console.log(tuple[0].split('')); // string 中有这个方法，所以可以这样使用，但是 tuple[1] 则不可以实现
// tuple[2] = 'sss';  在官方文档中，当元组的越界元素出现时，会使用联合类型代替，但是这里出现红线警告
// 7. Any Any类型的数据可以更改类型
let notsure: any = 4;
notsure = 'Hello'
// 8. Void void 表示没有类型，通常用在没有返回值的函数中
function foo(): void {
    console.log('Hello');
}
// 9. null undefined null的类型为 null， undefined 的类型为 undefined，
let undefinedThing: undefined = undefined;
let nullThing: null = null;
// 10. never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
// 11. Object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function create(o: object | null): void
create(null);
create({ prop: 'sssss' })

// 12. 类型断言
// 写法一：
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 写法二：
let tempValue: any = 'this is a string';
let temLength: number = (someValue as string).length;