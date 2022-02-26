const permutationEquation = (p = []) => {
	const y = [];

	for (let i = 0; i < p.length; i++) {
		const index = p.indexOf(p.indexOf(i + 1) + 1);
		y.push(index + 1);
	}
	return y;
};

const p = [2, 3, 1];

const result = permutationEquation(p);
console.log(result);
