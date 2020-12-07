const p5 = require('../node_modules/p5/lib/p5');
const s = ( p ) => {
  p.setup = function() {
    p.createCanvas(700, 410);
    const effects = new Effects(this);
    const col = 12;
  };
};

let myp5 = new p5(s, 'canvas');