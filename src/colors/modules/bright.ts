import p5 from 'p5';

export function bright(context: p5): p5.Color {
  const max = 255;
  const min = 155;
  const r = context.random(min, max);
  const g = context.random(min, max);
  const b = context.random(min, max);
  return context.color(r, g, b);
}
