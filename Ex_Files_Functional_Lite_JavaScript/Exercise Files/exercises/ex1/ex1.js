
const bar = (x, y) => {
	let z;
	foo(x)
	console.log(z)
	function foo(x) {
		y++;
		z = x * y;
	}
}




bar(20, 5);
bar(20, 5);
bar(20, 5);
bar(20, 5);
// z;		// 120

bar(25, 10);
		// 175
