const findDigits = n => {
	let divisors = 0;

	const digits = n
		.toString()
		.split("")
		.map(t => parseInt(t, 10));
	for (let i = 0; i < digits.length; i++) {
		if (n % digits[i] === 0) {
			divisors++;
		}
	}
	return divisors;
};

console.log(findDigits(1012));
