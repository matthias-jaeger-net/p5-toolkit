import p5 from 'p5';
import { prob } from './prob';
import { offset } from './offset';

export function fuzzyValue(context: p5, val: number) {
  const off = 10.0;
  return (prob(context) ? offset(context, val, off) : context.random(val));
}
