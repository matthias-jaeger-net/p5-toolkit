import p5 from 'p5';

export function corroded(context: p5, buffer: p5, density: number, col: p5.Color) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.image(buffer.get(), 0, 0);
  const maxCell = 300;
  const cell = maxCell * density;
  const scl = buffer.width / cell;
  const d = 2;
  for (let x = 0; x < gfx.width; x += scl) {
    for (let y = 0; y < gfx.height; y += scl) {
      const r = context.random();
      if (r > density) {
        gfx.stroke(col);
        gfx.strokeWeight(r * d);
        gfx.line(x + r, y - r, x, y);
      }
    }
  }
  return gfx;
}
