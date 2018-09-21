// Learning Functional Programming with Javascript
// Chapter 04, Video 02, Exercise 02
let x = 0;

console.log(`x is equal to: ${x}`);

setTimeout(() => {
    x = 5
    console.log(`x is equal to: ${x}`);
    setTimeout(() => {
        x = 10
        console.log(`x is equal to: ${x}`)
    }, 3000)
}, 3000);

console.log(`after set timeout x is equal to: ${x}`);