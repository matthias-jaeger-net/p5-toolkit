import p5 from 'p5';
import { shadedColor } from '../color/shadedColor';
import { randomProb } from '../random/randomProb';

export function stripes(context: p5, res: number, colors: Array<p5.Color>) {
  const gfx = context.createGraphics(res, res);
  for (let x = 0; x < gfx.width; x += 1) {
    const mapping = context.map(x, 0, gfx.width, 0, colors.length);
    const index = context.floor(mapping);
    const mappedColor = colors[index];
    const randomizedColor = context.random(colors);
    const fuzzyColor = (randomProb(context)) ? mappedColor : randomizedColor;
    gfx.stroke(shadedColor(context, fuzzyColor));
    gfx.line(x, 0, x, gfx.height);
  }
  return gfx;
}