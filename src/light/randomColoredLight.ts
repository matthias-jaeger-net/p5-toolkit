import p5 from 'p5';

export function randomColoredLight(context: p5, buffer: p5, col: p5.Color) {
  const r = context.red(col);
  const g = context.green(col);
  const b = context.blue(col);
  const half = 0.5;
  const x = context.random(-buffer.width * half, buffer.width * half);
  const y = context.random(-buffer.height * half, buffer.height * half);
  const z = context.random(-buffer.width * half, buffer.width * half);
  return buffer.pointLight(r, g, b, x, y, z);
}
