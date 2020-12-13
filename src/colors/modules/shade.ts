import p5 from 'p5';
import { offset } from '../../numbers/modules/offset';

export function shade(context: p5, col: p5.Color, off: number) {
  const r = offset(context, context.red(col), off);
  const g = offset(context, context.green(col), off);
  const b = offset(context, context.blue(col), off);
  return context.color(r, g, b);
}
