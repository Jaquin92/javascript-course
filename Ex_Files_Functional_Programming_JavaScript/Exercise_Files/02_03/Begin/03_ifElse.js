// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 03
const five = false;
function ifElse(condition, func1, func2) {
  if (condition) {
    func1();
  } else {
    func2();
  }
};
fivePlusFive = () => console.log(5 + 5);
tenTimesTen = () => console.log(10 * 10);

ifElse(five, fivePlusFive, tenTimesTen);
