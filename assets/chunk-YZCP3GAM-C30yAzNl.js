import { A as e } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { h as t, p as n } from "./src-BWB47EtT.js";
import { t as r } from "./dist-DAHuMNYw.js";
var i = r(), a = t((e2, t2) => {
  let n2 = e2.append(`rect`);
  if (n2.attr(`x`, t2.x), n2.attr(`y`, t2.y), n2.attr(`fill`, t2.fill), n2.attr(`stroke`, t2.stroke), n2.attr(`width`, t2.width), n2.attr(`height`, t2.height), t2.name && n2.attr(`name`, t2.name), t2.rx && n2.attr(`rx`, t2.rx), t2.ry && n2.attr(`ry`, t2.ry), t2.attrs !== void 0) for (let e3 in t2.attrs) n2.attr(e3, t2.attrs[e3]);
  return t2.class && n2.attr(`class`, t2.class), n2;
}, `drawRect`), o = t((e2, t2) => {
  a(e2, { x: t2.startx, y: t2.starty, width: t2.stopx - t2.startx, height: t2.stopy - t2.starty, fill: t2.fill, stroke: t2.stroke, class: `rect` }).lower();
}, `drawBackgroundRect`), s = t((t2, n2) => {
  let r2 = n2.text.replace(e, ` `), i2 = t2.append(`text`);
  i2.attr(`x`, n2.x), i2.attr(`y`, n2.y), i2.attr(`class`, `legend`), i2.style(`text-anchor`, n2.anchor), n2.class && i2.attr(`class`, n2.class);
  let a2 = i2.append(`tspan`);
  return a2.attr(`x`, n2.x + n2.textMargin * 2), a2.text(r2), i2;
}, `drawText`), c = t((e2, t2, n2, r2) => {
  let a2 = e2.append(`image`);
  a2.attr(`x`, t2), a2.attr(`y`, n2);
  let o2 = (0, i.sanitizeUrl)(r2);
  a2.attr(`xlink:href`, o2);
}, `drawImage`), l = t((e2, t2, n2, r2) => {
  let a2 = e2.append(`use`);
  a2.attr(`x`, t2), a2.attr(`y`, n2);
  let o2 = (0, i.sanitizeUrl)(r2);
  a2.attr(`xlink:href`, `#${o2}`);
}, `drawEmbeddedImage`), u = t(() => ({ x: 0, y: 0, width: 100, height: 100, fill: `#EDF2AE`, stroke: `#666`, anchor: `start`, rx: 0, ry: 0 }), `getNoteRect`), d = t(() => ({ x: 0, y: 0, width: 100, height: 100, "text-anchor": `start`, style: `#666`, textMargin: 0, rx: 0, ry: 0, tspan: true }), `getTextObj`), f = t(() => {
  let e2 = n(`.mermaidTooltip`);
  return e2.empty() && (e2 = n(`body`).append(`div`).attr(`class`, `mermaidTooltip`).style(`opacity`, 0).style(`position`, `absolute`).style(`text-align`, `center`).style(`max-width`, `200px`).style(`padding`, `2px`).style(`font-size`, `12px`).style(`background`, `#ffffde`).style(`border`, `1px solid #333`).style(`border-radius`, `2px`).style(`pointer-events`, `none`).style(`z-index`, `100`)), e2;
}, `createTooltip`);
export {
  a,
  d as c,
  c as i,
  o as n,
  s as o,
  l as r,
  u as s,
  f as t
};
