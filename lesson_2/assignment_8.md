### 1
- line 8 outputs `'outer'` due outer scoped variable `a` from line 1
- line 9 outputs `'inner'` and returns undefined because inner scoped `a` is a new
variable initalized on line 4 which shadows the outer scoped `a`
- line 10 outputs `'outer'` because outer scoped `a` was not modified when inner
scoped `a` was initialized

### 2
- line 8 - Same as above
- line 9 - Same as above except now `a` on line 4 is reassignment of outer
scoped `a`
- line 10 - This now outputs `'inner'` since `a` was reassigned when
`testscope()` was called on line 9.

### 3
As a result of calling goShopping on line 26:
- line 8 outputs `'empty'` since `basket` is unchanged since it was assigned on
line 1 and the function `shop1` has not been called yet

- line 19 - nothing is output but `basket` is reassigned to `'tv'`
- line 20 - nothing but `basket` is now reassigned to `'computer'`
- line 21 - `'play station'` is output using an inner scoped `basket` variable;
the outer scoped `basket` initalized on line 1 still references the value
`'computer'`
- line 23 - `'computer'` is output

### 4
- line 5 outputs nothing but creates an outer scoped variable `a` when it is
unable to find one in the global scope
- line 6 outputs `'hi'`

### 5
Attempting to access `a` on line 6 results in a `ReferenceError` since `a` is
now a locally scoped to `hello()`. The difference from problem 4 is
that here, `a` was initialized in the function, so it is created as a local
variable. In problem 4, we attempt to reassign `a` so JavaScript searches for
`a` and when it can't find it in any scope, it creates the variable in the
global scope.

### 6
This outputs undefined since `var` declarations are hoisted, but not the values
they've been assigned to. This is different from `let` and `const` declarations
which get hoisted as uninitialized variables resulting in an error.

### 7
As mentioned for problem 6, this produces an error since `let` and `const`
declarations result in variables that are uninitialized when hoisted

### 8
This will result in an error. Though the function `hello` is hoisted, the
variable `a` does not get initialized until the function is called and `a` gets
created by JS. Only declarations get hoisted so at runtime `a` referenced on
line 1 does not exist.