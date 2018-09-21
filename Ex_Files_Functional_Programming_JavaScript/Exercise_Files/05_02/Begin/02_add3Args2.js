// Learning Functional Programming with Javascript
// Chapter 05, Video 02, Exercise 02

function add(x, y, z) {
  return x + y + z
}

function partiallyApply(func, x, y) {
  return function (z) {
    return func(x, y, z)
  }
}

var add5and5 = partiallyApply(add, 5, 5)

console.log(add5and5(3))
console.log(add(5, 5, 3))
