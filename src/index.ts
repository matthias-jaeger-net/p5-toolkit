import p5 from 'p5';

import { randomOffset } from './random/randomOffset';
import { randomZeroOne } from './random/randomZeroOne';
import { randomProb } from './random/randomProb';
import { fuzzyValue } from './random/fuzzyValue';

import { randomColor } from './color/randomColor';
import { randomBrightColor } from './color/randomBrightColor';
import { randomDarkColor } from './color/randomDarkColor';
import { randomShapeColor } from './color/randomShapeColor';

import { mosaic } from './pixel/mosaic';
import { randomBlurX } from './pixel/randomBlurX';
import { shiftedPixels } from './pixel/shiftedPixels';
import { fuzzyBlurX } from './pixel/fuzzyBlurX';
import { glitchY } from './pixel/glitchY';

class Effects {
  public context: p5;
  constructor(context: p5) {
    this.context = context;
  }

  /** Random number methods */
  public randomOffset = (val: number, off: number) => randomOffset(this.context, val, off);
  public randomZeroOne = () => randomZeroOne(this.context);
  public randomProb = () => randomProb(this.context);
  public fuzzyValue = (val: number) => fuzzyValue(this.context, val);

  /** Random color methods */
  public randomShapeColor = (min: number, max: number) => randomShapeColor(this.context, min, max);
  public randomColor = () => randomColor(this.context);
  public randomBrightColor = () => randomBrightColor(this.context);
  public randomDarkColor = () => randomDarkColor(this.context);

  /** Pixel Effects */
  public mosaic = (buffer: p5) => mosaic(this.context, buffer);
  public randomBlurX = (buffer: p5) => randomBlurX(this.context, buffer);
  public shiftedPixels = (buffer: p5) => shiftedPixels(this.context, buffer);
  public fuzzyBlurX = (buffer: p5) => fuzzyBlurX(this.context, buffer);
  public glitchY = (buffer: p5) => glitchY(this.context, buffer);
}

/** Add the class as a global varibale */
declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
