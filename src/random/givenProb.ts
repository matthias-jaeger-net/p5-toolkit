import p5 from 'p5';
import { randomZeroOne } from './randomZeroOne';

export function givenProb(context: p5, prob: number) {
  return this.randomZeroOne() > prob;
}
