import p5 from 'p5';
import { hatchHorizontal } from './hatchHorizontal';
import { hatchVertical } from './hatchVertical';

export function hatchGrid(context: p5, w: number, h: number, d: number) {
  const gfx = context.createGraphics(w, h);
  gfx.image(hatchHorizontal(context, w, h, d), 0, 0);
  gfx.image(hatchVertical(context, w, h, d), 0, 0);
  return gfx;
}
