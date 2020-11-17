/**
 * p5-global-effects.js
 * A collection of useful tools and effects
 *
 * Author: Matthias Jäger
 * Date: 2020-11-17
 */
// eslint-disable-next-line no-unused-vars
class Effects {
  /** RANDOM NUMBER TOOLS */

  // Returns a value with random positive or negative offset
  static randomOffset(val, off) {
    return val + random(-off, off);
  }

  // Shorthand for a random number between 0 and 1
  static randomZeroOne() {
    return random(0.0, 1.0);
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
  static randomShaped(min, max) {
    return color(random(min, max), random(min, max), random(min, max));
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
    const r = this.randomOffset(red(col), 10);
    const g = this.randomOffset(green(col), 10);
    const b = this.randomOffset(blue(col), 10);
    return color(r, g, b);
  }

  // Returns a randomly changed color and public offset
  shadedColorOff(col, off) {
    const r = this.randomOffset(red(col), off);
    const g = this.randomOffset(green(col), off);
    const b = this.randomOffset(blue(col), off);
    return color(r, g, b);
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

  /** COLOR ABSTRACTION GRIDS */

  // Convert pixels from a buffer in a 2D Array of colors
  static grid2d(buffer) {
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
  static gridToBuffer(buffer, grid) {
    const gridToBuffer = createGraphics(buffer.width, buffer.height);
    gridToBuffer.loadPixels();
    for (let x = 0; x < gridToBuffer.width; x += 1) {
      for (let y = 0; y < gridToBuffer.height; y += 1) {
        gridToBuffer.set(x, y, grid[x][y]);
      }
    }
    gridToBuffer.updatePixels();
    return gridToBuffer;
  }

  /** TEXTURE GENERATORS */

  // Returns a randomly striped graphics buffer
  stripes(res, colors) {
    const stripes = createGraphics(res, res);
    for (let x = 0; x < stripes.width; x += 1) {
      const mapping = colors[floor(map(x, 0, stripes.width, 0, colors.length))];
      const c = (this.randomProb()) ? mapping : random(colors);
      stripes.stroke(this.shadedColor(c));
      stripes.line(x, 0, x, stripes.height);
    }
    return stripes;
  }

  // Returns a randomly dotted graphics buffer
  dots(res, colors) {
    const gfx = createGraphics(res, res);
    gfx.background(random(colors));
    gfx.noStroke();
    for (let x = 0; x < res; x += 1) {
      gfx.fill(this.shadedColor(random(colors)));
      gfx.circle(random(gfx.width), random(gfx.height), random(res * 0.3));
    }
    return gfx;
  }

  /** PIXEL EFFECTS */

  // Returns a graphics buffer with dramatically changed colors
  static randomBlurX(buffer) {
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
  fuzzyBlurX(buffer) {
    const gfx = createGraphics(buffer.width, buffer.height);
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

  static mosaic(buffer) {
    const gfx = createGraphics(buffer.width, buffer.height);
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
    const gfx = createGraphics(buffer.width, buffer.height);
    const grid = this.grid2d(buffer);
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
      grid[x] = this.randomProb() ? cs.sort() : cs;
    }
    return this.gridToBuffer(gfx, grid);
  }

  /** LIGHT EFFECTS */

  // Sets a white light in a random position in a buffer
  static randomLight(buffer) {
    return buffer.pointLight(255, 255, 255,
      random(-buffer.width * 0.5, buffer.width * 0.5),
      random(-buffer.height * 0.5, buffer.height * 0.5),
      random(-buffer.width * 0.5, buffer.width * 0.5));
  }

  // Sets a colored light in a random position in a buffer
  static randomColoredLight(buffer, col) {
    return buffer.pointLight(red(col), green(col), blue(col),
      random(-buffer.width * 0.5, buffer.width * 0.5),
      random(-buffer.height * 0.5, buffer.height * 0.5),
      random(-buffer.width * 0.5, buffer.width * 0.5));
  }

  /** MASKING EFFECTS */

  // Returns a buffer with a grainy alpha mask
  grainMask(buffer, prob) {
    const grainMask = buffer.get();
    const masking = createGraphics(buffer.width, buffer.height);
    for (let x = 0; x < masking.width; x += 1) {
      for (let y = 0; y < masking.height; y += 1) {
        if (this.givenProb(prob)) {
          masking.point(x, y);
        }
      }
    }
    grainMask.mask(masking.get());
    return grainMask;
  }

  // Returns a buffer with a striped alpha mask
  linesMask(buffer, prob) {
    const grainMask = buffer.get();
    const masking = createGraphics(buffer.width, buffer.height);
    for (let y = 0; y < masking.height; y += 1) {
      if (this.givenProb(prob)) {
        masking.line(0, y, masking.width, y);
      }
    }
    grainMask.mask(masking.get());
    return grainMask;
  }
}
