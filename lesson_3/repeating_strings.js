/*
if times is not a number undefined
if time is negative undefined
if times is 0 like normal
assume times is an integer

*/

function repeat(string, times) {
  if (typeof times !== 'number' || times < 0) {
    return undefined;
  }

  repeatedString = '';
  for (let count = times; times > 0; times -= 1) {
    repeatedString += string;
  }
  return repeatedString;
}

console.log(repeat('abc', 1));       // "abc"
console.log(repeat('abc', 2));       // "abcabc"
console.log(repeat('abc', -1));      // undefined
console.log(repeat('abc', 0));       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined