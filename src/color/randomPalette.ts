import p5 from 'p5';
import { randomColor } from './randomColor';

export function randomPalette(context: p5, col: p5.Color, len: number) {
  const arr = [col];
  for (let i = 1; i < len; i += 1) {
    arr[i] = randomColor(context);
  }
  return arr;
}
