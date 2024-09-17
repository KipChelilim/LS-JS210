function repeatedCharacters(string) {
  let counts = {};

  for (let index = 0; index < string.length; index += 1) {
    let char = string[index].toLowerCase();

    if (string.toLowerCase().lastIndexOf(char) !== index) {
      counts[char] ??= 1;
      counts[char] += 1;
    }
  }

  return counts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }