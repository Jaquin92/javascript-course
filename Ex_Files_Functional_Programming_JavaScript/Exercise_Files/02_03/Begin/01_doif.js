// Learning Functional Programming with Javascript
// Chapter 02, Video 03, Exercise 01

const x = "Bananas";

const doIf = (condition, cb) => {
  if (condition) {
    cb();
  }
};

doIf((x === 1), () => console.log("x is equal to 1"));
doIf((x === "Bananas"), () => console.log("x is equal to bananas"));
doIf((x < 10 && x > 0), () => console.log("x is between 0 and 10"));
