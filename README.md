# p5-toolkit


## Basic rules for a single generative image
* Only use ```setup()``` and no animation loops
* Operating on graphics buffers with p5's ```createGraphics()```


## Pixel Effects
```javascript
/**
 *  Basic 2D / 2D Example
 */

// Import the effects
const effects = new Effects();

// Use the effects in your sketch
function setup() {
  // Creates the global buffer <canvas>
  createCanvas(800, 800);

  /* Design */
  // A random background color
  background(random(255), random(255), random(255));

  // Disable the deafult outline on shapes
  noStroke();

  // Set a random fill color
  fill(random(255), random(255), random(255));

  // Draw a circle shape in the center
  circle(width * 0.5, height * 0.5, width * 0.3);

  /* Apply the effects */
  // Get the current design pixeles
  const design = get();

  // Clear the stage
  clear();

  // Verbose:
  const myEffect = effects.mosaic(design);

  // Render the effect with the image() function
  image(myEffect, 0, 0);
}
