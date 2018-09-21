// Learning Functional Programming with Javascript
// Chapter 05, Video 02, Exercise 01

function add(x, y, z) {
  return x + y + z
}

function partiallyApply(func, x) {
  return function (y, z) {
    return func(x, y, z)
  }
}

var add5and6 = partiallyApply(add, 5)

console.log(add5and6(2, 2))
