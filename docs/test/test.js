// function print() {
//   console.log(name);
//   var name = "xiaoming";
// }
// print();

// var count = 20;
// var result = addTen(count);
// alert(count); // 20，没有变化
// alert(result); // 30
// function addTen(num) {
//   num += 10;
//   return num;
// }

// function print() {
//   var a = 1;
//   return function() {
//     return ++a;
//   };
// }
// let p = print();
// console.log(p()); // 2
// console.log(p()); // 3
// console.log(p()); // 4

function Person() {}

Person.prototype = {
  constructor: Person,
  name: "sds",
};
var person1 = new Person();
console.log(Object.keys(Person.prototype));

console.log(person1.name);
