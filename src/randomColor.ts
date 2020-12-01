import p5 from "p5";

export default function randomColor(context: p5) {
  return context.color(context.random(255), context.random(255), context.random(255));
}
