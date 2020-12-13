import p5 from 'p5';

import { Numbers } from './numbers/Numbers';
import { Choices } from './choices/Choices';
import { Colors } from './colors/Colors';
import { Pixels } from './pixels/Pixels';
import { Hatches } from './hatches/Hatches';
import { Textures } from './textures/Textures';

class Effects {
  public context: p5;
  public choices: Object;
  public colors: Object;
  public pixels: Object;
  public hatches: Object;
  public textures: Object;

  constructor(context: p5) {
    this.context = context;
    this.choices = new Choices(this.context);
    this.colors = new Colors(this.context);
    this.pixels = new Pixels(this.context);
    this.textures = new Textures(this.context);
    this.hatches = new Hatches(this.context);
  }
}

declare global {
  interface Window { Effects: any; }
}

window.Effects = Effects;
