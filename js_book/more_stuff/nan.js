let isNotANumber = (value) => (value !== value)

console.log(isNotANumber(8))
console.log(isNotANumber(NaN))
console.log(isNotANumber(Infinity))
console.log(isNotANumber(0))
console.log(isNotANumber(undefined))