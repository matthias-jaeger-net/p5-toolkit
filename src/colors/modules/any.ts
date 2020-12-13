import p5 from 'p5';

export function any(context: p5): p5.Color {
  const min = 0.0;
  const max = 255.0;
  const r = context.random(min, max);
  const g = context.random(min, max);
  const b = context.random(min, max);
  return context.color(r, g, b);
}
