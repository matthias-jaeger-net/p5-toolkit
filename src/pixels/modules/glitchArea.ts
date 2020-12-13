import p5 from 'p5';

export function glitchArea(context: p5, buffer: p5.Image) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.loadPixels();
  for (let x = 0; x < gfx.width; x += 1) {
    const colors = [];
    for (let y = 0; y < buffer.height; y += 1) {
      colors.push(buffer.get(x, y));
    }
    colors.sort();
    for (let y = 0; y < gfx.height; y += 1) {
      gfx.set(x, y, colors[y]);
    }
  }
  gfx.updatePixels();
  return gfx;
}
