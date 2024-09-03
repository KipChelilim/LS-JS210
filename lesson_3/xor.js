/*
problem
  create function xor that ccepts two arguments
  return true if exactly one argument is truthy
  return false otherwise if both are true or both are false
examples
  true, true -> if they equal each other false
  false, false -> same
  true, false -> don't equal we're good

  true !== false
algorithm
  check if the arguments don't equal each other

  and if at least one is true

*/

function isXor(firstArgument, secondArgument) {
  return !!firstArgument !== !!secondArgument;
}

console.log(isXor(false, true));     // true
console.log(isXor(true, false));     // true
console.log(isXor(false, false));    // false
console.log(isXor(true, true));      // false


console.log(isXor(false, 3));        // true
console.log(isXor('a', undefined));  // true
console.log(isXor(null, ''));        // false
console.log(isXor('2', 23));         // false