import p5 from 'p5';
import { often } from '../../choices/modules/often';
import { offset } from './offset';

export function fuzzy(context: p5, val: number) {
  const off = 10.0;
  return (often(context) ? offset(context, val, off) : context.random(val));
}
