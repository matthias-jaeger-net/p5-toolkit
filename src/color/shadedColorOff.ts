import p5 from 'p5';
import { randomOffset } from '../random/randomOffset';

export function shadedColorOff(context: p5, col: p5.Color, off: number) {
  const r = randomOffset(context, context.red(col), off);
  const g = randomOffset(context, context.green(col), off);
  const b = randomOffset(context, context.blue(col), off);
  return context.color(r, g, b);
}
