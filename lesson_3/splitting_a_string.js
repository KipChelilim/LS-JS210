/*
if delimiter is empty string, split all characters
if delimiter is provided but not present, no split
if missing delimiter error
if delimiter is at the start, use blank line

iterate through string
  create word
  iterate through string
    check if current character is a delimiter or delimiter is empty string
      if yes
        push prior word to result
        clear word
      if no
        add character to word
        continue
  log results on separate lines
*/

function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log('ERROR: No delimiter');
    return;
  }

  result = [];
  word = '';
  for (index = 0; index <= string.length; index += 1) {
    let character = string[index];

    if (delimiter === '' && index < string.length) {
      result.push(character);
    } else if (character === delimiter) {
      result.push(word);
      word = '';
    } else if(index === string.length && word) {
      result.push(word);
    } else {
      word += character;
    }
  }

  console.log(result.join('\n'));
}

splitString('abc,123,hello world', ',');
// // logs:
// // abc
// // 123
// // hello world

splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// // logs:
// //  (this is a blank line)
// // hello