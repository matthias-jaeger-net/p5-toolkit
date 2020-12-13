import p5 from 'p5';
import { shade } from './shade';

export function shadeSet(context: p5, len: number, col: p5.Color) {
  const arr = [];
  const off = 20;
  for (let i = 0; i < len; i++) {
    arr.push(shade(context, col, off));
  }
  return arr;
}
