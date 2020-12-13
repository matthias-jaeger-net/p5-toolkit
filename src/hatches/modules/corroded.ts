import p5 from 'p5';

export function corroded(context: p5, w: number, h: number, d: number, c: p5.Color, s: number) {
  const gfx = context.createGraphics(w, h);
  const maxCell = 300;
  const cell = maxCell * d;
  const scl = w / cell;
  for (let x = 0; x < gfx.width; x += scl) {
    for (let y = 0; y < gfx.height; y += scl) {
      const r = context.random(s);
      if (r > d) {
        gfx.stroke(c);
        gfx.strokeWeight(r * d);
        gfx.line(x + r, y - r, x, y);
      }
    }
  }
  return gfx;
}
