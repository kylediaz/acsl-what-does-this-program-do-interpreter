# ACSL "What Does This Program Do" Interpreter

[Demo](kylediaz.com/projects/acsl-interpreter)

Interpreter for the pseudocode used in American Computer Science League
competitions in contest 1.

## Features

These are the full capabilities of the language
[as defined by the ACSL wiki](https://www.categories.acsl.org/wiki/index.php?title=What_Does_This_Program_Do%3F)

| Construct                  | Code Segment                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Operators                  | ! (not), ^ or ↑(exponent), \*, / (real division), % (modulus), +, -, >, <, >=, <=, !=, ==, && (and), &#124;&#124; (or) in that order of precedence                                                                                                                                                                                                           |
| Functions                  | abs(x) - absolute value, sqrt(x) - square root, int(x) - greatest integer <= x                                                                                                                                                                                                                                                                               |
| Variables                  | Start with a letter, only letters and digits                                                                                                                                                                                                                                                                                                                 |
| Sequential statements      | `INPUT` variable<br>variable = expression (assignment)<br>`OUTPUT` variable                                                                                                                                                                                                                                                                                  |
| Decision statements        | `IF` `boolean expression` `THEN`<br>Statement(s)<br>`ELSE` (optional)<br>Statement(s)<br>`END IF`                                                                                                                                                                                                                                                            |
| Indefinite Loop statements | `WHILE` `boolean expression`<br>Statement(s)<br>`END WHILE`                                                                                                                                                                                                                                                                                                  |
| Definite Loop statements   | `FOR` `variable = start` `TO` `end` `STEP` `increment`<br>Statement(s)<br>`NEXT`                                                                                                                                                                                                                                                                             |
| Arrays:                    | 1 dimensional arrays use a single subscript such as A(5). 2 dimensional arrays use (row, col) order such as A(2,3). Arrays can start at location 0 for 1 dimensional arrays and location (0,0) for 2 dimensional arrays. Most ACSL past problems start with either A(1) or A(1,1). The size of the array will usually be specified in the problem statement. |
| Strings:                   | Basically python strings                                                                                                                                                                                                                                                                                                                                     |

And here's more features found in practice problems that they failed to mention
in their wiki:

| Construct                           | Code Segment                                                            |
| ----------------------------------- | ----------------------------------------------------------------------- |
| Alternate Decision Statement Syntax | `IF` `expression` `THEN` `Statement` `ELSE` `Statement` <br> (one line) |
| Program Early Termination           | `END`                                                                   |

## Example Code Snippets

```
input H, R
B = 0
if H>48 then
    B = B + (H - 48) * 2 * R
    H = 48
end if
if H>40 then
   B = B + (H - 40) * (3/2) * R
   H = 40
end if
B = B + H * R
output B
```

```
A = "BANANAS"
NUM = 0: T = ""
for J = len(A) - 1 to 0 step -1
     T = T + A[j]
next 
for J = 0 to len(A) - 1
    if A[J] == T[J] then NUM = NUM + 1
next
```

```
A(0) = 12: A(1) = 41: A(2) = 52
A(3) = 57: A(4) = 77: A(5) = -100
B(0) = 17: B(1) = 34: B(20) = 81
J = 0: K = 0: N = 0
while A(J) > 0
  while B(K) <= A(J)
    C(N) = B(K)
    N = N + 1
    k = k + 1
  end while
  C(N) = A(J): N = N + 1: J = J + 1
end while
C(N) = B(K)
```