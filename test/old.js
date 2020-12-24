/*)function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const design = createGraphics(200, height);
    const density = map(x, 0, width, 0.1, 1.0);
    design.image(effects.bars(design, density, color(0)), 0, 0);
    image(design, x, 0);
  }
  //save("bars.jpg");
}

/*)
function setup() {
  createCanvas(800, 400);
  background(255);
  textAlign(CENTER);
  textSize(12);
  const effects = new Effects(this);
  const design = createGraphic
  for (let x = 0; x < width; x += 200) {
    const density = map(x, 0, width, 0.01, 0.001);
    image(effects.dots(this, createVector(10, 10), color(0)), x, 0, 200, height-20);
  }
  //save("hatchDots.jpg");
}

*/


/*let img;

function preload() {
  img = loadImage('Shannon-Kunkle.png');
}

function setup() {
  createCanvas(800, 533);
  const effects = new Effects(this);
  image(effects.bufferStack(img.get(0, 0, 400, 533), 9), 0, 0);
  image(img.get(400, 0, 800, 533), 400, 0);
  //save("bufferStack.jpg");
}*/



/*function setup() {
  createCanvas(800, 400);
  background(255);
  const effects = new Effects(this);
  for (let x = 0; x < width; x += 200) {
    const col = map(x, 0, width, 0, 200);
    const density = map(x, 0, width, 1, 0.1);
    image(effects.hatchDots(this, density, col), x, 0, 200, height);
  }
  //save("hatchDots.jpg");
}*/

/*

let img;

function preload() {
  img = loadImage('Shannon-Kunkle.png');
}

function setup() {
  createCanvas(800, 533);
  const effects = new Effects(this);
  image(effects.gridScapes(img.get(0, 0, 400, 533), 9), 0, 0);
  image(img.get(400, 0, 800, 533), 400, 0);
  //save("gridScapes.jpg");
}
*/