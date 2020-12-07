import p5 from 'p5';

export function mosaic(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const design = buffer.get();
  gfx.noStroke();
  const unit = 100.0;
  const scale = buffer.width / unit;
  for (let x = 0; x < buffer.width; x += scale) {
    for (let y = 0; y < buffer.height; y += scale) {
      const col = design.get(x, y);
      gfx.fill(col);
      gfx.rect(x, y, scale, scale);
    }
  }
  return gfx;
}
