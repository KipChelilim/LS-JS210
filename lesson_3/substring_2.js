/*
changes from prior problem:
  start or end is 0 or NaN treat as 0
  end === undefined -> start through end of string
  start === end -> empty string


  start > end ? switch positions



  start or end > string length, then its equal to string length
  start and end && both positive && both in bounds -> start inclusive, end NOT

algorithm
  convert start to proper numerics
    check if start is an integer -> set start index
    check if start is less than 0 -> set to 0
    greater than string length -> string.length
  convert end to proper numerics
    check if integer -> number
    check if undefined -> string.length
  check if start is less than end swap
  return empty string if both are the same
  convert end to
*/

function substring(string, start, end) {
  startIndex = parseInt(start, 10);
  stopIndex = !!end ? parseInt(end, 10) : string.length;

  if (!Number.isInteger(startIndex) || startIndex < 0)
    startIndex = 0;
  } else {
    startIndex = Math.min(startIndex, string.length);
  }

  if (!Number.isInteger(stopIndex) || stopIndex < 0) {
    stopIndex = 0;
  } else {
    stopIndex = Math.min(stopIndex, string.length);
  }

  if (startIndex === stopIndex) return result;

  if (startIndex > stopIndex) {
    [startIndex, stopIndex] = [stopIndex, startIndex]
  }

  let result = '';
  for (let index = startIndex; index < stopIndex; index += 1) {
    result += string[index];
  }

  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"
console.log(substring(string, 4, 4));    // ""
