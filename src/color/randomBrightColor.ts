import p5 from 'p5';
import { randomShaped } from './randomShaped';

export function randomBrightColor(context: p5): p5.Color {
  const max = 255;
  const min = 155;
  return randomShaped(context, min, max);
}
