import p5 from 'p5';
import { randomShapedColor } from './randomShapedColor';

export function randomBrightColor(context: p5): p5.Color {
  const max = 255;
  const min = 155;
  return randomShapedColor(context, min, max);
}
