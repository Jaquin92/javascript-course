// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01
const _ = require("lodash");

var numbers = [2, 4, 6, 9, 10, 12]

var arrayContainsEven = _.some(numbers, number => number % 2 === 0);

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   if (element % 2 === 0) {
//     arrayContainsEven = true
//   }
// }

var arrayIsAllEven = _.every(numbers, number => number % 2 === 0);

// for (var i = 0; i < numbers.length; i++) {
//   var element = numbers[i]
//   if (!(element % 2 === 0)) {
//     arrayIsAllEven = false
//   }
// }

console.log(arrayContainsEven);
console.log(arrayIsAllEven);
