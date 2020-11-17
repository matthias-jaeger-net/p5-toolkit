/**
 * p5-global-effects.js
 * A collection of useful tools and effects
 *
 * Author: Matthias Jäger
 * Date: 2020-11-17
 */
// eslint-disable-next-line no-unused-vars
class Effects {
  constructor(context) {
    this.context = context;
    // eslint-disable-next-line no-console
    console.log('Effects running');
  }
  /** RANDOM NUMBER TOOLS */

  // Returns a value with random positive or negative offset
  randomOffset(val, off) {
    return val + this.context.random(-off, off);
  }

  // Shorthand for a random number between 0 and 1
  randomZeroOne() {
    return this.context.random(0.0, 1.0);
  }

  // Returns true with a 50% percent probability
  randomProb() {
    return this.randomZeroOne() > 0.50;
  }

  // Returns true/false by given probability
  givenProb(prob) {
    return this.randomZeroOne() > prob;
  }

  // Returns a either a slightly changed or dramtically reduced value
  fuzzyValue(val) {
    return (this.randomProb() ? this.randomOffset(val, 10.0) : random(val));
  }

  /** COLOR TOOLS */

  // Returns a random color within the given bounds
  randomShaped(min, max) {
    const r = this.context.random(min, max);
    const g = this.context.random(min, max);
    const b = this.context.random(min, max);
    return this.context.color(r, g, b);
  }

  // Returns a random color
  randomColor() {
    return this.randomShaped(0, 255);
  }

  // Returns a random color that is bright
  randomPastelColor() {
    return this.randomShaped(155, 255);
  }

  // Returns a random color that is dark
  randomDarkColor() {
    return this.randomShaped(0, 90);
  }

  // Returns a randomly changed color
  shadedColor(col) {
    const r = this.randomOffset(this.context.red(col), 10);
    const g = this.randomOffset(this.context.green(col), 10);
    const b = this.randomOffset(this.context.blue(col), 10);
    return this.context.color(r, g, b);
  }

  // Returns a randomly changed color and public offset
  shadedColorOff(col, off) {
    const r = this.randomOffset(this.context.red(col), off);
    const g = this.randomOffset(this.context.green(col), off);
    const b = this.randomOffset(this.context.blue(col), off);
    return this.context.color(r, g, b);
  }

  /** COLOR PALETTES */

  // Returns a color palette with a number of colors and a initial color
  randomPalette(col, len) {
    const arr = [col];
    for (let i = 1; i < len; i += 1) arr[i] = this.randomColor();
    return arr;
  }

  // Returns a color palette with colors based on the initial color
  relatedPalette(col, len) {
    const arr = [col];
    const maxOffset = 50.0;
    for (let i = 1; i < len; i += 1) {
      arr[i] = this.shadedColorOff(col, maxOffset);
    }
    return arr;
  }

  /** TEXTURE GENERATORS */

  // Returns a randomly striped graphics buffer
  stripes(res, colors) {
    const stripes = this.context.createGraphics(res, res);
    for (let x = 0; x < stripes.width; x += 1) {
      const mapping = this.context.map(x, 0, stripes.width, 0, colors.length);
      const index = this.context.floor(mapping);
      const mappedColor = colors[index];
      const randomizedColor = this.context.random(colors);
      const fuzzyColor = (this.randomProb()) ? mappedColor : randomizedColor;
      stripes.stroke(this.shadedColor(fuzzyColor));
      stripes.line(x, 0, x, stripes.height);
    }
    return stripes;
  }

  // Returns a randomly dotted graphics buffer
  dots(res, colors) {
    const gfx = this.context.createGraphics(res, res);
    gfx.background(this.context.random(colors));
    gfx.noStroke();
    for (let t = 0; t < res; t += 1) {
      const col = this.shadedColor(this.context.random(colors));
      const x = this.context.random(gfx.width);
      const y = this.context.random(gfx.height);
      const d = this.context.random(res * 0.3);
      gfx.fill(col);
      gfx.circle(x, y, d);
    }
    return gfx;
  }

