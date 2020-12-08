test('Do I like unit testing?', () => {
  expect(1).toBe(1);
});

test('Can I import my script here?', () => {
  const Effects = require('../dist/p5-global-effects.min.js');
  expect(Effects).toBeDefined();
});

test('Is "randomColor" defined in Effects?', () => {
  const Effects = require('../dist/p5-global-effects.min.js');
  const effects = new window.Effects(this);
  expect(effects.randomColor).toBeDefined();
});

test('Can I import p5 here?', () => {
  const p5 = require('../node_modules/p5/lib/p5');
  expect(p5).toBeDefined();
});

test('Does it make sense to unit-test creative code?', () => {
  const p5 = require('../node_modules/p5/lib/p5');
  const sketch = require('./sketch');
  expect(myp5).toBeDefined();
});

/*
test('Can I import my script here?', () => {
  const p5 = require('../node_modules/p5/lib/p5');
  const Effects = require('../dist/p5-global-effects.min.js');

  let sketch = function (p) {
    p.setup = function () {
      p.createCanvas(100, 100);
      p.background(0);
    }
  };
  let node = document.createElement('div');
  window.document.getElementsByTagName('body')[0].appendChild(node);
  new p5(sketch, node);
  expect(p5).toBeDefined();

});*/