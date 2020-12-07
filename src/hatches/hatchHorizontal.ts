import p5 from 'p5';

export function hatchHorizontal(context: p5, w: number, h: number, d: number) {
  const gfx = context.createGraphics(w, h);
  const scl = gfx.height * d;
  for (let y = 0; y < gfx.height; y += scl) {
    gfx.line(0, y, gfx.width, y);
  }
  return gfx;
}
