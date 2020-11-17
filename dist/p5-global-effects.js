// eslint-disable-next-line no-unused-vars
class Effects {
  grid2d(buffer) {
    this.arr = [];
    for (let x = 0; x < buffer.width; x += 1) {
      const row = [];
      for (let y = 0; y < buffer.height; y += 1) {
        row.push(buffer.get(x, y));
      }
      this.arr.push(row);
    }

    return this.arr;
  }

  gridToBuffer(buffer, grid) {
    this.gfx = createGraphics(buffer.width, buffer.height);
    this.gfx.loadPixels();
    for (let x = 0; x < this.gfx.width; x += 1) {
      for (let y = 0; y < this.gfx.height; y += 1) {
        this.gfx.set(x, y, grid[x][y]);
      }
    }
    this.gfx.updatePixels();

    return this.gfx;
  }

  mosaic(buffer) {
    const gfx = createGraphics(buffer.width, buffer.height);
    const design = buffer.get();
    gfx.noStroke();
    const s = buffer.width / 100.0;
    for (let x = 0; x < buffer.width; x += this.s) {
      for (let y = 0; y < buffer.height; y += this.s) {
        const col = design.get(x, y);
        gfx.fill(col);
        gfx.rect(x, y, s, s);
      }
    }
    return gfx;
  }

  shiftedPixels(buffer) {
    const gfx = createGraphics(buffer.width, buffer.height);
    const grid = this.grid2d(buffer);
    for (let x = 0; x < gfx.width; x += 1) {
      const offset = floor(random(gfx.width * 0.5));
      const cs = [];
      const max = grid[x].length;
      for (let y = max - offset; y < max; y += 1) {
        cs.push(grid[x][y]);
      }
      for (let y = offset; y < max - offset; y += 1) {
        cs.push(grid[x][y]);
      }
      for (let y = 0; y < offset; y += 1) {
        cs.push(grid[x][y]);
      }
      grid[x] = this.randomProb() ? cs.sort() : cs;
    }
    return this.gridToBuffer(gfx, grid);
  }
}
