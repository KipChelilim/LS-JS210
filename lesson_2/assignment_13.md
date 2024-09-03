### 1
- `Hello`, passed into function and assigned to `word`
- `Hello` since the function cannot modify the string and the new value
  assigned to `word` was not returned and assigned to `myWord`

### 2
- `Hello`, passed into function and assigned to `word`
- `HELLO` since the upper case version of `word` was returned and reassigned
  to myWord before it was logged again

### 3
- `Hello`, passed into function and assigned to `word`
- `Hello`, since myWord was not reassigned
- `HELLO` since the upper case version of `word` was returned and assigned to
  `myOtherWord`

### 4
- `[ 'Hello', 'Goodbye' ]` since the reference to the object was passed in
- `[ 'Hi', 'Goodbye' ]` since the first element was reassigned and word
  references the object passed into the method

### 5
- `[ 'Hello', 'Goodbye' ]` since the reference to the object was passed in
- `[ 'Hello', 'Goodbye' ]` since we only reassigned function local variable
  `words` and did not perform any operations that modified the original object