import p5 from 'p5';

export function randomOffset(context: p5, val: number, off: number) {
  return val + context.random(-off, off);
}
