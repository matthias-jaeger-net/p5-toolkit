import p5 from 'p5';

export function bars(context: p5, buffer: p5, density: number, col: p5.Color) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.image(buffer.get(), 0, 0);
  const maxDist = 100;
  const dist = maxDist * density;
  const scl = (gfx.height / dist);
  for (let x = 0; x < gfx.height; x += scl) {
    gfx.stroke(col);
    gfx.line(x, 0, x, gfx.height);
  }
  return gfx;
}
