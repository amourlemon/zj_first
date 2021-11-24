
//  存取描述符的  get/set  和 属性描述符的 value 和 writable 不能共存
var obj = {
    _age: 23
}

//  Object.defineProperty 可以对 对象的属性进行修改，并且加上一些配置
Object.defineProperty(obj, 'age', {
    configurable: false, // 数据属性描述符  默认值是 false 作用： 数据是否可以删除，是否可以修改属性的特性或者是是否能将他变为存取属性描述符 
    enumerable: 'true',  // 是否能够遍历，默认值 false
    // value: 12, //属性的值 默认值是 undefined
    // writable: true
    get(){
        return this._age;
    },
    set(newValue) {
        this._age = newValue;
    }

})
obj.age = 18;
console.log(obj);
// console.log(obj.age);