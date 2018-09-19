// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

// const myCounter = {
//   count: 0,
//   increment: function() {
//     this.count += 1
//   },
//   currentValue: function() {
//     return this.count
//   }
// }

const createCounter = (count = 0) => {
  return {
    increment: () => count++,
    currentValue: () => count
  }
};
const myCounter = createCounter();
console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

// myCounter.count = 999 // uh oh!

console.log(myCounter.currentValue())
myCounter.increment()
myCounter.increment()
console.log(myCounter.currentValue())
