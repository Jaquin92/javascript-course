function foo(num1,num2) {
    return ()=>num1+num2
 }

var x = foo(3,4);

console.log(x());	// 7
x();	// 7
console.log(x());
console.log(x());
console.log(x());
