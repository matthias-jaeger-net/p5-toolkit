# p5-toolkit
![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)

A small set of effects and useful functions for [p5.js](https://p5js.org/ "p5.js"),
a JavaScript library for creative coding.

## A personal toolkit for creating static images with p5
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
offscreen buffer back onto the stage.

**A custom buffer**
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
  image(effects.mosaic(design), 0, 0);
}
```

**Getting any buffer**
```javascript
function setup() {
  // Import the effects class
  const effects = new Effects(this);

  // Your design in global mode ...
  createCanvas(800, 600);
  circle(400, 300, 100);

  // When called with no arguments get() returns the currrent buffer
  const design = get();

  // Render the design with an effect
  image(effects.mosaic(design), 0, 0);
}
```
# All available Methods

## Color tools
- [x] ```randomColor()``` Any possible color
- [x] ```randomBrightColor()``` A brighter color
- [x] ```randomDarkColor()``` A darker color
- [x] ```shadedColor(col)``` A randomly changed color with low offset
- [x] ```shadedColorOff(col, off)``` A randomly changed color and public offset
- [x] ```randomPalette(col, len)``` A color palette with a number of colors and a initial color
- [x] ```relatedPalette(col, len)``` A color palette with colors based on the initial color
- [ ] ```huePalette(col, len)``` A color palette with evenly spread hue based the initial color

```javascript
function setup() {
  // Import the effects class
  const effects = new Effects(this);
  // Use it to create a color scheme
  const themeBright = effects.randomBrightColor();
  const themeBrightVariant = effects.shadedColor(themeBright);
  const themeDark = effects.randomDarkColor();
  const themeAccent = effects.randomColor()
  ...
  // Or use the ready mades
  // This will make an array with the inital color and 4 random colors
  const pal1 = effects.randomPalette(color(200, 10, 20), 5);
  // This will make an array with the inital color and 4 similar random colors
  const pal2 = effects.relatedPalette(color(200, 10, 20), 5);
  ...
}

```

 ## Pixel effects
- [x] ```randomBlurX(buffer) ``` A graphics buffer with dramatically changed colors
- [x] ```fuzzyBlurX(buffer)``` A graphics buffer with dramatically changed colors
- [x] ```mosaic(buffer)``` A graphics buffer with a tiled tesselation
- [x] ```shiftedPixels(buffer)``` A graphics buffer with sifted rows of pixels
- [x] ```sortColors(buffer)``` A graphics buffer with color sorted pixels
- [x] ```glitch(buffer)``` A graphics buffer a dramatic pixel manipulation effect

![matthias-jaeger-net-1](cover.png)

## Hatches
- [x] ```stripes(res, colors)``` A randomly striped graphics buffer
- [x] ```dots(res, colors)```  A randomly dotted graphics buffer
- [ ] ```hatchHorizontal(w, h, d)```
- [ ] ```hatchVertical(w, h, d)```
- [ ] ```hatchGrid(w, h, d)```
- [ ] ```hatchDotGrid(w, h, d)```
- [ ] ```hatchRandomDots(w, h, d)```
- [ ] ```hatchRandomLines(w, h, d)```
- [ ] ```hatchMaze(w, h, d)```
- [ ] ```hatchSinusLines(w, h, d)```
- [ ] ```hatchFlowField(w, h, d)```

```javascript
// Any hatch function will return a graphics buffer
// Standard pattern:
// @param {w} width in pixels
// @param {h} height in pixels
// @param {d} Number from 0 to 1 is influences the "densitity"
// effectName(w, h, d)

// Basic
image(effects.hatchHorizontal(w, h, d), 0, 0);
image(effects.hatchVertical(w, h, d), 0, 0);
image(effects.hatchGrid(w, h, d), 0, 0);
image(effects.hatchDotGrid(w, h, d), 0, 0);
image(effects.hatchRandomDots(w, h, d), 0, 0);
image(effects.hatchRandomLines(w, h, d), 0, 0);

// Advanced
image(effects.hatchMaze(w, h, d), 0, 0);
image(effects.hatchSinusLines(w, h, d), 0, 0);
image(effects.hatchFlowField(w, h, d), 0, 0);
```

## Masking effects
- ```grainMask(buffer, prob)``` A buffer with a grainy alpha mask
- ```linesMask(buffer, prob)``` A buffer with a striped alpha mask
```javascript
// Currently
const final1 = effects.grainMask(design, d)
const final2 = effects.linesMask(design, d)
```

## Random number tools
- ```randomOffset(val, off)``` A value with random positive or negative offset
- ```randomZeroOne()``` A random number between 0 and 1
- ```randomProb()``` True with a 50% percent probability
- ```givenProb(prob)``` True/false by given probability
- ```fuzzyValue(val)``` Either a slightly changed or dramtically reduced value

## WEBGL light effects
- ```randomLight(buffer)```  Sets a white light in a random position in a buffer
- ```randomColoredLight(buffer, col)``` Sets a colored light in a random position in a buffer


# A few examples

![matthias-jaeger-net-2](canvas.png)

## Example Basic
https://editor.p5js.org/matthias-jaeger-net/sketches/PQrZMbk45

## Example Intermediate
https://editor.p5js.org/matthias-jaeger-net/sketches/sN_Qu58Go

## Example Advanced
https://editor.p5js.org/matthias-jaeger-net/sketches/9FTcIkn-r

## Example Yetiadvanced
https://editor.p5js.org/matthias-jaeger-net/sketches/cFctVV7R2