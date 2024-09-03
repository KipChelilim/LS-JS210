function trim(string) {
  startIndex = 0
  endIndex = string.length - 1

  while (string[startIndex] === ' ') {
    startIndex += 1
  }

  while (string[endIndex] === ' ') {
    endIndex -= 1
  }

  result = ''
  if (endIndex > startIndex) {
    for (; startIndex <= endIndex; startIndex += 1) {
      result += string[startIndex];
    }
  }
  return result;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""