// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01

const ifSafe = (n, message, func) => {
  if (n != null && typeof n === 'number') {
    if (message != null && typeof message === 'string') {
      return func(n, message)
    }
  }
};

function printMessageNTimes(n, message) {
  for (var i = 0; i < n; i++) { console.log(message) }
};
function getNthLetter(n, string) {
  return string.charAt(n);
};

function getSubstringOfLength(n, string) {
  return string.substring(0, n);
};

ifSafe(4, "Banana", printMessageNTimes) // prints "Banana Banana Banana Banana"
ifSafe(2, "Javascript", getNthLetter) // 'v'
ifSafe(5, "Hello and welcome", getSubstringOfLength) // "Hello"
