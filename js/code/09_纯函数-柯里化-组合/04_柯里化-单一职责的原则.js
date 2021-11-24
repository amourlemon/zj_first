// 传递的参数 各有各的职责
function add(x, y, z) {
    return x+2 + y*2 + z*z;
}

var res1 = add(1, 2, 3);
console.log(res1);

function sum(x) {
    x = x + 2;
    return function (y) {
        y = y * 2;
        return function(z) {
            z = z * z;
            return x + y +z;
        }
    }
}

var res2 = sum(1)(2)(3);
console.log(res2);