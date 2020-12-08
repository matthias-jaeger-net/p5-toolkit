import p5 from 'p5';

export function randomLight(context: p5, buffer: p5) {
  const white = 255;
  const half = 0.5;
  const x = context.random(-buffer.width * half, buffer.width * half);
  const y = context.random(-buffer.height * half, buffer.height * half);
  const z = context.random(-buffer.width * half, buffer.width * half);
  return buffer.pointLight(white, white, white, x, y, z);
}
