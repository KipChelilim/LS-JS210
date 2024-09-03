### 1
- `[ 'red', 'green', 'blue', 'yellow' ]`
- `color`s was passed in as the object, `push` is a mutating function, and
  `color` is accessible from within the function

### 2
- `[ 'red', 'green', 'blue', undefined ]`
- By including `color` as a parameter, it shadows the global variable. Since it
  an argument was not provided, it gets initialized as `undefined`

### 3
- `[ 'red', 'green', 'blue', 'purple', 'pink' ]`
- We pass in copies of strings assigned to `color1` and `color2` which are then
  bound to parameter `color` and appended to the array object.

### 4
Same as above. The `return` statement on line 7 is returning a reference to the
same array as `colors`, which is bound to `newColors` and then passed back into
the `updateColors` function on line 11.

### 5
- `[ 'red', 'green', 'blue' ]`
- `addColor` functions as `updateColors` same as prior question
- `removeColor` removes the last color and reassigns the global variable `color`
  to the return value of `pop` which is the element removed.
- `addColor` is invoked on line 15 which readds the element removed
- Same as above, `newColors` is bound to the same object as `colors` so it
  outputs the original array with last element readded.

### 6 - First output wrong - forgot `+=` reassignment
- `'hello'`
- `'Hello'`
- `'hello!!!'`
- Strings are immutable so each function is returning copies of the string
  - first output is same as last output due to reassignment
  - second output not affected because `capitalizedWord` was assigned before
    `exclaimedWord` was executed

### 7
This one results in three distinct outputs because the `word` parameter for
`exclaim` shadows the global `word` variable and prevents it from being
accessed. The reassignment on line 6 only affects the function local variable.
- `'hello'`
- `'Hello'`
- `'Hello!!!'`