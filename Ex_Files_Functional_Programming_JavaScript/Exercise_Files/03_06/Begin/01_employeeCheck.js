// Learning Functional Programming with Javascript
// Chapter 03, Video 06, Exercise 01
var _ = require("lodash")

var employees = [
  { name: "John", salary: 60000, age: 27, gender: 'M' },
  { name: "Mary", salary: 110000, age: 50, gender: 'F' },
  { name: "Susan", salary: 50000, age: 21, gender: 'F' },
  { name: "Greg", salary: 100000, age: 45, gender: 'M' },
  { name: "Jerry", salary: 90000, age: 39, gender: 'M' },
  { name: "Barb", salary: 95000, age: 36, gender: 'F' }
]


let males = employees.filter(item => item.gender === 'M');
let maleAges = males.map(item => item.age);
let totalMaleAges = maleAges.reduce((a, b) => a + b);
let maleAverageAge = totalMaleAges / males.length;

let females = employees.filter(item => item.gender === 'F');
let femaleAges = females.map(item => item.age);
let totalFemaleAges = femaleAges.reduce((a, b) => a + b);
let femaleAverageAge = totalFemaleAges / males.length;

console.log(`average male age: ${maleAverageAge}`);
console.log(`average female age: ${femaleAverageAge}`);
