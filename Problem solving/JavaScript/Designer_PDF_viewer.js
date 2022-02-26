const designerPdfViewer = (h, word) => {
    // Write your code here
    const allLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let letterIndex = [];
    word.split('').map(letter => {
        const charIndex = allLetter.findIndex((letterValue) => letter === letterValue);
        letterIndex.push(charIndex)
    })

    const heightValue = [];

    letterIndex.map(index => {
        const height = h.find((value, hIndex) => {
            if (hIndex === index) {
                return value;
            }
        })
        heightValue.push(height);
    })
    
    const maxHeight = Math.max(...heightValue);

    return maxHeight * word.length;
}

const result = designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], 'zaba');
console.log(result);