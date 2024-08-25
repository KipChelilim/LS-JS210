function negativeZero(value) {
  return (value === 0) && ((1/value) !== (1/0))
}

console.log(negativeZero(-0))
console.log(negativeZero(0))
console.log(negativeZero(8))
console.log(negativeZero(8))
console.log(negativeZero(Infinity))
console.log(negativeZero(-Infinity))
console.log(negativeZero(undefined))