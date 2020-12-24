import p5 from 'p5';
import { often } from './modules/often';
import { sometimes } from './modules/sometimes';
import { rarely } from './modules/rarely';
import { probability } from './modules/probability';

export class Choices {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  often = () => often(this.context);
  sometimes = () => sometimes(this.context);
  rarely = () => rarely(this.context);
  probability = (prob: number) => probability(this.context, prob);
}
