# p5-toolkit
![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)

A small set of effects and useful functions for [p5.js](https://p5js.org/ "p5.js"),
a JavaScript library for creative coding.

![matthias-jaeger-net](cover.png)

## Ideas behind this
### A personal toolkit for creating static images with p5
This is a personal toolkit that I share with you. Feel free to use it in any way,
shape or form you can imagine. The toolkit (currrently in development) is a single
JavaScript class you could add to any of your sketches and use it to post process
the results. See the examples below how you might include it.

**index.html**
```html
  <!-- Included in your index.html before the sketch -->
  <script src="p5-global-effects.min.js" defer></script>
  <script src="sketch.js" defer></script>
```

### Using graphics buffers
The class is written around the idea of using graphics buffers within your p5 sketch.
A graphics buffer can be created with ``createGraphics(w, h, [renderer])``.
When called, this function returns a ``p5.Graphics: offsscreen graphics buffer``, which is nothing
other then a p5 sketch. You can use it's name with the dot syntax and draw anything into the buffer.
It works just like in a regular sketch. With the ``image(img, x, y)`` function we can render any
offscreen buffeer back onto the stage.

**sketch.js | A custom buffer**
```javascript
function setup() {
  // Import the effects class
  const effects = new Effects(this);

  // Create the canvas 2d context
  createCanvas(800, 600);

  // Create a 2d buffer with a design
  const design = createGraphics(width, height);
  design.circle(400, 300, 100);

  // Render the design with an effect
  const myEffect = effects.mosaic(design);
  image(myEffect, 0, 0);
}
```

**sketch.js | Getting any buffer**
```javascript
function setup() {
  // Import the effects class
  const effects = new Effects(this);

  // Your design in global mode ...
  createCanvas(800, 600);
  circle(400, 300, 100);

  // Create a 2d buffer with the design
  const design = get();

  // Render the design with an effect
  image(effects.mosaic(design), 0, 0);
}
```


## A few eexamples
The collection is written in a way that it can
be used in 2D and WBGL sketched. Mostly I am targeting people who like to bump up their
sketches and post process them a bit. It is still in develpoment and methods will be added.

## Basic usage

**sketch.js**
```javascript
function setup() {
  const effects = new Effects(this);
  ...
}
```
## Available Methods

### RANDOM NUMBER TOOLS
- ```randomOffset(val, off)``` A value with random positive or negative offset
- ```randomZeroOne()``` A random number between 0 and 1
- ```randomProb()``` True with a 50% percent probability
- ```givenProb(prob)``` True/false by given probability
- ```fuzzyValue(val)``` Either a slightly changed or dramtically reduced value

### COLOR TOOLS
- ```randomColor()``` Any possible color
- ```randomPastelColor()``` A brighter color
- ```randomDarkColor()``` A darker color
- ```shadedColor(col)``` A randomly changed color with low offset
- ```shadedColorOff(col, off)``` A randomly changed color and public offset

### COLOR PALETTES
- ```randomPalette(col, len)``` A color palette with a number of colors and a initial color
- ```relatedPalette(col, len)``` A color palette with colors based on the initial color

### TEXTURE GENERATORS
- ```stripes(res, colors)``` A randomly striped graphics buffer
-  ```dots(res, colors)```  A randomly dotted graphics buffer

 ### PIXEL EFFECTS
- ```randomBlurX(buffer) ``` A graphics buffer with dramatically changed colors
- ```fuzzyBlurX(buffer)``` A graphics buffer with dramatically changed colors
- ```mosaic(buffer)``` A graphics buffer with a tiled tesselation
- ```shiftedPixels(buffer)``` A graphics buffer with sifted rows of pixels

### LIGHT EFFECTS
- ```randomLight(buffer)```  Sets a white light in a random position in a buffer
- ```randomColoredLight(buffer, col)``` Sets a colored light in a random position in a buffer

### MASKING EFFECTS
- ```grainMask(buffer, prob)``` A buffer with a grainy alpha mask
- ```linesMask(buffer, prob)``` A buffer with a striped alpha mask

# Examples

![matthias-jaeger-net-2](canvas.png)

## Example Basic
https://editor.p5js.org/matthias-jaeger-net/sketches/PQrZMbk45

## Example Intermediate
https://editor.p5js.org/matthias-jaeger-net/sketches/sN_Qu58Go

## Example Advanced
https://editor.p5js.org/matthias-jaeger-net/sketches/9FTcIkn-r

## Example Yetiadvanced
https://editor.p5js.org/matthias-jaeger-net/sketches/cFctVV7R2