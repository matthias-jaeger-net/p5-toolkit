function bright() {
  const max = 255;
  const min = 120;
  const r = random(min, max);
  const g = random(min, max);
  const b = random(min, max);
  const col = color(r, g, b);
  return col;
}

function dark() {
  const max = 100;
  const min = 0;
  const r = random(min, max);
  const g = random(min, max);
  const b = random(min, max);
  const col = color(r, g, b);
  return col;
}


function anyColor() {
  const max = 255;
  const r = random(max);
  const g = random(max);
  const b = random(max);
  const col = color(r, g, b);
  return col;
}

function anyPalette(len) {
  const palette = [];
  for (let i = 0; i < len; i += 1) {
    palette.push(anyColor());
  }
  return palette;
}

function relatedPalette(len, col) {
  const palette = [];
  let n = hue(col);
  let max = 360;
  let d = max / len;
  colorMode(HSB);
  let c;
  for (let angle = n; angle < max + n; angle += d) {
    if (angle > max) {
      c = color(abs(angle - max), saturation(col), brightness(col));
    } else {
      c = color(abs(angle), saturation(col), brightness(col));
    }
    palette.push(c)
  }
  colorMode(RGB);
  return palette;
}

function palette() {
  const brand = anyColor();
  const brandDark = dark();
  const brandLight = bright();
  return [
    brand,
    shade(brand),
    brandDark,
    brandLight,
  ]
}

function shade(col) {
  const max = 20;
  const h = hue(col);
  const s = saturation(col);
  const b = brightness(col);
  colorMode(HSB);
  const c = color(h, s, b + random(-max, max));
  colorMode(RGB);
  return c;
}


function setup() {
  createCanvas(800, 400);
  noStroke();
  const effects = new Effects(this);
  const p = palette();
  const max = 200;
  background(255);
  for (let x = 0; x < width; x += max) {
    for (let y = 0; y < height; y += max) {
      fill(shade(random(p)));
      rect(x, y, max, max);
    }
  }
  image(effects.stripes(this, 0.2, 255), 0, 0);
  image(effects.bars(this, 0.2, 255), 0, 0);
  //image(effects.glitchY(this), 0, 0);
}