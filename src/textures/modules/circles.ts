import p5 from 'p5';
import { shade } from '../../colors/modules/shade';

export function circles(context: p5, res: number, colors: Array<p5.Color>) {
  const gfx = context.createGraphics(res, res);
  gfx.background(context.random(colors));
  gfx.noStroke();
  for (let t = 0; t < res; t += 1) {
    const off = 10;
    const col = shade(context, context.random(colors), off);
    const x = this.context.random(gfx.width);
    const y = this.context.random(gfx.height);
    const scl = 0.3;
    const d = this.context.random(res * scl);
    gfx.fill(col);
    gfx.circle(x, y, d);
  }
  return gfx;
}
