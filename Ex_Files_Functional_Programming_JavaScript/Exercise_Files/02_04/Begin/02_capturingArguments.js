// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 02

function createCounter(count) {
  return {
    increment: function () {
      count = count + 1
    },

    currentValue: function () {
      return count
    }
  }
};

const myCounterStartsat5 = createCounter(17);

myCounterStartsat5.increment();
myCounterStartsat5.increment();
myCounterStartsat5.increment();
console.log(myCounterStartsat5.currentValue());
