import p5 from 'p5';
import { random } from './modules/random';
import { fuzzy } from './modules/fuzzy';
import { offset } from './modules/offset';

export class Numbers {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  random = () => random(this.context);
  fuzzy = (val: number) => fuzzy(this.context, val);
  offset = (val: number, off: number) => offset(this.context, val, off);
}
