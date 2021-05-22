# `Functional Programming`

## `Function-purity`

procedure is collection of thing's

```
f(x) = 2x^2 + 3
```

## `Read ability is most import`

1. function has to take input and return output

2. Semantic relationship between input and computed output `eg. meaningful naming function`

3. if input is empty is valid and if output is not returned or returned `There should be a semantic meaning to it`

4. if the input or the output or both are indirect `updating global variable in state even if there is semantic relationship`

5. type's of side effects
   - Any i/o console.log
   - data base storage
   - Network call
   - DOM
   - Time-stamp
   - Random Numbers

- Avoid side as possible

6. reduce the surface area of side effect

7. given the same i/p it will always give the same output

8. Extracting impurity whenever possible `OR` Containing Impurity
   - wrapping function where side effect is happening
   - adapter function
   - if none of this make make the side effect obvious

---

## `Argument Adapter`

1. Arguments vs Parameters

```js
function add(x, y) {
  // x, y are the parameters
  return x + y;
}

add(3, 4); // 3 & 4 are the arguments
```

2. Function input `Signature Shape`

```js
// unary
function increment(x) {
  return sum(x, 1);
}
// binary
function sum(x, y) {
  return x + y;
}

// enary
function multipleParameter(x, y, z, a, ...args) {}
```

---
