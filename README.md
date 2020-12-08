# p5-toolkit
![License](https://poser.pugx.org/laravel/lumen-framework/license.svg)

# A collection of effects and other visual trickery in the context of [p5 sketches](https://p5js.org/).

I frequently use this single JavaScript file when I create artistic [generative images](https://www.instagram.com/_matthiasjaeger/). The collection currently contains methods for **colors**, **numbers**, **pixels**, **textures**, **hatches**, **masks** and **other useful tools**. See a short overview below or browse the [type docs](/docs) for a detailed information. These effects could be useful for **artists**, **designers** and fellow **creative coders**. Please be aware that this is a *personal* collection and it might change dramatically without warnings. The script adds a globally available class constructor called ``Effects`` to your disposal. The intended use is to locally create a *new instance* in ```setup()``` and use it's methods via the dot-syntax. Include the script in ```index.html``` and use it in ```sketch.js```.

**Consider a simple sketch**

```javascript
let img;

function preload() {
  img = loadImage('Shannon-Kunkle.png');
}

function setup() {
  createCanvas(img.width, img.height);
  image(img, 0, 0);
}
```
![matthias-jaeger-net-buffer-demo](images/landscape.jpg)

**Include the effects script**

```html
<!-- index.html -->
<script src="p5-global-effects.min.js" defer></script>
<script src="sketch.js" defer></script>
```
**Use the class provided by the script**
```javascript
let img;

function preload() {
  img = loadImage('Shannon-Kunkle.png');
}

function setup() {
  createCanvas(img.width, img.height);
  const effects = new Effects(this);
  // For example ...
  image(effects.glitchY(img), 0, 0);
}
```
![matthias-jaeger-net-buffer-demo](images/glitch-full.jpg)

# Pixel effects
Core pice of the file are the pixel effects. These are functions that take a ``p5.Graphics`` buffer or a ``p5.Image`` as  input and ``return`` a new buffer with a dramatically changed appearance. In the examples below the effect is applied on the left half of this [landscape photography](https://unsplash.com/photos/dM8INmkyDas).

**Modified example**
```javascript
let img;

function preload() {
  img = loadImage('Shannon-Kunkle.png');
}

function setup() {
  createCanvas(img.width, img.height);
  const effects = new Effects(this);

  // Left side: effects applied
  image(effects.randomBlurX(img.get(0, 0, img.width / 2, img.height)), 0, 0);

  // Right side: original image data
  image(img.get(img.width / 2, 0, img.width, img.height), img.width / 2, 0);
}

```


### ```randomBlurX(buffer) ```
![matthias-jaeger-net-buffer-demo](images/randomBlurX.jpg)

### ```fuzzyBlurX(buffer)```
![matthias-jaeger-net-buffer-demo](images/fuzzyBlurX.jpg)

### ```mosaic(buffer)```
![matthias-jaeger-net-buffer-demo](images/mosaic.jpg)

### ```shiftedPixels(buffer)```
![matthias-jaeger-net-buffer-demo](images/shiftedPixels.jpg)

### ```glitchY(buffer)```
![matthias-jaeger-net-buffer-demo](images/glitchY.jpg)

### ```puzzle(buffer)```
![matthias-jaeger-net-buffer-demo](images/puzzle.jpg)

### ```gridScapes(buffer)```
![matthias-jaeger-net-buffer-demo](images/gridScapes.jpg)

### ```bufferStack(buffer)```
![matthias-jaeger-net-buffer-demo](images/bufferStack.jpg)


# Textures

Texture functions help me to generate buffers quickly, so later on effects can be applied.  Unlike the pixel effects textures have **more parameters**. A ``buffer`` can be: ``this``, meaning the currrent p5 sketch a passed in ``p5.Image`` or a passed in ``p5.Graphics``, like below. The ``density`` should be a positive number between zero and one and scales the effects in one way or the other. The ``color`` is the third parameter and is a ``p5.Color`` to be used for the generated geometry. In the examples below I used ``color(0)`` which means black, for simplicity, but I vary the density from left tor right. Every texture function will ``return`` a new graphics buffer with an image of the original and the generated geometry on top of it.


### ```dots(buffer, density, color)```
![matthias-jaeger-net-buffer-demo](images/dots.jpg)
```javascript
function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.dots(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
}
```

### ```stripes(buffer, density, color)```
![matthias-jaeger-net-buffer-demo](images/stripes.jpg)
```javascript
function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.stripes(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
}
```

### ```bars(buffer, density, color)```
![matthias-jaeger-net-buffer-demo](images/bars.jpg)
```javascript
function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.bars(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
}
```

### ```grain(buffer, density, color)```
![matthias-jaeger-net-buffer-demo](images/grain.jpg)
```javascript
function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.grain(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
}
```

### ```corroded(buffer, density, color)```
![matthias-jaeger-net-buffer-demo](images/corroded.jpg)
```javascript
function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.splashes(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
}
```


# Legacy
- [x] ```stripes(res, colors)``` A really randomly striped graphics buffer
- [x] ```hatchHorizontal(w, h, d, col)``` Regular hatching horizontally
- [x] ```hatchVertical(w, h, d, col)``` Regular hatching vertically
- [ ] ```hatchGrid(w, h, d)```
- [x] ```hatchDotGrid(w, h, d)```
- [ ] ```hatchRandomDots(w, h, d)```
- [ ] ```hatchRandomLines(w, h, d)```
- [ ] ```hatchMaze(w, h, d)```
- [ ] ```hatchSinusLines(w, h, d)```
- [ ] ```hatchFlowField(w, h, d)```
- [x] ```randomColor()``` Any possible color
- [x] ```randomBrightColor()``` A brighter color
- [x] ```randomDarkColor()``` A darker color
- [x] ```shadedColor(col)``` A randomly changed color with low offset
- [x] ```shadedColorOff(col, off)``` A randomly changed color and public offset
- [x] ```randomPalette(col, len)``` A color palette with a number of colors and a initial color
- [x] ```relatedPalette(col, len)``` A color palette with colors based on the initial color
- [ ] ```huePalette(col, len)``` A color palette with evenly spread hue based the initial color

- [x] ```grainMask(buffer, prob)``` A buffer with a grainy alpha mask
- [x] ```linesMask(buffer, prob)``` A buffer with a striped alpha mask
- [x] ```randomLight(buffer)```  Sets a white light in a random position in a buffer
- [x] ```randomColoredLight(buffer, col)``` Sets a colored light in a random position in a buffer


# Do you want to develop Effects yourself?
```bash
# Clone the repository
git clone git@github.com:matthias-jaeger-net/p5-toolkit.git
```
```bash
# Navigate in the directory
cd p5-toolkit
```
```bash
# Install the development tools
npm install
```
NOTE: This will install the node modules I use for the development. You can check the [package.json](/package.json) for a full list. Briefly said it will install a very simple Webpack/Typescript/p5 setup for you. Having said that, because sometimes it can be strange with node modules...

**Available scripts**
```bash
# This generates the minified file in /dist/
npm run build
```
```bash
# This outputs the raw commonjs modules, not used currently
npm run compile
```
```bash
# Have no unit tests so far...
npm run test
```
```bash
# This generates api docs from typescript /src
npm run docs
```