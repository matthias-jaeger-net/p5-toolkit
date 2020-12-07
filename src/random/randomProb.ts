import p5 from 'p5';
import { randomZeroOne } from './randomZeroOne';

export function randomProb(context: p5) {
  const half = 0.50;
  return randomZeroOne(context) > half;
}
