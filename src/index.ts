import p5 from 'p5';
import { randomOffset } from './random/randomOffset';
import { randomZeroOne } from './random/randomZeroOne';
import { randomProb } from './random/randomProb';
import { givenProb } from './random/givenProb';
import { fuzzyValue } from './random/fuzzyValue';
import { randomColor } from './color/randomColor';
import { randomBrightColor } from './color/randomBrightColor';
import { randomDarkColor } from './color/randomDarkColor';
import { randomShapeColor } from './color/randomShapeColor';
import { shadedColor } from './color/shadedColor';
import { shadedColorOff } from './color/shadedColorOff';
import { randomPalette } from './color/randomPalette';
import { relatedPalette } from './color/relatedPalette';
import { mosaic } from './pixel/mosaic';
import { randomBlurX } from './pixel/randomBlurX';
import { shiftedPixels } from './pixel/shiftedPixels';
import { fuzzyBlurX } from './pixel/fuzzyBlurX';
import { glitchY } from './pixel/glitchY';
import { stripes } from './texture/stripes';
import { dots } from './texture/dots';
import { hatchHorizontal } from './hatches/hatchHorizontal';
import { hatchVertical } from './hatches/hatchVertical';
import { hatchGrid } from './hatches/hatchGrid';
import { randomLight } from './light/randomLight';
import { randomColoredLight } from './light/randomColoredLight';
import { grainMask } from './mask/grainMask';
import { linesMask } from './mask/linesMask';

class Effects {
  public context: p5;
  constructor(context: p5) {
    this.context = context;
  }

  /** Number methods */
  public randomOffset = (val: number, off: number) => randomOffset(this.context, val, off);
  public randomZeroOne = () => randomZeroOne(this.context);
  public randomProb = () => randomProb(this.context);
  public givenProb = (val: number) => givenProb(this.context, val);
  public fuzzyValue = (val: number) => fuzzyValue(this.context, val);

  /** Color methods (Single) */
  public randomShapeColor = (min: number, max: number) => randomShapeColor(this.context, min, max);
  public randomColor = () => randomColor(this.context);
  public randomBrightColor = () => randomBrightColor(this.context);
  public randomDarkColor = () => randomDarkColor(this.context);
  public shadedColor = (col: p5.Color) => shadedColor(this.context, col);
  public shadedColorOff = (col: p5.Color, val: number) => shadedColorOff(this.context, col, val);

  /** Color methods (Pallettes) */
  public randomPalette = (col: p5.Color, len: number) => randomPalette(this.context, col, len);
  public relatedPalette = (col: p5.Color, len: number) => relatedPalette(this.context, col, len);

  /** Pixel Effects */
  public mosaic = (buffer: p5) => mosaic(this.context, buffer);
  public randomBlurX = (buffer: p5) => randomBlurX(this.context, buffer);
  public shiftedPixels = (buffer: p5) => shiftedPixels(this.context, buffer);
  public fuzzyBlurX = (buffer: p5) => fuzzyBlurX(this.context, buffer);
  public glitchY = (buffer: p5) => glitchY(this.context, buffer);

  /** Texture */
  public stripes = (res: number, colors: Array<p5.Color>) => stripes(this.context, res, colors);
  public dots = (res: number, colors: Array<p5.Color>) => dots(this.context, res, colors);
  public hatchHorizontal = (w: number, h: number, d: number) =>
    hatchHorizontal(this.context, w, h, d)
  public hatchVertical = (w: number, h: number, d: number) =>
    hatchVertical(this.context, w, h, d)
  public hatchGrid = (w: number, h: number, d: number) => hatchGrid(this.context, w, h, d);

  /** Light */
  public randomLight = (buffer: p5) => randomLight(this.context, buffer);
  public randomColoredLight = (buffer: p5, col: p5.Color) =>
    randomColoredLight(this.context, buffer, col)

  /** Masking */
  public grainMask = (buffer: p5, prob: number) => grainMask(this.context, buffer, prob);
  public linesMask = (buffer: p5, prob: number) => linesMask(this.context, buffer, prob);
}

declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
