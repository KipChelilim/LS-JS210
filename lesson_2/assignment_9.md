### 1 - Correct, but missing some of the nuance on why
This will output undefined since the variable was declared with `var` and it
gets hoisted and initialized as `undefined`.
  - also, because it is function-level it gets hoisted even though the block
  never executes due to the `false` condition

### 2 - Reason why is wrong
This will produce a `ReferenceError` since `a` is declared with block scope and
this block never runs.
  - reason is that the declaration is not available outside of line 3 even if it
  ran

### 3 - Wrong, `a` is not a global variable, its a function-level local variable
This will output `'hello'` twice. First, global variable `a` is hoisted from
line 6 as undefined. Then, when function `hello()` is called on line 10, `a` is
reassigned to the value `'hello'` and `'hello'` is output to the console. `a` is
not reassigned to `'hello again'` on line 6 because this block never executes.

### 4
This outputs `'hello'` twice because `a` is created as a global variable when JS
attempts to find `a` and reassign it. Also, block-level local variable `a` is
not available outside the `if` statement block so the `let` statement does not
produce an error when attempting to create a variable with the same name.

### 5
This should output `4` because `var` declarations have function-level scope,
not block-level scope. As a result, on line 4 the last iteration within the loop
will assign `a` to the last index value less than 5.

### 6
The output will be `'hello'`. Since we now use a `let` declaration statement,
`a` on line 4 has block-level scope. It is a different variable than the `a`
passed to `console.log` on line 7.
  - note, the `let` declaration is hoisted at creation, so it does not produce a
    syntax error.

### 7
This will output `4` and then `3`. Function `foo` returns function `bar`, which
itself returns the value `4`. `bar` also reassigns the variable `a`. Because a
local variable `a` is not declared in `bar` or `foo`, the global variable `a`
from line 1 is used throughout `foo` and `bar`. When `bar` is invoked on line 10
a is reassigned to `3`.

### 8
This outputs `'superNested'` and `'global'`.

The return value of `checkScope` is the return value of the `superNested`
function. Within `superNested`, we reassign the variable `a` that is locally
scoped to `nested` and then return that value (`'superNested'`). This value is
then returned by function `nested`, which is then returned by `checkScope` and
output on line 18.

Because `checkScope` declares a function-scoped local variable, none of the
assignment expressions impact the globally scoped `a` which is equal to
`'global'`. As a result, line 19 outputs `'global'`.

### 9
Lines 4, 5, and 7 output `'outer'` and line 8 outputs `'inner'`. Because the
`setScope` function reassigns function local variable `foo` and global variable
`b`, only `b` has a new value on lines 7 and 8. The function call on line 6 only
passes the value that `a` references, not the variable itself. As a result, the
reassignment on line 11 does not impact what `a` references.

### 10
This code outputs `50`, `60`, and `15`. The `incrementBy` function reassigns the
`total` variable to the result of total + increment, but uses parameter
`increment` which creates a function-scoped local variable that shadows the
global variable `increment`. After calling the function on line 9, `total` is
equal to 60 while the global variable `increment` is still equal to 15.

### 11
This outputs `'outer'`, then produces a `TypeError` because the function uses
a `var` declaration. This means variable `setScope` is initialized with the
value undefined and is not assigned to the function until line 7 is executed.
When line 4 is executed, JS attempts to access a function object with
`setScope` but is unable to because the variable references an `Undefined`
object.