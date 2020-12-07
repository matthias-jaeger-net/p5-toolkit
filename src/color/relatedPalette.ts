import p5 from 'p5';
import { shadedColorOff } from './shadedColorOff';

export function relatedPalette(context: p5, col: p5.Color, len: number) {
  const arr = [col];
  const maxOffset = 50.0;
  for (let i = 1; i < len; i += 1) {
    arr[i] = shadedColorOff(context, col, maxOffset);
  }
  return arr;
}
