import p5 from 'p5';
import { glitchArea } from './glitchArea';

export function glitch(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  gfx.image(buffer.get(), 0, 0);
  const max = 550;
  const gMin = 1;
  const gMax = 100;
  const off = 20;
  for (let t = 0; t < max; t += 1) {
    const x = context.random(buffer.width);
    const y = context.random(buffer.height);
    const ox = context.random(-off, off);
    const w = context.floor(context.random(gMin, gMax));
    const h = context.floor(context.random(gMin, gMax));
    const g = buffer.get(x, y, w, h);
    gfx.image(glitchArea(context, g), x + ox, y);
  }
  return gfx;
}
