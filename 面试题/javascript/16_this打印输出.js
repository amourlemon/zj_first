const num = {
    a: 10,
    add: function () {
        console.log(this)
      return this.a + 2;
    },
    reduce: () => this.a -2
  };
  console.log(num.add());
  console.log(num.reduce());
