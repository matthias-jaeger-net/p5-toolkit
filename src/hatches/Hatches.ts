import p5 from 'p5';
import { dots } from './dots';
import { stripes } from './stripes';
import { bars } from './bars';
import { grain } from './grain';
import { corroded } from './corroded';

export class Hatches {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  stripes = (width: number, height: number, density: number, color: p5.Color, weight: number) =>
    stripes(this.context, width, height, density, color, weight)

  bars = (width: number, height: number, density: number, color: p5.Color, weight: number) =>
    bars(this.context, width, height, density, color, weight)

  dots = (width: number, height: number, density: number, color: p5.Color, weight: number) =>
    dots(this.context, width, height, density, color, weight)

  grain = (width: number, height: number, density: number, color: p5.Color, weight: number) =>
    grain(this.context, width, height, density, color, weight)

  corroded = (width: number, height: number, density: number, color: p5.Color, weight: number) =>
    corroded(this.context, width, height, density, color, weight)
}
