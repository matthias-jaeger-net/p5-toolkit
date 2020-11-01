# p5-toolkit
Some useful functions for p5 in global mode

## Pixel glitch effects

```javascript
function fuzzyX(design, fuzzyness) {
  const effect = createGraphics(design.width, design.height);
  effect.loadPixels();
  for (let y = 0; y < effect.height; y++) {
    for (let x = 0; x < effect.width; x++) {
      const fuzzyX = floor(random(x - random(fuzzyness), x + random(fuzzyness)));
      const c = design.get(fuzzyX, y);
      effect.set(x, y, c);
    }
  }
  effect.updatePixels();
  return effect;
}


function setup() {
  createCanvas(800, 800);

  const design = createGraphics(width, height, WEBGL);
  design.background("#A542EF");
  design.noStroke();
  design.fill("#1442FE");
  design.sphere(180);
  design.loadPixels();
  
  image(fuzzyX(design, 100), 0, 0);
}
