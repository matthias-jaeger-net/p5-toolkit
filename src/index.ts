/**
 * Effects.ts
 *
 * Matthias Jäger
 * 2020-12-04
 * MIT
 */

import p5 from 'p5';

import { randomOffset } from './random/randomOffset';
import { randomZeroOne } from './random/randomZeroOne';
import { randomProb } from './random/randomProb';

import { randomShaped } from './color/randomShaped';
import { randomColor } from './color/randomColor';
import { randomBrightColor } from './color/randomBrightColor';

import { mosaic } from './pixel/mosaic';
import { randomBlurX } from './pixel/randomBlurX';
import { shiftedPixels } from './pixel/shiftedPixels';


class Effects {
  public context: p5;

  /** Set context to p5 sketch */
  constructor(context: p5) {
    this.context = context;
  }

  /** Random number methods */

  // A value with random positive or negative offset added
  public randomOffset = (val: number, off: number) =>
    randomOffset(this.context, val, off)

  // A random number between 0 and 1
  public randomZeroOne = () => randomZeroOne(this.context);

  // True with a 50% percent probability
  public randomProb = () => randomProb(this.context);

  /** Random color methods */

  // A random rgb color within the given bounds
  public randomShaped = (min: number, max: number) =>
    randomShaped(this.context, min, max)

  // A random rgb color
  public randomColor = () => randomColor(this.context);

  // A random rgb color with bright values
  public randomBrightColor = () => randomBrightColor(this.context);

  /** Pixel Effects */

  // A copy of the given graphic with a pixelated mosaic effect
  public mosaic = (buffer: p5) => mosaic(this.context, buffer);

  // A copy of the given graphic with randomly 'blured' pixels
  public randomBlurX = (buffer: p5) => randomBlurX(this.context, buffer);

  // A copy of the given graphic with shifted, sorted and reversed pixels
  public shiftedPixels = (buffer: p5) => shiftedPixels(this.context, buffer);
}

/** Add the class as a global varibale */
declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
