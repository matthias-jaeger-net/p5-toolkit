import p5 from 'p5';

export function grain(context: p5, w: number, h: number, d: number, c: p5.Color, s: number) {
  const gfx = context.createGraphics(w, h);
  const ammount = (w * h) * d;
  for (let times = 0; times < ammount; times += 1) {
    const x = context.random(gfx.width);
    const y = context.random(gfx.height);
    gfx.strokeWeight(s);
    gfx.stroke(c);
    gfx.point(x, y);
  }
  return gfx;
}
