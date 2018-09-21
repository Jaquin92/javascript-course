// Learning Functional Programming with Javascript
// Chapter 05, Video 03, Exercise 01

function loop(i) {
    if (i > 5) {
        return null;
    }
    console.log(i)
    loop(i += 1)
}

loop(3);
