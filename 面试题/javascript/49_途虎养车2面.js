// let Person = function(a){
//     // let _this = this
//     this.a = a
//     this.getPerson = () => {
//         return this
//     }
// }
// Person.prototype.getPerson = function(){
//   return this;
// }

class Person{
    constructor(a) {
        this.a = a
        this.getPerson =  () =>  {
            return this
        }
    }
   
}

let {getPerson} = new Person(12);
console.log(getPerson());

// console.log(1);

// setTimeout(()=>{
//   console.log(2);
// },1000);

// new Promise((resolve,reject)=>{
//   console.log(3);
// }).then(()=>{
//   console.log(6)
// })

// setTimeout(()=>{
//   console.log(4);
// },10);

// console.log(5);


// let link ={
//   val:1,
//   next:{
//     val:2,
//     next:{
//       val:3,
//       next:{
//         val:4,
//         next:null
//       }
//     }
//   }
// };
// // 2143

// let pre = {val:0, next: link};
// let curr = link;
// let next = link.next;
// while(curr) {
//   pre.next = next;
//   next.next = curr;
//   pre = next;
//   curr = next.next;
// }

// console.log(pre.next)