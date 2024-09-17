function wordCount(string) {
  let wordCounts = {};
  string.split(' ').forEach(word => {
    if (wordCounts[word]) {
      wordCounts[word] += 1;
    } else {
      wordCounts[word] = 1;
    }
  });

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }