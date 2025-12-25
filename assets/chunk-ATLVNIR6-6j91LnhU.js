import { b as e } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { h as t } from "./src-D8UWkQNo.js";
var n = t((t2) => {
  let { handDrawnSeed: n2 } = e();
  return { fill: t2, hachureAngle: 120, hachureGap: 4, fillWeight: 2, roughness: 0.7, stroke: t2, seed: n2 };
}, `solidStateFill`), r = t((e2) => {
  let t2 = i([...e2.cssCompiledStyles || [], ...e2.cssStyles || [], ...e2.labelStyle || []]);
  return { stylesMap: t2, stylesArray: [...t2] };
}, `compileStyles`), i = t((e2) => {
  let t2 = /* @__PURE__ */ new Map();
  return e2.forEach((e3) => {
    let [n2, r2] = e3.split(`:`);
    t2.set(n2.trim(), r2 == null ? void 0 : r2.trim());
  }), t2;
}, `styles2Map`), a = t((e2) => e2 === `color` || e2 === `font-size` || e2 === `font-family` || e2 === `font-weight` || e2 === `font-style` || e2 === `text-decoration` || e2 === `text-align` || e2 === `text-transform` || e2 === `line-height` || e2 === `letter-spacing` || e2 === `word-spacing` || e2 === `text-shadow` || e2 === `text-overflow` || e2 === `white-space` || e2 === `word-wrap` || e2 === `word-break` || e2 === `overflow-wrap` || e2 === `hyphens`, `isLabelStyle`), o = t((e2) => {
  let { stylesArray: t2 } = r(e2), n2 = [], i2 = [], o2 = [], s2 = [];
  return t2.forEach((e3) => {
    let t3 = e3[0];
    a(t3) ? n2.push(e3.join(`:`) + ` !important`) : (i2.push(e3.join(`:`) + ` !important`), t3.includes(`stroke`) && o2.push(e3.join(`:`) + ` !important`), t3 === `fill` && s2.push(e3.join(`:`) + ` !important`));
  }), { labelStyles: n2.join(`;`), nodeStyles: i2.join(`;`), stylesArray: t2, borderStyles: o2, backgroundStyles: s2 };
}, `styles2String`), s = t((t2, n2) => {
  var _a;
  let { themeVariables: i2, handDrawnSeed: a2 } = e(), { nodeBorder: o2, mainBkg: s2 } = i2, { stylesMap: l } = r(t2);
  return Object.assign({ roughness: 0.7, fill: l.get(`fill`) || s2, fillStyle: `hachure`, fillWeight: 4, hachureGap: 5.2, stroke: l.get(`stroke`) || o2, seed: a2, strokeWidth: ((_a = l.get(`stroke-width`)) == null ? void 0 : _a.replace(`px`, ``)) || 1.3, fillLineDash: [0, 0], strokeLineDash: c(l.get(`stroke-dasharray`)) }, n2);
}, `userNodeOverrides`), c = t((e2) => {
  if (!e2) return [0, 0];
  let t2 = e2.trim().split(/\s+/).map(Number);
  if (t2.length === 1) {
    let e3 = isNaN(t2[0]) ? 0 : t2[0];
    return [e3, e3];
  }
  return [isNaN(t2[0]) ? 0 : t2[0], isNaN(t2[1]) ? 0 : t2[1]];
}, `getStrokeDashArray`);
export {
  s as a,
  o as i,
  a as n,
  n as r,
  r as t
};
