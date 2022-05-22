// 1. boolean
var isDone = false;
// 2. 数字 number
var num = 2;
// 3. 字符串 String
var firstName = 'zahngsan';
// 4. 枚举 enum, 从位置 0 开始编号，但是可以手动确认标号的位置，并且也可以全部进行手动编号
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["White"] = 2] = "White";
    Color[Color["Black"] = 3] = "Black";
})(Color || (Color = {}));
;
var c = Color.Red;
console.log(c);
console.log(Color[2]);
// 5. 数组
// 6. 元组 Tuple
// 7. Any
// 8. Void
// 9. null undefined
// 10. never
// 11. Object
// 12. 类型断言
