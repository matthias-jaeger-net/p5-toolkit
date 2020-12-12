import p5 from 'p5';

export function dots(context: p5, w: number, h: number, d: number, c: p5.Color, s: number) {
  const gfx = context.createGraphics(w, h);
  const maxCell = 100;
  const cell = maxCell * d;
  const scl = w / cell;
  for (let x = 0; x < gfx.width; x += scl) {
    for (let y = 0; y < gfx.height; y += scl) {
      gfx.strokeWeight(s);
      gfx.stroke(c);
      gfx.point(x, y);
    }
  }
  return gfx;
}
