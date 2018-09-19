// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 02

let addOrSubtract = (cb, x, y) => console.log(cb(x, y));

addOrSubtract(add, 5, 3);
addOrSubtract(subtract, 100, 99);

function add(x, y) {
  return x + y
}

function subtract(x, y) {
  return x - y
}
