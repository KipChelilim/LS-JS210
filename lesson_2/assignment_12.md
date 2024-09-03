### 1 - Right, but incorrect explanation
`'Hello'` twice, both reference the same object
  - both point to different strings with the same value

### 2
`'Goodbye'` then `'Hello'`, since `myWord` was changed to reference a different
string.

### 3
`[ 'Hi', 'Goodbye' ]` twice since both variables reference the same array and the
first element of that array was reassigned to a new value.

### 4
`[ 'Hi', 'Bye' ]` and `[ 'Hello', 'Goodbye' ]` since myWords was pointed to a
new array object.

### 5
`[ 'Hi', 'Goodbye' ]` and `'Hello'` since the first element of the array was
pointed to a new string, while `myWord` still references the original string
that used to be in index `0` of the array.

### 6
`[ 'Hi', 'Goodbye' ]` and `'Hello'` since the first element was reassigned to
the string referenced by `myWord` as of line 3. The variable was then pointed to
a different string.