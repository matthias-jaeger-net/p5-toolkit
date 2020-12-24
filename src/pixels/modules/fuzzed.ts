import p5 from 'p5';
import { fuzzy } from '../../numbers/modules/fuzzy';

export function fuzzed(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  gfx.loadPixels();
  for (let x = 0; x < buffer.width; x += 1) {
    for (let y = 0; y < buffer.height; y += 1) {
      const col = bufferPixels.get(fuzzy(context, x), y);
      gfx.set(x, y, col);
    }
  }
  gfx.updatePixels();
  return gfx;
}
