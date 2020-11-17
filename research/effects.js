/**
 * p5-global-effects.js
 * Author: Matthias Jäger
 * Date: 2020-15-11
 * Licence: MIT
 * Depends on p5 in global mode
 */

/** RANDOM NUMBER TOOLS */

// Returns a value with random positive or negative offset
const randomOffset = (val, off) => val + random(-off, off);

// Shorthand for a random number between 0 and 1
const randomZeroOne = () => random(0.0, 1.0);

// Returns true with a 50% percent probability
const randomProb = () => randomZeroOne() > 0.50;

// Returns true/false by given probability
const givenProb = (prob) => randomZeroOne() > prob;

// Returns a either a slightly changed or dramtically reduced value
const fuzzyValue = (val) => (randomProb() ? randomOffset(val, 10.0) : random(val));

/** COLOR TOOLS */

// Returns a random color within the given bounds
const randomShaped = (min, max) => color(random(min, max), random(min, max), random(min, max));

// Returns a random color
const randomColor = () => randomShaped(0, 255);

// Returns a random color that is bright
const randomPastelColor = () => randomShaped(155, 255);

// Returns a random color that is dark
const randomDarkColor = () => randomShaped(0, 90);

// Returns a randomly changed color
const shadedColor = (col) => color(randomOffset(red(col), 10),
  randomOffset(green(col), 10), randomOffset(blue(col), 10));

// Returns a randomly changed color and public offset
const shadedColorOff = (col, off) => color(randomOffset(red(col), off),
  randomOffset(green(col), off), randomOffset(blue(col), off));

/** COLOR PALETTES */

// Returns a color palette with a number of colors and a initial color
function randomPalette(col, len) {
  const arr = [col];
  for (let i = 1; i < len; i += 1) arr[i] = randomColor();
  return arr;
}

// Returns a color palette with colors based on the initial color
function relatedPalette(col, len) {
  const arr = [col];
  const maxOffset = 50.0;
  for (let i = 1; i < len; i += 1) {
    arr[i] = shadedColorOff(col, maxOffset);
  }
  return arr;
}

/** COLOR ABSTRACTIONS */

// Convert pixels from a buffer in a 2D Array of colors
function grid2d(buffer) {
  const arr = [];
  for (let x = 0; x < buffer.width; x += 1) {
    const row = [];
    for (let y = 0; y < buffer.height; y += 1) {
      row.push(buffer.get(x, y));
    }
    arr.push(row);
  }
  return arr;
}

// Returns a buffer from 2D color array
const gridToBuffer = (buffer, grid) => {
  const gridToBuffer = createGraphics(buffer.width, buffer.height);
  gridToBuffer.loadPixels();
  for (let x = 0; x < gridToBuffer.width; x++) {
    for (let y = 0; y < gridToBuffer.height; y++) {
      gridToBuffer.set(x, y, grid[x][y]);
    }
  }
  gridToBuffer.updatePixels();
  return gridToBuffer;
};

/** TEXTURE GENERATORS */

// Returns a randomly striped graphics buffer
const stripes = (res, colors) => {
  const stripes = createGraphics(res, res);
  for (let x = 0; x < stripes.width; x++) {
    const mapping = colors[floor(map(x, 0, stripes.width, 0, colors.length))];
    const c = (randomProb()) ? mapping : random(colors);
    stripes.stroke(shadedColor(c));
    stripes.line(x, 0, x, stripes.height);
  }
  return stripes;
};

// Returns a randomly dotted graphics buffer
function dots(res, colors) {
  const gfx = createGraphics(res, res);
  gfx.background(random(colors));
  gfx.noStroke();
  for (let x = 0; x < res; x += 1) {
    gfx.fill(shadedColor(random(colors)));
    gfx.circle(random(gfx.width), random(gfx.height), random(res * 0.3));
  }
  return gfx;
}

// Passes either stripes or dots as texture
function randomTexture(res, colors) {
  return randomProb() ? dots(res, colors) : stripes(res, colors);
}

/** PIXEL EFFECTS */

// Returns a graphics buffer with dramatically changed colors
function randomBlurX(buffer) {
  const gfx = createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  gfx.loadPixels();
  for (let y = 0; y < buffer.width; y += 1) {
    for (let x = 0; x < buffer.height; x += 1) {
      const col = bufferPixels.get(floor(random(x)), y);
      gfx.set(x, y, col);
    }
  }
  gfx.updatePixels();
  return gfx;
}

// Returns a graphics buffer with dramatically changed colors
function fuzzyBlurX(buffer) {
  const gfx = createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  gfx.loadPixels();
  for (let x = 0; x < buffer.width; x += 1) {
    for (let y = 0; y < buffer.height; y += 1) {
      const col = bufferPixels.get(fuzzyValue(x), y);
      gfx.set(x, y, col);
    }
  }
  gfx.updatePixels();
  return gfx;
}

// shiftedPixels
function shiftedPixels(buffer) {
  const gfx = createGraphics(buffer.width, buffer.height);
  const grid = grid2d(buffer);
  for (let x = 0; x < gfx.width; x += 1) {
    const offset = floor(random(gfx.width * 0.5));
    const cs = [];
    const max = grid[x].length;
    for (let y = max - offset; y < max; y += 1) {
      cs.push(grid[x][y]);
    }
    for (let y = offset; y < max - offset; y += 1) {
      cs.push(grid[x][y]);
    }
    for (let y = 0; y < offset; y += 1) {
      cs.push(grid[x][y]);
    }
    grid[x] = randomProb() ? cs.sort() : cs;
  }
  return gridToBuffer(gfx, grid);
}

// Returns a graphics buffer with grid of squares
function mosaic(buffer) {
  const gfx = createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  gfx.noStroke();
  const s = buffer.width / 100.0;
  for (let x = 0; x < buffer.width; x += s) {
    for (let y = 0; y < buffer.height; y += s) {
      const col = bufferPixels.get(x, y);
      gfx.fill(col);
      gfx.rect(x, y, s, s);
    }
  }
  return gfx;
}

/** LIGHT EFFECTS */

// Sets a white light in a random position in a buffer
function randomLight(buffer) {
  return buffer.pointLight(255, 255, 255,
    random(-buffer.width * 0.5, buffer.width * 0.5),
    random(-buffer.height * 0.5, buffer.height * 0.5),
    random(-buffer.width * 0.5, buffer.width * 0.5));
}

// Sets a colored light in a random position in a buffer
function randomColoredLight(buffer, col) {
  return buffer.pointLight(red(col), green(col), blue(col),
    random(-buffer.width * 0.5, buffer.width * 0.5),
    random(-buffer.height * 0.5, buffer.height * 0.5),
    random(-buffer.width * 0.5, buffer.width * 0.5));
}

// MASKING EFFECTS

// Masking
function grainMask(buffer, prob) {
  const grainMask = buffer.get();
  const masking = createGraphics(buffer.width, buffer.height);
  for (let x = 0; x < masking.width; x++)
    for (let y = 0; y < masking.height; y++)
      if (givenProb(prob))
        masking.point(x, y);
  grainMask.mask(masking.get());
  return grainMask;
}

const linesMask = (buffer, prob) => {
  const grainMask = buffer.get();
  const masking = createGraphics(buffer.width, buffer.height);
  for (let y = 0; y < masking.height; y++)
    if (givenProb(prob)) masking.line(0, y, masking.width, y);
  grainMask.mask(masking.get());
  return grainMask
}