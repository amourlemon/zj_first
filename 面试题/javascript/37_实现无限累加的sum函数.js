let index = 0;
// function sum(...args) {
//     const f = (...rest) => sum(...args, ...rest);
//     f.valueOf = () => args.reduce((x, y) => x + y, 0);
//     console.log(f.arguments.length);
//     return f;
//   }
function sum(...args) {
      function f(...rest) {
        return sum(...args, ...rest);
      } 
      f.valueOf = () => args.reduce((x, y) => x + y, 0);
      return f;
    }
  // console.log(sum(10,12,12,12,12)(3,4,5,6).valueOf());
  console.log(+sum(10,12,12,12,12)(3,4,5,6)());

function argsSum(args){
  return args.reduce((pre, cur) => {
      return pre + cur
    })
}
