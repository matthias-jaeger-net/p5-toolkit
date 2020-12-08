import p5 from 'p5';

export function stripes(context: p5, buffer: p5, density: number, col: p5.Color) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.image(buffer.get(), 0, 0);
  const maxDist = 100;
  const dist = maxDist * density;
  const scl = (gfx.width / dist);
  for (let y = 0; y < gfx.height; y += scl) {
    gfx.stroke(col);
    gfx.line(0, y, gfx.width, y);
  }
  return gfx;
}
