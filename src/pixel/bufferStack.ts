import p5 from 'p5';

export function bufferStack(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  const step = 0.1;
  for (let scl = 1; scl > 0; scl -= step) {
    const half = 0.5;
    const x = buffer.width * half;
    const y = buffer.height * half;
    const sclX = buffer.width * scl;
    const sclY = buffer.height * scl;
    gfx.push();
    gfx.translate(x, y);
    gfx.imageMode(context.CENTER);
    gfx.image(bufferPixels, 0, 0, sclX, sclY);
    gfx.pop();
  }
  return gfx;
}
