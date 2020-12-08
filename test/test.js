let seg = 3;
let n = 100;
let max = 255;
let d = max / seg;
let current = 0;
for (let angle = n; angle < max+n; angle += d) {
  if (angle > max) {
    console.log(Math.abs(angle-max));
  } else {
    console.log(angle);
  }
}