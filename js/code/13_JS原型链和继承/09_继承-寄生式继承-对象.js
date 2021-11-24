var obj = {
    age: '12'
}

function createStudent(name) {
    // 闭包
    var stu =  Object.create(obj)
    stu.name = name;
    return stu;
}

var stu1 = createStudent('zs');
var stu2 = createStudent('ls');