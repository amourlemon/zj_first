let a = 10,
  b = 2,
  c = 0,
  d;
try {

} catch (e) {
  a = a / b;
} finally {
  c = a / b;
}
console.log(a, b, c, d);