function fibonacci(num) {

	let a = 0;
	let b = 1;

	if (num == 1) {
		return 0;
	}
	if (num < 2) {
		return n;
	}

	for (let i = 2; i < num; i++) {
		let temp = b;
		b = a + b;
		a = temp;
	}

	return b;
}

module.exports = fibonacci;
