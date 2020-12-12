// sketch.js

function setup() {
  // Create the 'main' canvas
  createCanvas(800, 400);

  // Create a new instance of Effects
  // 'this' p5 sketch is passed as argument
  const effects = new Effects(this);

  // I start with defining random colors
  // All colors return a p5 color
  const brand = effects.colors.any();
  const bright = effects.colors.bright();
  const dark = effects.colors.dark();

  // Then I define some colorful hatches
  // All hatches take width, height, density, color and weight
  // A new p5.Graphics buffer with the hatch is returned to the variable
  const grain = effects.hatches.grain(width, height, random(), brand, random(3));
  const stripes = effects.hatches.stripes(width, height,  random(), dark,  random(3));
  const bars = effects.hatches.bars(width, height,  random(), dark,  random(3));

  // Rendering
  background(bright);
  image(grain, 0, 0);
  image(stripes, 0, 0);
  image(bars, 0, 0);

  // Post process
  image(effects.pixels.glitch(this.get()), 0, 0);
}


/*function setup() {
  createCanvas(800, 400);
  const effects = new Effects(this);
  const bright = effects.colors.bright();
  const dark = effects.colors.dark();
  const randomHatchParams = () => { return [width, height, random(), bright, random()]; }

  textFont('Texturina');
  textSize(150);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  fill(dark);
  stroke(bright);
  image(effects.hatches.stripes(...randomHatchParams()), 0, 0);
  image(effects.hatches.bars(...randomHatchParams()), 0, 0);
  text('p5-toolkit', 400, 200);
  image(effects.pixels.shrink(this.get()), 0, 0);
  text('p5-toolkit', 400, 200);
  image(effects.pixels.glitch(this.get()), 0, 0);
  text('p5-toolkit', 400, 200);
  // save('cover.jpg');
}*/

  // const bright = effects.colors.bright();
  // const dark = effects.colors.dark();

  // const design = createGraphics(800, 400, WEBGL);
  // design.background(effects.colors.dark());

  // for (let t = 0; t < 100; t += 1) {
  //   design.push();
  //   design.translate(random(-400, 400), random(-200, 200));
  //   design.rotateY(random(TAU));
  //   design.box(random(100), random(100), random(100));
  //   design.pop();
  // }
  // image(design, 0, 0);

  // Hatches Test
  // const randomHatchParams = () => {
  //   return [width, height, random(), effects.colors.any(), random()];
  // }
  // image(effects.hatches.bars(...randomHatchParams()), 0, 0);
  // image(effects.hatches.stripes(...randomHatchParams()), 0, 0);
  // image(effects.hatches.dots(...randomHatchParams()), 0, 0);
  // image(effects.hatches.grain(...randomHatchParams()), 0, 0);
  // image(effects.hatches.corroded(width, height, random(), effects.colors.any(), 5), 0, 0);

  // image(effects.pixels.glitch(this.get()), 0, 0);
  // image(effects.pixels.spread(this.get()), 0, 0);
  // image(effects.pixels.mosaic(this.get()), 0, 0);
  // image(effects.pixels.fuzzy(this.get()), 0, 0);
  // image(effects.pixels.shrink(this.get()), 0, 0);
  // image(effects.pixels.shift(this.get()), 0, 0);
  // image(effects.pixels.puzzle(this.get()), 0, 0);
  // image(effects.pixels.linify(this.get()), 0, 0);

  //save('effects-manual-testing.jpg');
//}