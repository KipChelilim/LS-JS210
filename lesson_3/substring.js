/*
indexof function
  should accept two strings as arguments
  function searches the first string to find where substring beings
  return starting index of substring or -1 if not found

lastindexof function
  search for the last instance of a substring
  same rules, but search in reverse

algorithm for indexOf
  short circuit:
    if secondString is larger than firstString
  initialize secondStringIndex of secondString
  iterate through first substring while index < secondString.length
    return -1 if remaining length is shorter than secondString
    test if current character equals second string first character
      if no:   reset secondStringIndex
               skip
      if yes:  advance secondStringIndex
algorithm for lastIndexOf further exploration
  while truncatedString > secondString and starting index < firstString length
    run indexOf
    if result is -1 and there is no prior match, return -1
    if result is an index: store it in match found
                           set start position as match found + 1
    if result is -1 and we have a prior match, return prior match
    create new truncatedString with starting index

*/

function indexOf(firstString, secondString) {
  const BAD_MATCH = -1
  if (secondString.length > firstString.length) return BAD_MATCH;

  let secondStringIndex = 0;
  let matchIndex = null;

  for (let currIndex = 0; currIndex < firstString.length; currIndex += 1) {
    firstStringChar = firstString[currIndex]
    secondStringChar = secondString[secondStringIndex]
    firstStringRemaining = firstString.length - currIndex

    if (firstStringRemaining < secondString.length) {
      break;
    } else if (firstStringChar === secondStringChar) {
      matchIndex = matchIndex ?? currIndex
      secondStringIndex += 1;
    } else if (secondStringIndex >= secondString.length) {
      break;
    } else if (firstStringChar !== secondStringChar) {
      secondStringIndex = 0;
      matchIndex = null;
    }
  }

  return matchIndex ?? BAD_MATCH;
}

function lastIndexOf(firstString, secondString) {
  const BAD_MATCH = -1
  if (secondString.length > firstString.length) return BAD_MATCH;

  let secondStringIndex = secondString.length - 1;
  let firstStringStart = firstString.length - 1
  let matchIndex = null;

  for (let currIndex = firstStringStart; currIndex >= 0; currIndex -= 1) {
    firstStringChar = firstString[currIndex]
    secondStringChar = secondString[secondStringIndex]
    firstStringRemaining = currIndex + 1

    if (firstStringRemaining < secondString.length) {
      break;
    } else if (firstStringChar === secondStringChar) {
      matchIndex = currIndex
      secondStringIndex -= 1;
    } else if (secondStringIndex < 0 && matchIndex) {
      break;
    } else if (firstStringChar !== secondStringChar) {
      secondStringIndex = secondString.length - 1;
      matchIndex = null;
    }
  }

  return matchIndex ?? BAD_MATCH;
}

// console.log(indexOf('Some strings', 's'));                      // 5
// console.log(indexOf('Blue Whale', 'Whale'));                    // 5
// console.log(indexOf('Blue Whale', 'Blute'));                    // -1
// console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1
console.log(lastIndexOf('allallallallallallallall', 'all'));    // -1