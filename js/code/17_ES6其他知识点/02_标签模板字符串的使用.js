function foo(m, n, x) {
 console.log(m, n, x, '=======');
}

foo`Hello World` // [ 'Hello World' ] undefined =======

const age = 12;

foo`Hell${age}o wor${age}ld`;

