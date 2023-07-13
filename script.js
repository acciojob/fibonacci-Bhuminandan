function fibonacci(num) {

	let a = 0;
	let b = 1;

	for (let i = 2; i < num; i++) {
		let temp = b;
		b = a + b;
		a = temp;
	}

	return b;
}

module.exports = fibonacci;
