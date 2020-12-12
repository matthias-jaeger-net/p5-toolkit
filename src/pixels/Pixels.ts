import p5 from 'p5';
import { mosaic } from './mosaic';
import { spread } from './spread';
import { shift } from './shift';
import { fuzzy } from './fuzzy';
import { glitch } from './glitch';
import { puzzle } from './puzzle';
import { linify } from './linify';
import { shrink } from './shrink';

export class Pixels {
  public context: p5;

  constructor(context: p5) {
    this.context = context;
  }

  spread = (buffer: p5) =>
    spread(this.context, buffer)

  mosaic = (buffer: p5) =>
    mosaic(this.context, buffer)

  shift = (buffer: p5) =>
    shift(this.context, buffer)

  fuzzy = (buffer: p5) =>
    fuzzy(this.context, buffer)

  glitch = (buffer: p5) =>
    glitch(this.context, buffer)

  puzzle = (buffer: p5) =>
    puzzle(this.context, buffer)

  linify = (buffer: p5) =>
    linify(this.context, buffer)

  shrink = (buffer: p5) =>
    shrink(this.context, buffer)
}
