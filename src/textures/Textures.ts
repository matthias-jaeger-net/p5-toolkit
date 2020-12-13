import p5 from 'p5';
import { circles } from './modules/circles';
import { striped } from './modules/striped';

export class Textures {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  circles = (res: number, colors: Array<p5.Color>) =>
    circles(this.context, res, colors)

  striped = (res: number, colors: Array<p5.Color>) =>
    striped(this.context, res, colors)
}
