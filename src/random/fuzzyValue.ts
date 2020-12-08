import p5 from 'p5';
import { randomProb } from './randomProb';
import { randomOffset } from './randomOffset';

export function fuzzyValue(context: p5, val: number) {
  const off = 10.0;
  return (randomProb(context) ? randomOffset(context, val, off) : context.random(val));
}
