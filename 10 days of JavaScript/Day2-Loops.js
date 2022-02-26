const array = "javascriptloops";
const vowels = "aeiou";
let consonants = "";
for (let i = 0; i < array.length; i++) {
  if (vowels.includes(array[i])) {
    console.log(array[i]);
  } else {
    consonants += array[i] + "\n";
  }
}

console.log(consonants);
