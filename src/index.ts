import p5 from 'p5';

// Numbers and colors
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

// Pixels
import { mosaic } from './pixel/mosaic';
import { randomBlurX } from './pixel/randomBlurX';
import { shiftedPixels } from './pixel/shiftedPixels';
import { fuzzyBlurX } from './pixel/fuzzyBlurX';
import { glitchY } from './pixel/glitchY';
import { puzzle } from './pixel/puzzle';
import { gridScapes } from './pixel/gridScapes';
import { bufferStack } from './pixel/bufferStack';

// Texture
import { grain } from './hatches/grain';
import { dots } from './hatches/dots';
import { corroded } from './hatches/corroded';
import { stripes } from './hatches/stripes';
import { bars } from './hatches/bars';

// Legacy code
import { randomLight } from './light/randomLight';
import { randomColoredLight } from './light/randomColoredLight';
import { grainMask } from './mask/grainMask';
import { linesMask } from './mask/linesMask';


class Effects {
  public context: p5;
  constructor(context: p5) {
    this.context = context;
  }

  /** Number */
  public randomOffset = (val: number, off: number) => randomOffset(this.context, val, off);
  public randomZeroOne = () => randomZeroOne(this.context);
  public randomProb = () => randomProb(this.context);
  public givenProb = (val: number) => givenProb(this.context, val);
  public fuzzyValue = (val: number) => fuzzyValue(this.context, val);

  /** Color */
  public randomShapeColor = (min: number, max: number) => randomShapeColor(this.context, min, max);
  public randomColor = () => randomColor(this.context);
  public randomBrightColor = () => randomBrightColor(this.context);
  public randomDarkColor = () => randomDarkColor(this.context);
  public shadedColor = (col: p5.Color) => shadedColor(this.context, col);
  public shadedColorOff = (col: p5.Color, val: number) => shadedColorOff(this.context, col, val);
  public randomPalette = (col: p5.Color, len: number) => randomPalette(this.context, col, len);
  public relatedPalette = (col: p5.Color, len: number) => relatedPalette(this.context, col, len);

  /** Pixel */
  public mosaic = (buffer: p5) => mosaic(this.context, buffer);
  public randomBlurX = (buffer: p5) => randomBlurX(this.context, buffer);
  public shiftedPixels = (buffer: p5) => shiftedPixels(this.context, buffer);
  public fuzzyBlurX = (buffer: p5) => fuzzyBlurX(this.context, buffer);
  public glitchY = (buffer: p5) => glitchY(this.context, buffer);
  public puzzle = (buffer: p5) => puzzle(this.context, buffer);
  public gridScapes = (buffer: p5) => gridScapes(this.context, buffer);
  public bufferStack = (buffer: p5) => bufferStack(this.context, buffer);

  /** Texture */

  public grain = (buffer: p5, density: number, col: p5.Color) =>
    grain(this.context, buffer, density, col)

  public dots = (buffer: p5, density: number, col: p5.Color) =>
    dots(this.context, buffer, density, col)

  public corroded = (buffer: p5, density: number, col: p5.Color) =>
    corroded(this.context, buffer, density, col)

  public stripes = (buffer: p5, density: number, col: p5.Color) =>
    stripes(this.context, buffer, density, col)

  public bars = (buffer: p5, density: number, col: p5.Color) =>
    bars(this.context, buffer, density, col)

  // All the legacy stuff
  public randomLight = (buffer: p5) =>
    randomLight(this.context, buffer)

  public randomColoredLight = (buffer: p5, col: p5.Color) =>
    randomColoredLight(this.context, buffer, col)

  public grainMask = (buffer: p5, prob: number) =>
    grainMask(this.context, buffer, prob)

  public linesMask = (buffer: p5, prob: number) =>
    linesMask(this.context, buffer, prob)
}

declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
