import p5 from 'p5';

export function bars(context: p5, w: number, h: number, d: number, c: p5.Color, s: number) {
  const gfx = context.createGraphics(w, h);
  const maxDist = 100;
  const dist = maxDist * d;
  const scl = (gfx.width / dist);
  for (let x = 0; x < gfx.width; x += scl) {
    gfx.strokeWeight(s);
    gfx.stroke(c);
    gfx.line(x, 0, x, gfx.height);
  }
  return gfx;
}
