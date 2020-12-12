import p5 from 'p5';

export function dark(context: p5): p5.Color {
  const max = 90;
  const min = 0;
  const r = context.random(min, max);
  const g = context.random(min, max);
  const b = context.random(min, max);
  return context.color(r, g, b);
}
