# `Functional Programming`

<a href="http://static.frontendmasters.com/resources/2019-05-06-functional-light-v3/functional-light-v3.pdf" target="_blank">Link to slides</a>

## `Function-purity`

procedure is collection of thing's

```
f(x) = 2x^2 + 3
```

### `Readability is most import`

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

- Avoid side effects as possible

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

3. Higher Order function
   - Make adapter function by creating common shape
   - Read ramda Library.
   - spread operator

---

## `Point Free`

1. Equational Reasoning

```javascript
// this code to
getPerson(function onPerson(person) {
  return renderPerson(person);
});

// this point free style
getPerson(renderPerson);
```

2. Using point free to move from Declarative vs Imperative

```js
function isOdd(v) {
  return v % 2 === 1;
}

function isEven(v) {
  return !isOdd(v);
}
```

**_Converting above code to point free style_**

```js
function not(fn) {
  return function negated(...args) {
    return !fn(...args);
  };
}

function isOdd(v) {
  return v % 2 === 1;
}

const isEven = not(isOdd);

isEvent(4); // true
```

---

## `Closure`

### `Closure is when a function remembers the variables around it even when that function is executed elsewhere`

1. closure example

```js
function stringConcat(str){
  return next(v){
    if(typeof v === "string"){
      return stringConcat(str + v)
    }
    return str
  }
}

let nameVal = stringConcat("this is cool")

console.log(nameVal("cool") === stringConcat("this is ")("cool"))


```

2. Lazy vs Eager **Memoization**

```js
function generateStr(count){
  var str
  return next(){
    if(str == undefined){
      str = "".repeat(count,"A")
    }
    return str
  }
}

let a = generate(10)

a() // 'AAAAAAAAAA' value is cached on this line
a() // 'AAAAAAAAAA'
```

### `BUT`

> `The key hallmark is that if we are going to closing over something and it still need to be functional pure`

> `We cannot close over that something changes like`

> ##### Like the `str` form `undefined` to `some string value`

#### `BUT`

> ##### But every time we run the `a()` we get the same output
>
> `The function is pure function because we get same output on every same input when called a()`

> Then only difference is `It is impure way of writing` the below function is doing the same but the `location matters` now the reader of the code doesn't have to mentally process the code and won't have doubt on closing on some variable.

```js
function generate(count) {
  return memoize(function next() {
    return "".repeat(count, "A");
  });
}
```

3. A function is said to be pure function if it has referral Transparency `Referral Transparency` a function call can be replaced with it's return value and not effect the rest of the program

```js
a() === "AAAAAAAAAA";
```

4. Generalized to Specialized

   - currying
     - Strict curring
       ```js
       ajax(SOME_URL)(DATA)(RENDER_DATA);
       ```
     - Loose curring
       ```js
       ajax(SOME_URL, DATA)(RENDER_DATA);
       ```

5. Specializing Adapts Shape

```js
function add(x, y) {
  return x + y;
}

[0, 2, 4, 6, 8].map(function addOne(v) {
  return add(1, v);
});

// [1,3,5,7,9]
```
