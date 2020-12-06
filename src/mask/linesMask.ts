import p5 from 'p5';
import { givenProb } from '../random/givenProb';

export function linesMask(context: p5, buffer: p5, prob: number) {
  const gfx = buffer.get();
  const masking = context.createGraphics(buffer.width, buffer.height);
  for (let y = 0; y < masking.height; y += 1) {
    if (givenProb(context, prob)) {
      masking.line(0, y, masking.width, y);
    }
  }
  gfx.mask(masking.get());
  return gfx;
}
