(()=>{"use strict";var r={770:(r,o,e)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomBrightColor=void 0;var t=e(893);o.randomBrightColor=function(r){return t.randomShaped(r,155,255)}},43:(r,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomColor=void 0,o.randomColor=function(r){var o=r.random(0,255),e=r.random(0,255),t=r.random(0,255);return r.color(o,e,t)}},893:(r,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomShaped=void 0,o.randomShaped=function(r,o,e){var t=r.random(o,e),n=r.random(o,e),i=r.random(o,e);return r.color(t,n,i)}},607:(r,o,e)=>{var t=e(111),n=e(309),i=e(893),a=e(43),d=e(770),u=e(254),h=e(675),s=e(326);window.Effects=function(r){var o=this;this.randomZeroOne=function(){return t.randomZeroOne(o.context)},this.randomProb=function(){return n.randomProb(o.context)},this.randomShaped=function(r,e){return i.randomShaped(o.context,r,e)},this.randomColor=function(){return a.randomColor(o.context)},this.randomBrightColor=function(){return d.randomBrightColor(o.context)},this.mosaic=function(r){return u.mosaic(o.context,r)},this.randomBlurX=function(r){return h.randomBlurX(o.context,r)},this.shiftedPixels=function(r){return s.shiftedPixels(o.context,r)},this.context=r}},254:(r,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.mosaic=void 0,o.mosaic=function(r,o){var e=r.createGraphics(o.width,o.height),t=o.get();e.noStroke();for(var n=o.width/100,i=0;i<o.width;i+=n)for(var a=0;a<o.height;a+=n){var d=t.get(i,a);e.fill(d),e.rect(i,a,n,n)}return e}},675:(r,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomBlurX=void 0,o.randomBlurX=function(r,o){var e=r.createGraphics(o.width,o.height),t=o.get();e.loadPixels();for(var n=0;n<o.height;n+=1)for(var i=0;i<o.width;i+=1){var a=r.floor(r.random(i)),d=t.get(a,n);e.set(i,n,d)}return e.updatePixels(),e}},326:(r,o,e)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.shiftedPixels=void 0;var t=e(309);o.shiftedPixels=function(r,o){for(var e=[],n=0;n<o.width;n+=1){for(var i=[],a=0;a<o.height;a+=1)i.push(o.get(n,a));e.push(i)}var d=r.createGraphics(o.width,o.height);for(n=0;n<d.width;n+=1){var u=r.random(.5*d.width),h=r.floor(u),s=[],c=e[n].length;for(a=c-h;a<c;a+=1)s.push(e[n][a]);for(a=h;a<c-h;a+=1)s.push(e[n][a]);for(a=0;a<h;a+=1)s.push(e[n][a]);e[n]=t.randomProb(r)?s.sort():s}for(d.loadPixels(),n=0;n<d.width;n+=1)for(a=0;a<d.height;a+=1)d.set(n,a,e[n][a]);return d.updatePixels(),d}},309:(r,o,e)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomProb=void 0;var t=e(111);o.randomProb=function(r){return t.randomZeroOne(r)>.5}},111:(r,o)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.randomZeroOne=void 0,o.randomZeroOne=function(r){return r.random(0,1)}}},o={};!function e(t){if(o[t])return o[t].exports;var n=o[t]={exports:{}};return r[t](n,n.exports,e),n.exports}(607)})();