import p5 from 'p5';

export function givenProb(context: p5, prob: number) {
  const min = 0;
  const max = 1;
  const val = context.random(min, max);
  return val > prob;
}