  /** PIXEL EFFECTS */

  // Returns a graphics buffer with dramatically changed colors
  randomBlurX(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    const bufferPixels = buffer.get();
    gfx.loadPixels();
    for (let y = 0; y < buffer.width; y += 1) {
      for (let x = 0; x < buffer.height; x += 1) {
        const offX = this.context.floor(this.context.random(x));
        const col = bufferPixels.get(offX, y);
        gfx.set(x, y, col);
      }
    }
    gfx.updatePixels();
    return gfx;
  }

  // Returns a graphics buffer with dramatically changed colors
  fuzzyBlurX(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    const bufferPixels = buffer.get();
    gfx.loadPixels();
    for (let x = 0; x < buffer.width; x += 1) {
      for (let y = 0; y < buffer.height; y += 1) {
        const col = bufferPixels.get(this.fuzzyValue(x), y);
        gfx.set(x, y, col);
      }
    }
    gfx.updatePixels();
    return gfx;
  }

  mosaic(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    const design = buffer.get();
    gfx.noStroke();
    const s = buffer.width / 100.0;
    for (let x = 0; x < buffer.width; x += s) {
      for (let y = 0; y < buffer.height; y += s) {
        const col = design.get(x, y);
        gfx.fill(col);
        gfx.rect(x, y, s, s);
      }
    }
    return gfx;
  }

  shiftedPixels(buffer) {
    const grid = [];
    for (let x = 0; x < buffer.width; x += 1) {
      const row = [];
      for (let y = 0; y < buffer.height; y += 1) {
        row.push(buffer.get(x, y));
      }
      grid.push(row);
    }

    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    for (let x = 0; x < gfx.width; x += 1) {
      const offset = this.context.floor(this.context.random(gfx.width * 0.5));
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
      grid[x] = this.randomProb() ? cs.sort() : cs;
    }

    gfx.loadPixels();
    for (let x = 0; x < gfx.width; x += 1) {
      for (let y = 0; y < gfx.height; y += 1) {
        gfx.set(x, y, grid[x][y]);
      }
    }
    gfx.updatePixels();
    return gfx;
  }

  /** LIGHT EFFECTS */

  // Sets a white light in a random position in a buffer
  randomLight(buffer) {
    return buffer.pointLight(255, 255, 255,
      this.context.random(-buffer.width * 0.5, buffer.width * 0.5),
      this.context.random(-buffer.height * 0.5, buffer.height * 0.5),
      this.context.random(-buffer.width * 0.5, buffer.width * 0.5));
  }

  // Sets a colored light in a random position in a buffer
  randomColoredLight(buffer, col) {
    const r = this.context.red(col);
    const g = this.context.green(col);
    const b = this.context.blue(col);
    const x = this.context.random(-buffer.width * 0.5, buffer.width * 0.5);
    const y = this.context.random(-buffer.height * 0.5, buffer.height * 0.5);
    const z = this.context.random(-buffer.width * 0.5, buffer.width * 0.5);
    return buffer.pointLight(r, g, b, x, y, z);
  }

  /** MASKING EFFECTS */

  // Returns a buffer with a grainy alpha mask
  grainMask(buffer, prob) {
    const gfx = buffer.get();
    const masking = this.context.createGraphics(buffer.width, buffer.height);
    for (let x = 0; x < masking.width; x += 1) {
      for (let y = 0; y < masking.height; y += 1) {
        if (this.givenProb(prob)) {
          masking.point(x, y);
        }
      }
    }
    gfx.mask(masking.get());
    return gfx;
  }

  // Returns a buffer with a striped alpha mask
  linesMask(buffer, prob) {
    const gfx = buffer.get();
    const masking = this.context.createGraphics(buffer.width, buffer.height);
    for (let y = 0; y < masking.height; y += 1) {
      if (this.givenProb(prob)) {
        masking.line(0, y, masking.width, y);
      }
    }
    gfx.mask(masking.get());
    return gfx;
  }
}
