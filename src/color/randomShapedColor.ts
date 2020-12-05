import p5 from 'p5';

export function randomShapedColor(context: p5, min: number, max: number): p5.Color {
  const r = context.random(min, max);
  const g = context.random(min, max);
  const b = context.random(min, max);
  return context.color(r, g, b);
}
