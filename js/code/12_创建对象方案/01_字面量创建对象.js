var p1 = {
    name: 'zs',
    age: 23,
    address: 'yt',
    eating: function() {
        console.log(this.name + '正在吃饭');
    }
}
var p2 = {
    name: 'ls',
    age: 23,
    address: 'bj',
    eating: function() {
        console.log(this.name + '正在吃饭');
    }
}
var p3 = {
    name: 'ww',
    age: 23,
    address: 'cq',
    eating: function() {
        console.log(this.name + '正在吃饭');
    }
}

console.log(p1, p2, p3);
