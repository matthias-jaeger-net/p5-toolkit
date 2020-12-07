import p5 from 'p5';
import { shadedColor } from '../color/shadedColor';

export function dots(context: p5, res: number, colors: Array<p5.Color>) {
  const gfx = context.createGraphics(res, res);
  gfx.background(context.random(colors));
  gfx.noStroke();
  for (let t = 0; t < res; t += 1) {
    const col = shadedColor(context, context.random(colors));
    const x = this.context.random(gfx.width);
    const y = this.context.random(gfx.height);
    const scl = 0.3;
    const d = this.context.random(res * scl);
    gfx.fill(col);
    gfx.circle(x, y, d);
  }
  return gfx;
}
