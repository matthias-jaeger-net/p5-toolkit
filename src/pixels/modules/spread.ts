import p5 from 'p5';

export function spread(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  gfx.loadPixels();
  for (let y = 0; y < buffer.height; y += 1) {
    for (let x = 0; x < buffer.width; x += 1) {
      const offX = context.floor(context.random(x));
      const col = bufferPixels.get(offX, y);
      gfx.set(x, y, col);
    }
  }
  gfx.updatePixels();
  return gfx;
}
