import p5 from 'p5';

export function puzzle(context: p5, buffer: p5) {
  const gfx = context.createGraphics(buffer.width, buffer.height);
  const bufferPixels = buffer.get();
  const minRes = 3;
  const maxRes = 30;
  const res = context.floor(context.random(minRes, maxRes));
  const sclX = buffer.width / res;
  const sclY = buffer.height / res;
  const pieces = [];
  const indices = [];
  const newIndices = [];
  let index = 0;
  for (let x = 0; x < buffer.width; x += sclX) {
    for (let y = 0; y < buffer.height; y += sclY) {
      pieces.push(bufferPixels.get(x, y, sclX, sclY));
      indices.push(index);
      index += 1;
    }
  }
  while (newIndices.length <= pieces.length) {
    const randomIndex = context.floor(context.random(indices.length));
    newIndices.push(indices[randomIndex]);
    indices.splice(randomIndex, 1);
  }
  index = 0;
  for (let x = 0; x < buffer.width; x += sclX) {
    for (let y = 0; y < buffer.height; y += sclY) {
      gfx.image(pieces[newIndices[index]], x, y);
      index += 1;
    }
  }
  return gfx;
}
