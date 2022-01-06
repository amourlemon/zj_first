class DITError {
    constructor(errorCode, errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

function foo(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        // 1. 处理方法一
        // return '传入格式错误';
        // 2. 处理方法二
        // throw '传入格式错误';
        // 3. 对方式二进行更详细的封装
        // throw new DITError('101', '类型错误')
        // 4. 抛出错误
        throw new Error('类型错误');
    }
}


// console.log(foo());
// 利用 return 进行处理时，后续代码可以继续执行
// 利用 throw 进行处理时，后续代码不会执行
foo();
console.log('后续代码');