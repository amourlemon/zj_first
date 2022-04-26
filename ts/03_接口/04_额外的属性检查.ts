interface AreaConfig {
    color?: string,
    width?: number,
    // [propName:string]: any  方法二： 使用的最多
}

const createSquare = function (areaInfo: AreaConfig): { color: string, area: number } {
    const tempArea = { color: 'red', area: 34 };
    if (areaInfo.color) {
        tempArea.color = areaInfo.color;
    }
    if (areaInfo.width) {
        tempArea.area = areaInfo.width;
    }
    return tempArea
}

// Argument of type '{ colour: string; width: number; }' is not assignable to parameter of type 'AreaConfig'.
// ts 会对字面量对象进行额外的检查， 如果传入的参数的对象中存在着不属于接口 AreaConfig 的属性，就会报错
// const myArea = createSquare({colour: 'red', width: 23})

// 解决方法一： 使用断言
// const myArea = createSquare({colour: 'red', width: 23} as AreaConfig)

// 解决方法二：添加字符串索引签名
// const myArea = createSquare({colour: 'red', width: 23})

// 解决方法三： 定义一个参数对象
let areaOption: { colour: string; width: number } = { colour: 'red', width: 23 };
const myArea = createSquare(areaOption)

