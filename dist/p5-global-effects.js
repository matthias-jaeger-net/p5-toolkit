class Effects {
  constructor() {
    // Pass
  }
  mosaic(buffer) {
    const gfx = createGraphics(buffer.width, buffer.height);
    const design = buffer.get();
    gfx.noStroke();
    const s = buffer.width / 100.0;
    for (let x = 0; x < buffer.width; x += s) {
      for (let y = 0; y < buffer.height; y += s) {
        const col = design.get(x, y);
        gfx.fill(col);
        gfx.rect(x, y, s, s);
      }
    }
    return gfx;
  }
}
