import p5 from 'p5';
import { givenProb } from '../choices/givenProb';

export function grainMask(context: p5, buffer: p5, prob: number) {
  const gfx = buffer.get();
  const masking = context.createGraphics(buffer.width, buffer.height);
  for (let x = 0; x < masking.width; x += 1) {
    for (let y = 0; y < masking.height; y += 1) {
      if (givenProb(context, prob)) {
        masking.point(x, y);
      }
    }
  }
  gfx.mask(masking.get());
  return gfx;
}
