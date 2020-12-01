/**
 * p5-global-effects.js
 * A collection of useful tools and effects
 *
 * Author: Matthias Jäger
 * Date: 2020-11-27
 */

const Effects = {

}


// eslint-disable-next-line no-unused-vars
class Effects {
  constructor(context) {
    this.context = context;
    // eslint-disable-next-line no-console
    console.log('Effects running');
  }

  randomOffset(val, off) {
    return val + this.context.random(-off, off);
  }

  randomZeroOne() {
    return this.context.random(0.0, 1.0);
  }

  randomProb() {
    return this.randomZeroOne() > 0.50;
  }

  givenProb(prob) {
    return this.randomZeroOne() > prob;
  }

  fuzzyValue(val) {
    return (this.randomProb() ? this.randomOffset(val, 10.0) : this.context.random(val));
  }

  randomShaped(min, max) {
    const r = this.context.random(min, max);
    const g = this.context.random(min, max);
    const b = this.context.random(min, max);
    return this.context.color(r, g, b);
  }

  randomColor() {
    return this.randomShaped(0, 255);
  }

  randomBrightColor() {
    return this.randomShaped(155, 255);
  }

  randomDarkColor() {
    return this.randomShaped(0, 90);
  }

  shadedColor(col) {
    const r = this.randomOffset(this.context.red(col), 10);
    const g = this.randomOffset(this.context.green(col), 10);
    const b = this.randomOffset(this.context.blue(col), 10);
    return this.context.color(r, g, b);
  }

  shadedColorOff(col, off) {
    const r = this.randomOffset(this.context.red(col), off);
    const g = this.randomOffset(this.context.green(col), off);
    const b = this.randomOffset(this.context.blue(col), off);
    return this.context.color(r, g, b);
  }

  randomPalette(col, len) {
    const arr = [col];
    for (let i = 1; i < len; i += 1) arr[i] = this.randomColor();
    return arr;
  }

  relatedPalette(col, len) {
    const arr = [col];
    const maxOffset = 50.0;
    for (let i = 1; i < len; i += 1) {
      arr[i] = this.shadedColorOff(col, maxOffset);
    }
    return arr;
  }

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

  hatchHorizontal(w, h, d, col) {
    const gfx = this.context.createGraphics(w, h);
    const scl = gfx.height * d;
    for (let y = 0; y < gfx.height; y += scl) {
      gfx.stroke(col);
      gfx.line(0, y, gfx.width, y);
    }
    return gfx;
  }

  hatchVertical(w, h, d, col) {
    const gfx = this.context.createGraphics(w, h);
    const scl = gfx.width * d;
    for (let x = 0; x < gfx.width; x += scl) {
      gfx.stroke(col);
      gfx.line(x, 0, x, gfx.height);
    }
    return gfx;
  }

  hatchGrid(w, h, d) {
    const gfx = this.context.createGraphics(w, h);
    gfx.image(this.hatchHorizontal(w, h, d), 0, 0);
    gfx.image(this.hatchVertical(w, h, d), 0, 0);
    return gfx;
  }

  randomBlurX(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    const bufferPixels = buffer.get();
    gfx.loadPixels();
    for (let y = 0; y < buffer.height; y += 1) {
      for (let x = 0; x < buffer.width; x += 1) {
        const offX = this.context.floor(this.context.random(x));
        const col = bufferPixels.get(offX, y);
        gfx.set(x, y, col);
      }
    }
    gfx.updatePixels();
    return gfx;
  }

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

  glitchArea(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    gfx.loadPixels();
    for (let x = 0; x < gfx.width; x += 1) {
      const colors = [];
      for (let y = 0; y < buffer.height; y += 1) {
        colors.push(buffer.get(x, y));
      }
      colors.sort();
      for (let y = 0; y < gfx.height; y += 1) {
        gfx.set(x, y, colors[y]);
      }
    }
    gfx.updatePixels();
    return gfx;
  }

  glitchY(buffer) {
    const gfx = this.context.createGraphics(buffer.width, buffer.height);
    gfx.image(buffer, 0, 0);
    for (let t = 0; t < 550; t += 1) {
      const x = this.context.random(buffer.width);
      const y = this.context.random(buffer.height);
      const ox = this.context.random(-20, 20);
      const w = this.context.floor(this.context.random(1, 100));
      const h = this.context.floor(this.context.random(1, 100));
      const g = buffer.get(x, y, w, h);
      gfx.image(this.glitchArea(g), x + ox, y);
    }
    return gfx;
  }

  /** MASKING EFFECTS */

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


  randomLight(buffer) {
    return buffer.pointLight(255, 255, 255,
      this.context.random(-buffer.width * 0.5, buffer.width * 0.5),
      this.context.random(-buffer.height * 0.5, buffer.height * 0.5),
      this.context.random(-buffer.width * 0.5, buffer.width * 0.5));
  }

  randomColoredLight(buffer, col) {
    const r = this.context.red(col);
    const g = this.context.green(col);
    const b = this.context.blue(col);
    const x = this.context.random(-buffer.width * 0.5, buffer.width * 0.5);
    const y = this.context.random(-buffer.height * 0.5, buffer.height * 0.5);
    const z = this.context.random(-buffer.width * 0.5, buffer.width * 0.5);
    return buffer.pointLight(r, g, b, x, y, z);
  }
}
