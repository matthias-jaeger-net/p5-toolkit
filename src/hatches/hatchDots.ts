import p5 from 'p5';

export function hatchDots(context: p5, buffer: p5, density: number, col: p5.Color) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const ammount = (buffer.width * buffer.height) * density;
  for (let times = 0; times < ammount; times += 1) {
    const x = context.random(gfx.width);
    const y = context.random(gfx.height);
    gfx.point(x, y);
  }
  return gfx;
}
