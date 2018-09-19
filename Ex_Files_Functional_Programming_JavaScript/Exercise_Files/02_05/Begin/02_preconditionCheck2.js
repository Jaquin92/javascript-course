// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 02

// function doIfSafe(n, message, func) {
//   if (n != null && typeof n === 'number') {
//     if (message != null && typeof message === 'string') {
//       return func(n, message)
//     }
//   }
// }
const createSafeFunction = (func) => {
  return (n, message) => {
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message)
      }
    }
  }
}
function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
  console.log(string.charAt(n));
}

function getSubstringOfLength(n, string) {
  console.log(string.substring(0, n));
}

const safePrintMessageNTimes = createSafeFunction(printMessageNTimes);
const safeGetNthLetter = createSafeFunction(getNthLetter);
const safeSubStringLength = createSafeFunction(getSubstringOfLength);

safePrintMessageNTimes(4, "Banana") // prints "Banana Banana Banana Banana"
safeGetNthLetter(2, "Javascript") // 'v'
safeSubStringLength(5, "Hello and welcome") // "Hello"
