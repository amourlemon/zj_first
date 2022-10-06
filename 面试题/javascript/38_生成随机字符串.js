const random = (n) =>
  Math.random()
    .toString(36)
    .slice(2, 2 + n);



console.log(random(4))
