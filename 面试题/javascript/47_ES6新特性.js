// function test(str1, str2) {
//     if(str1 === str2) return true;
//     if(str1.length >= str2.length) return false;
//     // for(let i = 0; i < str1.length; i++) {
//     //   if(str1[i] !== str2[i]) return false
//     // }
//     for(let i = 0; i < str2.length; i++ ) {
//       if(str2[i] !== str1[i]) {
//         if(str2[i] !== str1[i-1]) return false
//         str1 = str1.substring(0, i) + str1[i-1] + str1.substring(i);
//         i--
//       }
//     }
//     return true;
//   }

// console.log(  test('hello', 'heello'));

// console.log('1 2 3 4 6 5 7 9 8')