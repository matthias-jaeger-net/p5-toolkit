let myp5 = new p5(( sketch ) => {
  let img;
  sketch.preload = () => {
    img = sketch.loadImage('Shannon-Kunkle.png');
  }

  sketch.setup = () => {
    sketch.createCanvas(img.width, img.height);
    const effects = new Effects(this);
    sketch.image(effects.randomBlurX(sketch.img.get(0, 0, img.width / 2, this.img.height)), 0, 0);
    sketch.image(img.get(img.width / 2, 0, img.width, img.height), img.width / 2, 0);
  }
});
let myp5 = new p5(s, document.getElementById('sketch'));