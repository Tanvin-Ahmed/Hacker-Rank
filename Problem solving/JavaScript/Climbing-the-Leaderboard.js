let ranked = [100, 90, 90, 80, 75, 60];
const score = [50, 65, 77, 90, 102];

const binarySearch = (arr, X) => {
	let start = 0;
	let end = arr.length - 1;

	while (start <= end) {
		let mid = Math.floor((start + end) / 2);

		if (X === arr[mid]) return mid;
		else if (arr[mid] < X && X < arr[mid - 1]) return mid;
		else if (arr[mid] > X && X >= arr[mid + 1]) return mid + 1;
		else if (X < arr[mid]) start = mid + 1;
		else if (X > arr[mid]) end = mid - 1;
	}
	return -1;
};

const handleScore = (ranked, player) => {
	const result = [];
	const rank = [];

	rank[0] = 1;

	for (let i = 1; i < ranked.length; i++) {
		if (ranked[i] === ranked[i - 1]) rank[i] = rank[i - 1];
		else rank[i] = rank[i - 1] + 1;
	}

	for (let i = 0; i < player.length; i++) {
		const playerScore = player[i];
		if (playerScore > ranked[0]) result[i] = 1;
		else if (playerScore < ranked[ranked.length - 1])
			result[i] = rank[rank.length - 1] + 1;
		else result[i] = rank[binarySearch(ranked, playerScore)];
	}
	return result;
};

const result = handleScore(ranked, score);
for (let i = 0; i < result.length; i++) {
	console.log(result[i]);
}
