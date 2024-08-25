function oddLengths(array) {
  return array.reduce((result, element) => {
    length = element.length
    return (length % 2 === 1) ? result.concat(length) : result
}, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]