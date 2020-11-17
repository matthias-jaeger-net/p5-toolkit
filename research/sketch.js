// eslint-disable-next-line no-unused-vars
function setup() {
  createCanvas(800, 800);
  background(220);
  // 1.) Pixel effects

  const design = createGraphics(width, height, WEBGL);
  const themeColor = color(255, 0, 0);
  const colors = randomPalette(themeColor, 7);
  design.noStroke();
  design.image(mosaic(dots(width, colors)), -400, -400);
  design.rotateX(random(TAU));
  design.rotateY(random(TAU));
  design.rotateZ(random(TAU));
  design.pointLight(255, 255, 255, 0, 0, 400);
  design.texture(stripes(width, colors));
  design.box(400);
  design.translate(0, 0, -200);
  design.box(600, 600, 10);
  design.translate(0, 0, 400);
  design.box(600, 600, 10);

  // design.fill(90)
  // design.rect(0, 0, 200, 300);
  // image(design, 0, 0);
  // blendMode(EXCLUSION)
  image(mosaic(design), 0, 0);
  // image(fuzzyBlurX(design), 0, 0);
  // image(randomBlurX(design), 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // 2D Example
  // const design = createGraphics(width, height);
  // design.ellipse(width * 0.5, height * 0.5, width * 0.6, height * 0.6);
  // image(design, 0, 0);
  // Render the design with an effect
  // image(randomBlurX(design), 0, 0);
  // image(fuzzyBlurX(design), 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // 3D Example
  // const design = createGraphics(width, height, WEBGL);
  // design.sphere(width * 0.3);
  // image(design, 0, 0);
  // Render the design with an effect
  // image(randomBlurX(design), 0, 0);
  // image(fuzzyBlurX(design), 0, 0);
  // image(shiftedPixels(design), 0, 0);
  // image(mosaic(design), 0, 0);

  // 2.) Texture effects combined with Pixel effects

  // Monochrome 2D Texture Example
  // const design = createGraphics(width, height);
  // design.image(dots(width, ["#000000", "#FFFFFF"]), 0, 0);
  // image(design, 0, 0);
  // Render the design with an effect
  // image(randomBlurX(design), 0, 0);
  // image(fuzzyBlurX(design), 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // Monochrome 3D Texture Example
  // const design = createGraphics(width, height, WEBGL);
  // design.noStroke();
  // design.image(dots(width, ["#000000", "#FFFFFF"]), -width * 0.5, -height * 0.5);
  // design.texture(stripes(width, ["#000000", "#FFFFFF"]))
  // design.sphere(width * 0.3);
  // image(design, 0, 0);
  // Render the design with an effect
  // image(randomBlurX(design), 0, 0);
  // image(fuzzyBlurX(design), 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // Monochrome 3D Texture Example with chained effects
  // const design = createGraphics(width, height, WEBGL);
  // const colors = ["#000000", "#FFFFFF"];
  // design.noStroke();
  // design.image(shiftedPixels(dots(width, colors)), -width * 0.5, -height * 0.5);
  // design.texture(fuzzyBlurX(stripes(width, colors)));
  // design.sphere(width * 0.3);
  // image(design, 0, 0);

  // 3.) Color effects

  // Using the custom random color functions in a design
  // const design = createGraphics(width, height);
  // design.background(randomPastelColor());
  // design.strokeWeight(50.0);
  // design.stroke(randomDarkColor());
  // design.fill(randomColor());
  // design.ellipse(width * 0.5, height * 0.5, width * 0.6, height * 0.6);
  // image(design, 0, 0);

  // Using a static colors array with a texture
  // const colors = [ "#AA22DD", "#3388FF" ];
  // const design = createGraphics(width, height);
  // design.image(dots(width, colors), 0, 0);
  // image(design, 0, 0);

  // Using a procedural colors array with a texture
  // const themeColor = color(255, 0, 0);
  // const colors = randomPalette(themeColor, 7);
  // const colors = relatedPalette(themeColor, 7);
  // const design = createGraphics(width, height);
  // design.image(dots(width, colors), 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // 4.) Blending effects
  // WEBGL & 2D
  // blendMode(BLEND);
  // blendMode(ADD);
  // blendMode(DARKEST);
  // blendMode(LIGHTEST);
  // blendMode(DIFFERENCE);
  // blendMode(EXCLUSION);
  // blendMode(MULTIPLY);
  // blendMode(SCREEN);
  // blendMode(REPLACE);
  // blendMode(REMOVE);

  // Only 2D
  // blendMode(OVERLAY);
  // blendMode(HARD_LIGHT);
  // blendMode(SOFT_LIGHT);

  // Only WEBGL
  // blendMode(DODGE BURN);
  // blendMode(SUBTRACT);

  // Using a procedural colors array with a texture
  // const themeColor = color(255, 0, 0);
  // const colors = randomPalette(themeColor, 7);
  // const design = createGraphics(width, height);
  // design.image(fuzzyBlurX(dots(width, colors)), 0, 0);
  // blendMode(EXCLUSION);
  // image(design, 0, 0);
  // image(shiftedPixels(design), 0, 0);

  // 5.) Maskings effects
  // image(linesMask(design, 0.5), 0, 0);
  // image(grainMask(design, 0.5), 0, 0);

  // 4.) Chaining effects

  // 2D Example
  // const design = createGraphics(width, height);
  // design.ellipse(width * 0.5, height * 0.5, width * 0.6, height * 0.6);
  // image(randomBlurX(shiftedPixels(design)), 0, 0);
  // image(shiftedPixels(randomBlurX(design)), 0, 0);
}
