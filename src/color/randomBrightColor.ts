import p5 from 'p5';
import { randomShapeColor } from './randomShapeColor';

export function randomBrightColor(context: p5): p5.Color {
  const max = 255;
  const min = 155;
  return randomShapeColor(context, min, max);
}
