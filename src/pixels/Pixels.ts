import p5 from 'p5';
import { mosaic } from './modules/mosaic';
import { spread } from './modules/spread';
import { shift } from './modules/shift';
import { fuzzed } from './modules/fuzzed';
import { glitch } from './modules/glitch';
import { puzzle } from './modules/puzzle';
import { linify } from './modules/linify';
import { shrink } from './modules/shrink';

export class Pixels {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  spread = (buffer: p5) => spread(this.context, buffer);
  mosaic = (buffer: p5) => mosaic(this.context, buffer);
  shift = (buffer: p5) => shift(this.context, buffer);
  fuzzed = (buffer: p5) => fuzzed(this.context, buffer);
  glitch = (buffer: p5) => glitch(this.context, buffer);
  puzzle = (buffer: p5) => puzzle(this.context, buffer);
  linify = (buffer: p5) => linify(this.context, buffer);
  shrink = (buffer: p5) => shrink(this.context, buffer);
}
