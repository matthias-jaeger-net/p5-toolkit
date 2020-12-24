import p5 from 'p5';

export function random(context: p5) {
  const min = 0.0;
  const max = 1.0;
  return context.random(min, max);
}
