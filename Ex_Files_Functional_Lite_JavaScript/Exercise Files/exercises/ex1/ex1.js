
const bar = (x, y) => {
	let z;
	foo(x)
	console.log([y, z])
	function foo(x) {
		y++;
		z = x * y;
	}
}


var y = 5, z;

bar(20, 5);
bar(20, 5);
bar(20, 5);
bar(20, 5);
// z;		// 120

bar(25, 10);
z;		// 175
