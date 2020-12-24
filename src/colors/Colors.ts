import p5 from 'p5';
import { any } from './modules/any';
import { bright } from './modules/bright';
import { dark } from './modules/dark';
import { shade } from './modules/shade';
import { anySet } from './modules/anySet';
import { shadeSet } from './modules/shadeSet';

export class Colors {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  any = () => any(this.context);
  bright = () => bright(this.context);
  dark = () => dark(this.context);
  shade = (col: p5.Color, off: number) => shade(this.context, col, off);
  anySet = (len: number) => anySet(this.context, len);
  shadeSet = (col: p5.Color, len: number) => shadeSet(this.context, len, col);
}
