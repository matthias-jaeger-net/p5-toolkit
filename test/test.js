function setup() {
  const canvas = createCanvas(800, 400);
  const effects = new Effects(this);
  if (effects) {
    console.log('Effects available');
    console.log('randomColor() > ' + effects.randomColor());
    console.log('randomBrightColor() > ' + effects.randomBrightColor());
    console.log('randomDarkColor() > ' + effects.randomDarkColor());
    console.log('randomShapeColor(100, 155) > ' + effects.randomShapeColor(100, 155));
    console.log('fuzzyValue(' + 10 + ') > ' + effects.fuzzyValue(10));
    console.log('randomOffset(10, 1) > ' + effects.randomOffset(10, 0.5));
    console.log('randomProb() > ' + effects.randomProb());
    console.log('randomZeroOne() > ' + effects.randomZeroOne());
  }
}