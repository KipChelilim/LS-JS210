/*
algorithm
  create result string
  iterate through each character
    rotate the character
      if character is less than midpoint
        add 13 to codepoint
      if character greater than midpoint
        subtract 13 from codepoint
    add rotated character to result
  return string
*/

function isUpperCase(character) {
  return character >= 'A' && character <= 'Z';
}

function isLowerCase(character) {
  return character >= 'a' && character <= 'z';
}

function rot13(string) {
  const CIPHER = 13;
  const UPPER_CASE_MIDPOINT = 77;
  const LOWER_CASE_MIDPOINT = 109;

  result = '';
  for (let index = 0; index < string.length; index += 1) {
    char = string[index]
    charCode = string.charCodeAt(index);

    if (isUpperCase(char)) {
      rotation = charCode > UPPER_CASE_MIDPOINT ? -CIPHER : CIPHER;
      result += String.fromCharCode(charCode + rotation);
    } else if (isLowerCase(char)) {
      rotation = charCode > LOWER_CASE_MIDPOINT ? -CIPHER : CIPHER;
      result += String.fromCharCode(charCode + rotation);
    } else {
      result += char
    }
  }

  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));
console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));