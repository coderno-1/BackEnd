// //fundamental of javascript
// //array and objects
// //function return
// //async js coding
// //foreach,map,filter,find index0f

// //forEach
// var arr = [1, 2, 3, 4];

// arr.forEach(function (val) {
//   console.log(val + " hello");
// });

// //map
// var arr1 = [1, 2, 3, 4];

// let ans = arr1.map(function (val) {
//   return val *2;
// });
// console.log(ans);

// //filter
// var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ans2 = arr2.filter(function (val) {
//   return val % 2 == 0;
// });
// console.log(ans2);

// //find
// //any one element
// var arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let ans3 = arr3.find(function (val) {
//   return val > 5;
// });
// console.log(ans3);

// //find index
// var arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let ans4 = arr4.findIndex(function (val) {
//   return val == 5;
// });
// console.log(ans4);

// //object

// let obj = {
//   name: "harshit",
//   age: 22,

// };
// obj.age = 25;
// Object.freeze(obj);   //it will not allow to change the object
// obj.age = 30;  //it will not change the age

// console.log(obj.name);
// console.log(obj["age"]);



//Async js coding



async function abcd() {
  var blob = await fetch('https://randomuser.me/api/');
  var res = await blob.json();

  console.log(res.results[0].name);
}


abcd();
