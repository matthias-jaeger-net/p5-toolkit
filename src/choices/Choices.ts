import p5 from 'p5';
import { offset } from './offset';
import { prob } from './prob';
import { givenProb } from './givenProb';

export class Choices {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }
  // Often true
  // Sometimes true
  // Rarely true
  // Prob (val)
  prob = () => prob(this.context);
  givenProb = (val: number) => givenProb(this.context, val);
  offset = (val: number, off: number) => offset(this.context, val, off);
}
