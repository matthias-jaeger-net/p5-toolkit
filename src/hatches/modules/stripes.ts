import p5 from 'p5';

export function stripes(context: p5, w: number, h: number, d: number, c: p5.Color, s: number) {
  const gfx = context.createGraphics(w, h);
  const maxDist = 100;
  const dist = maxDist * d;
  const scl = (gfx.width / dist);
  for (let y = 0; y < gfx.height; y += scl) {
    gfx.strokeWeight(s);
    gfx.stroke(c);
    gfx.line(0, y, gfx.width, y);
  }
  return gfx;
}
