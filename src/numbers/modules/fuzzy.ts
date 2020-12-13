import p5 from 'p5';
import { prob } from '../../choices/modules/prob';
import { offset } from './offset';

export function fuzzy(context: p5, val: number) {
  const off = 10.0;
  return (prob(context) ? offset(context, val, off) : context.random(val));
}
