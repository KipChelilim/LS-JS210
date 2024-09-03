function charToLowerCase(char) {
  if (char < 'A' || char > 'Z') return char;

  let lowerCaseASCII = char.charCodeAt(0) + 32
  return String.fromCharCode(lowerCaseASCII)
}

function toLowerCase(string) {
  result = ''

  for (let index = 0; index < string.length; index += 1) {
    char = string[index]
    result += charToLowerCase(char)
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
console.log(toLowerCase('123'));         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"