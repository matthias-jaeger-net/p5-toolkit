import p5 from 'p5';
import { any } from './any';
import { bright } from './bright';
import { dark } from './dark';
import { shade } from './shade';
import { anySet } from './anySet';
import { shadeSet } from './shadeSet';

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
