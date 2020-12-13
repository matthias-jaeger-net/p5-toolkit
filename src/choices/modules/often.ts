import p5 from 'p5';
import { random } from '../../numbers/modules/random';

export function often(context: p5) {
  const prob = 0.2;
  return random(context) > prob;
}
