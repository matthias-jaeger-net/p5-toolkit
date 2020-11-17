# p5-toolkit
A small set of effects and useful functions for [p5.js](https://p5js.org/ "p5.js"), a JavaScript library for creative coding


## Basic usage
```html
  <!-- Include in index.html before -->
  <script src="https://cdn.jsdelivr.net/gh/matthias-jaeger-net/p5-toolkit@6e50c96c118203d0b43bbb33b8b406712ae7db14/dist/p5-global-effects.min.js"></script>
```
```javascript
// Recommended:
// Import the effects globally inside of setup() and keep all there
function setup() {
  const effects = new Effects(this);
  ...
}

// Or use a global variable
let effects;
function setup() {
  effects = new Effects(this);
  ...
}
```

## Example Basic
https://editor.p5js.org/matthias-jaeger-net/sketches/PQrZMbk45

## Example Intermediate
https://editor.p5js.org/matthias-jaeger-net/sketches/sN_Qu58Go

## Example Advanced
https://editor.p5js.org/matthias-jaeger-net/sketches/9FTcIkn-r

## Example Yetiadvanced
https://editor.p5js.org/matthias-jaeger-net/sketches/cFctVV7R2