import p5 from 'p5';
import { randomShapedColor } from './randomShapedColor';

export function randomDarkColor(context: p5): p5.Color {
  const max = 100;
  const min = 0;
  return randomShapedColor(context, min, max);
}
