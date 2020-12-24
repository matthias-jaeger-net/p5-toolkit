![p5-toolkit](svg/header.svg)

#### A personal collection of effects

I have been working with [processing](https://processing.org/) and [p5](https://p5js.org/) for many years now and realized I have written the same, or very similar code all the time. When it comes to the topic of **generating single static images**, that highly depend on randomized geometry, texture and colors I have been copying and merging code between my projects. For this repository it is my goal to make these methods not only reusable for myself but to share it with you guys. It's a personal collection of methods and concepts I use for my artistic generative images on my [instagram](https://www.instagram.com/_matthiasjaeger/), [webiste](https://matthias-jaaeger.net/) and [blog](https://rbs46.net/). These effects could be useful for **artists**, **designers** and fellow **creative coders**. The collection contains methods for **colors**, **numbers**, **pixels**, **textures** and **hatches**. See a short overview below or browse the [type docs](/docs) for a detailed information. The script adds a globally available class constructor called ``Effects`` to your disposal. The intended use is to locally create a *new instance* in ```setup()``` and use it's methods via the dot-syntax. Include the script in ```index.html``` and use it in ```sketch.js```. Please be aware that this is a *ongoing* collection and it might change dramatically without warnings.

[![download](svg/download.svg)](https://github.com/matthias-jaeger-net/p5-toolkit/tree/main/dist "Download")

![-](svg/spacer.svg)

## Include it in your index file

```html
<!-- index.html -->
<script src="p5-global-effects.min.js" defer></script>
<script src="sketch.js" defer></script>
```

## Use the class in your sketch

```javascript
// sketch.js

function setup() {
  // Create the 'main' canvas
  createCanvas(800, 400);

  // Effects: 'this' p5 sketch is passed as argument
  const effects = new Effects(this);

  // I start with defining random colors
  const brand = effects.colors.any();
  const bright = effects.colors.bright();
  const dark = effects.colors.dark();

  // Then I define some colorful hatches
  // All hatches take width, height, density, color and weight
  // A new p5.Graphics buffer with the hatch is returned to the variable
  const grain = effects.hatches.grain(width, height, random(), brand, random(3));
  const stripes = effects.hatches.stripes(width, height,  random(), dark,  random(3));
  const bars = effects.hatches.bars(width, height,  random(), dark,  random(3));

  // Rendering with ps's image() function
  background(bright);
  image(grain, 0, 0);
  image(stripes, 0, 0);
  image(bars, 0, 0);

  // Post process?
  image(effects.pixels.glitch(this.get()), 0, 0);
}
```

## Available methods

### choices
- ```probability(val)``` Returns true if val is larger than  - ```random()```
- ```sometimes()``` Returns true with 0.5 probability
- ```often()``` Returns true with 0.9 probability
- ```rarely()``` Returns true with 0.1 probability

### numbers
- ```fuzzy(val)``` A slightly changed or dramtically reduced value
- ```offset(val, off)``` A value changed by -off *minimally* and+off *maximally*
- ```random``` A value between zero and one

### colors
- ```any()``` A random color
- ```bright()``` A bright random color
- ```dark()``` A dark random color
- ```shade(col)``` A random deviation from a given color
- ```anySet(len)``` An array with a fixed number of random colors
- ```shadeSet(len)``` An array with a fixed number of deviations from a given color

### hatches
- ```bars(width, height, density, col)``` Vertical lines in
- ```stripes(width, height, density, col)``` Horizontal lines
- ```corroded(width, height, density, col)``` A grid of randomized lines
- ```dots(width, height, density, col)``` A grid of points
- ```grain(width, height, density, col)``` Random points

### pixels
- ```spread(buffer``` Randomly spread colors within the current row.
- ```fuzzed(buffer)``` Less spreaded colors within the current row.
- ```glitch(buffer)``` A bunch of overlays with pixel sorting and reversing
- ```linify(buffer)``` A grid of lines with atributes mapped to colors
- ```mosaic(buffer``` Slices the given buffer in a grid and colors the cells
- ```puzzle(buffer``` Slices the given buffer in a smaller images and rearranges
- ```shift(buffer``` Similar to glitch but different
- ```shrink(buffer``` Shrinks the image into itself a number of times

### textures (under construction)
- ```circles```
- ```striped```

## For developers and nerds

### Important p5.js concepts you should know
- Load an image: https://p5js.org/reference/#/p5/loadImage
- Display images (or buffers): https://p5js.org/reference/#/p5/image
- Graphics buffers: https://p5js.org/reference/#/p5/createGraphics
- Color: https://p5js.org/reference/#/p5/color
- How p5 works generally: https://github.com/processing/p5.js/wiki/Global-and-instance-mode

### Tools I am using here
This will install the node modules I use for the development. You can check the [package.json](/package.json) for a full list. Briefly said it will install a very simple Webpack/Typescript/p5 setup for you. Having said that, because sometimes it can be strange with node modules...

### Install

```bash
# Clone the repository
git clone git@github.com:matthias-jaeger-net/p5-toolkit.git

# Navigate in the directory
cd p5-toolkit

# Install the development tools
npm install
```


### Available scripts
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