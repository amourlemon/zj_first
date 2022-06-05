function increase(a) {

    //? 给形参重新赋值，是不会影响外面变量的
    //? 但是如果是给形参的属性复制，就会影响，实际上，形参相当于对外面的参数进行浅拷贝
    a++;
}

var a = 1;
increase(a)
increase(a)
console.log(a);