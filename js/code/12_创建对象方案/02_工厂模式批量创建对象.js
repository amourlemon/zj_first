function person(name, age, address) {
    var obj = {
        name: name,
        age: age,
        address: address,
        eating: function() {
            console.log(this.name + '正在吃饭');
        }
    }

    return obj;
}

var p1 = person('zs', 12, 'yt');
var p2 = person('ls', 22, 'bj');
var p3 = person('ww', 33, 'cq');

console.log(p1, p2, p3);

// 虽然批量创建对象简单了， 但是不能看出创建的是什么对象