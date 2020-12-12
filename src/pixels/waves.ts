import p5 from 'p5';

export function waves(context: p5, buffer: p5) {
  const grid = [];
  for (let x = 0; x < buffer.width; x += 1) {
    const row = [];
    for (let y = 0; y < buffer.height; y += 1) {
      row.push(buffer.get(x, y));
    }
    grid.push(row);
  }
  const gfx = context.createGraphics(buffer.width, buffer.height);
  for (let x = 0; x < gfx.width; x += 1) {
    const offset = context.sin();
    const cs = [];
    const max: number = grid[x].length;
    for (let y = max - offset; y < max; y += 1) {
      cs.push(grid[x][y]);
    }
    for (let y = offset; y < max - offset; y += 1) {
      cs.push(grid[x][y]);
    }
    for (let y = 0; y < offset; y += 1) {
      cs.push(grid[x][y]);
    }
    grid[x] = cs;
  }
  gfx.loadPixels();
  for (let x = 0; x < gfx.width; x += 1) {
    for (let y = 0; y < gfx.height; y += 1) {
      gfx.set(x, y, grid[x][y]);
    }
  }
  gfx.updatePixels();
  return gfx;
}
