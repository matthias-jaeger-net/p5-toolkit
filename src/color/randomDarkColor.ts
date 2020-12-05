import p5 from 'p5';
import { randomShapeColor } from './randomShapeColor';

export function randomDarkColor(context: p5): p5.Color {
  const max = 100;
  const min = 0;
  return randomShapeColor(context, min, max);
}
