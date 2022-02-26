const beautifulDays = (i, j, k) => {
    // Write your code here
    let beautifulDays = 0;

    for (let a = i; a <= j; a++) {
        const numberString = a.toString();
        const stringArray = numberString.split('');
        const reverse = stringArray.reverse();
        const addString = reverse.join('');
        const reverseNumber = parseInt(addString);

        if ((a - reverseNumber) % k === 0) {
            beautifulDays++;
        }
    }
    return beautifulDays;
}
console.log(beautifulDays(20, 23, 6));