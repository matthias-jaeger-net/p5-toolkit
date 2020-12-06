import p5 from 'p5';

export function hatchVertical(context: p5, w: number, h: number, d: number) {
  const gfx = context.createGraphics(w, h);
  const scl = gfx.height * d;
  for (let x = 0; x < gfx.width; x += scl) {
    gfx.line(x, 0, x, gfx.height);
  }
  return gfx;
}
