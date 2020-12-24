import p5 from 'p5';
import { random } from '../../numbers/modules/random';

export function sometimes(context: p5) {
  const prob = 0.5;
  return random(context) > prob;
}
