import p5 from 'p5';
import { randomShaped } from './color/randomShaped';
import { randomColor } from './color/randomColor';
import { randomBrightColor } from './color/randomBrightColor';

class Effects {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  public randomShaped = (min: number, max: number) =>
    randomShaped(this.context, min, max)

  public randomColor = () =>
    randomColor(this.context)

  public randomBrightColor = () =>
    randomBrightColor(this.context)
}

declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
