import p5 from 'p5';

export function linify(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  const resolution = 5;
  const thickness = 4;
  const linelength = 20;
  const angleshift = 0.3;
  const max = 255;
  const half = 0.5;
  gfx.background(max);
  for (let x = 0; x < gfx.width; x += resolution) {
    for (let y = 0; y < gfx.height; y += resolution) {
      const col = bufferPixels.get(x, y);
      const ox = x + resolution * half;
      const oy = y + resolution * half;
      const blueMap = context.map(context.blue(col), 0, max, thickness, 1);
      const redMap = context.map(context.red(col), 0, max, -angleshift, angleshift);
      const greenMap = context.map(context.green(col), 0, max, linelength, 1);
      gfx.stroke(col);
      gfx.push();
      gfx.translate(ox, oy);
      gfx.strokeWeight(blueMap);
      gfx.rotate(redMap);
      gfx.line(0, 0, greenMap, 0);
      gfx.pop();
    }
  }
  return gfx;
}
