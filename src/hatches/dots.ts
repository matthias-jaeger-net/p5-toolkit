import p5 from 'p5';

export function dots(context: p5, buffer: p5, density: number, col: p5.Color) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.image(buffer.get(), 0, 0);
  const maxCell = 100;
  const cell = maxCell * density;
  const scl = buffer.width / cell;
  for (let x = 0; x < gfx.width; x += scl) {
    for (let y = 0; y < gfx.height; y += scl) {
      gfx.stroke(col);
      gfx.point(x, y);
    }
  }
  return gfx;
}
