import p5 from 'p5';
import { any } from './any';

export function anySet(context: p5, len: number) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(any(context));
  }
  return arr;
}
