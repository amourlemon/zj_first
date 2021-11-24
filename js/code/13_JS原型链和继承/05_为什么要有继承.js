function Student(name, age, snu) {
    this.name = name;
    this.age = age;
    this.snu = snu;
}

function Teacher(name, age, tnu) {
    this.name = name;
    this.age = age;
    this.tnu = tnu;
}

// age  name  代码存在重复 
// 可以使用继承 将多余的代码删减