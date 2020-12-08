import p5 from 'p5';

export function hatchRandomDots(context: p5, w: number, h: number, d: number, col: p5.Color) {
  const gfx = context.createGraphics(w, h);
  const max = 3.0;
  for (let y = 0; y < gfx.height; y += context.random(max)) {
    for (let x = 0; x < gfx.width; x += context.random(max)) {
      gfx.point(x, y);
    }
  }
  return gfx;
}
