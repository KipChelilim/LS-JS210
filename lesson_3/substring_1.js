/*
implement a slice method that specifies a starting index and length
string
index edge cases
  negative starts should select by counting from end
  outside of range ? not specified
    assume empty string based on other examples
length edge cases
  positive outside of range, use available
  negative empty string
  zero empty string

algorithm
  initialize result
  determine ending index
  determine starting index
  iterate through string starting with start so long as start <= ending index
    add character to result

*/

function substr(string, start, length) {
  let result = '';

  if (length < 1 || (Math.abs(start) > string.length)) {
    return result;
  }

  startIndex = start < 0 ? (string.length + start) : start
  stopIndex = Math.min(startIndex + length, string.length)

  for (let index = startIndex; index < stopIndex; index += 1) {
    result += string[index]
  }

  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""
console.log(substr(string, -50, 5));      // ""
console.log(substr(string, 50, 5));      // ""