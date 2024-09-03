/*
algorithm
  check if expectedSum is odd or less than 4
  initialize array
  take half of supplied integer as midpoint
  for every number from 2 to midpoint
    check if its prime
    if it is store it in a subarray with integer - number
  log results
    if theres more than one result in array, multiline
    if a single result, same line as logs
*/

function isPrime(integer) {
  if (integer === 2) return true;
  if (integer % 2 === 0 || integer === 0 || integer === 1) return false;

  maxPotentialFactor = Math.floor(Math.sqrt(integer));
  if (maxPotentialFactor % 2 === 0) maxPotentialFactor -= 1;

  for (let factor = maxPotentialFactor; factor > 2; factor -= 2) {
    if (integer % factor === 0) return false;
  }

  return true;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 > 0 || expectedSum < 4) {
    console.log(null);
    return;
  }

  result = []
  midpoint = Math.floor(expectedSum / 2)

  for (let num = 2; num <= midpoint; num += 1) {
    if (isPrime(num) && isPrime(expectedSum - num)) {
      prime1 = String(num);
      prime2 = String(expectedSum - num);
      result.push(`${prime1} ${prime2}`);
    } else {
      continue;
    }
  }

  console.log(result.join('\n'));
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53