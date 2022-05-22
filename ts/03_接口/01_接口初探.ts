// 接口是如何工作的
// function printLable(labelLedObj: { label: string }) {
//     console.log(labelLedObj.label);
// }
// let myObj = { size: 10, label: 'Hello, world' };
// printLable(myObj);

// 接口的使用重写上面的方法

interface labelLedValue {
    label: string;
}
// 相当于代替了 参数对象中传入的键值对
function printLable(labelObj: labelLedValue) {
    console.log(labelObj.label);

}

