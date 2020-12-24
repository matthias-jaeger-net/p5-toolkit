import p5 from 'p5';
import { random } from '../../numbers/modules/random';

export function rarely(context: p5) {
  const prob = 0.8;
  return random(context) > prob;
}
