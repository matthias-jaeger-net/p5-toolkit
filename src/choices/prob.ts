import p5 from 'p5';

export function prob(context: p5) {
  const half = 0.5;
  const min = 0.0;
  const max = 1.0;
  return context.random(min, max) > half;
}
