function foo(m, n, x) {
 console.log(m, n, x, '=======');
}

foo`Hello World` // [ 'Hello World' ] undefined undefined =======

const age = 12;
// 会将其分割存放在一个数组当中
foo`Hell${age}o wor${age}ld`; //[ 'Hell', 'o wor', 'ld' ] 12 12 =======

