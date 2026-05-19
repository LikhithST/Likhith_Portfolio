import { t as e } from "./ordinal-Bs01uwBv.js";
import "./init-B8xRTswO.js";
import { t } from "./arc-DfjZgq6W.js";
import { Cn as n, In as r, It as i, Jn as a, N as o, Nn as s, Nt as c, Pn as l, R as u, Sn as d, Xt as f, Yn as p, Zt as m, bn as h, gn as g, pn as _, vn as v, yn as y } from "./index-4Ava25sD.js";
import "./chunk-K5T4RW27-OuehT3M0.js";
import "./reduce-BYgg84dj.js";
import "./flatten-COzv_UkG.js";
import "./chunk-7N4EOEYR-D1jf8gU4.js";
import "./chunk-67CJDMHE-DkrmGhRn.js";
import "./chunk-KGLVRYIC-B7L8tDEY.js";
import "./chunk-FOC6F5B3-B63lKV-F.js";
import "./chunk-AA7GKIK3-D5IXgCR6.js";
import "./chunk-2KRD3SAO-CNzDCA3U.js";
import "./chunk-ORNJ4GCN-9SMZAFfc.js";
import "./chunk-LIHQZDEY-eWu76TC0.js";
import "./chunk-CIAEETIT-u0HN2vK9.js";
import { t as b } from "./chunk-4BX2VUAB-BsqOnTl0.js";
import { t as x } from "./mermaid-parser.core-C5_5uso8.js";
function S(e2, t2) {
  return t2 < e2 ? -1 : t2 > e2 ? 1 : t2 >= e2 ? 0 : NaN;
}
function C(e2) {
  return e2;
}
function w() {
  var e2 = C, t2 = S, n2 = null, r2 = m(0), a2 = m(f), o2 = m(0);
  function s2(s3) {
    var c2, l2 = (s3 = i(s3)).length, u2, d2, p2 = 0, m2 = Array(l2), h2 = Array(l2), g2 = +r2.apply(this, arguments), _2 = Math.min(f, Math.max(-f, a2.apply(this, arguments) - g2)), v2, y2 = Math.min(Math.abs(_2) / l2, o2.apply(this, arguments)), b2 = y2 * (_2 < 0 ? -1 : 1), x2;
    for (c2 = 0; c2 < l2; ++c2) (x2 = h2[m2[c2] = c2] = +e2(s3[c2], c2, s3)) > 0 && (p2 += x2);
    for (t2 == null ? n2 != null && m2.sort(function(e3, t3) {
      return n2(s3[e3], s3[t3]);
    }) : m2.sort(function(e3, n3) {
      return t2(h2[e3], h2[n3]);
    }), c2 = 0, d2 = p2 ? (_2 - l2 * b2) / p2 : 0; c2 < l2; ++c2, g2 = v2) u2 = m2[c2], x2 = h2[u2], v2 = g2 + (x2 > 0 ? x2 * d2 : 0) + b2, h2[u2] = { data: s3[u2], index: c2, value: x2, startAngle: g2, endAngle: v2, padAngle: y2 };
    return h2;
  }
  return s2.value = function(t3) {
    return arguments.length ? (e2 = typeof t3 == `function` ? t3 : m(+t3), s2) : e2;
  }, s2.sortValues = function(e3) {
    return arguments.length ? (t2 = e3, n2 = null, s2) : t2;
  }, s2.sort = function(e3) {
    return arguments.length ? (n2 = e3, t2 = null, s2) : n2;
  }, s2.startAngle = function(e3) {
    return arguments.length ? (r2 = typeof e3 == `function` ? e3 : m(+e3), s2) : r2;
  }, s2.endAngle = function(e3) {
    return arguments.length ? (a2 = typeof e3 == `function` ? e3 : m(+e3), s2) : a2;
  }, s2.padAngle = function(e3) {
    return arguments.length ? (o2 = typeof e3 == `function` ? e3 : m(+e3), s2) : o2;
  }, s2;
}
var T = v.pie, E = { sections: /* @__PURE__ */ new Map(), showData: false, config: T }, D = E.sections, O = E.showData, k = structuredClone(T), A = { getConfig: a(() => structuredClone(k), `getConfig`), clear: a(() => {
  D = /* @__PURE__ */ new Map(), O = E.showData, _();
}, `clear`), setDiagramTitle: r, getDiagramTitle: n, setAccTitle: l, getAccTitle: h, setAccDescription: s, getAccDescription: y, addSection: a(({ label: e2, value: t2 }) => {
  if (t2 < 0) throw Error(`"${e2}" has invalid value: ${t2}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
  D.has(e2) || (D.set(e2, t2), p.debug(`added new section: ${e2}, with value: ${t2}`));
}, `addSection`), getSections: a(() => D, `getSections`), setShowData: a((e2) => {
  O = e2;
}, `setShowData`), getShowData: a(() => O, `getShowData`) }, j = a((e2, t2) => {
  b(e2, t2), t2.setShowData(e2.showData), e2.sections.map(t2.addSection);
}, `populateDb`), M = { parse: a(async (e2) => {
  let t2 = await x(`pie`, e2);
  p.debug(t2), j(t2, A);
}, `parse`) }, N = a((e2) => `
  .pieCircle{
    stroke: ${e2.pieStrokeColor};
    stroke-width : ${e2.pieStrokeWidth};
    opacity : ${e2.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e2.pieOuterStrokeColor};
    stroke-width: ${e2.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e2.pieTitleTextSize};
    fill: ${e2.pieTitleTextColor};
    font-family: ${e2.fontFamily};
  }
  .slice {
    font-family: ${e2.fontFamily};
    fill: ${e2.pieSectionTextColor};
    font-size:${e2.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e2.pieLegendTextColor};
    font-family: ${e2.fontFamily};
    font-size: ${e2.pieLegendTextSize};
  }
`, `getStyles`), P = a((e2) => {
  let t2 = [...e2.values()].reduce((e3, t3) => e3 + t3, 0), n2 = [...e2.entries()].map(([e3, t3]) => ({ label: e3, value: t3 })).filter((e3) => e3.value / t2 * 100 >= 1);
  return w().value((e3) => e3.value).sort(null)(n2);
}, `createPieArcs`), F = { parser: M, db: A, renderer: { draw: a((n2, r2, i2, a2) => {
  var _a;
  p.debug(`rendering pie chart
` + n2);
  let s2 = a2.db, l2 = d(), f2 = o(s2.getConfig(), l2.pie), m2 = c(r2), h2 = m2.append(`g`);
  h2.attr(`transform`, `translate(225,225)`);
  let { themeVariables: _2 } = l2, [v2] = u(_2.pieOuterStrokeWidth);
  v2 ?? (v2 = 2);
  let y2 = f2.textPosition, b2 = t().innerRadius(0).outerRadius(185), x2 = t().innerRadius(185 * y2).outerRadius(185 * y2);
  h2.append(`circle`).attr(`cx`, 0).attr(`cy`, 0).attr(`r`, 185 + v2 / 2).attr(`class`, `pieOuterCircle`);
  let S2 = s2.getSections(), C2 = P(S2), w2 = [_2.pie1, _2.pie2, _2.pie3, _2.pie4, _2.pie5, _2.pie6, _2.pie7, _2.pie8, _2.pie9, _2.pie10, _2.pie11, _2.pie12], T2 = 0;
  S2.forEach((e2) => {
    T2 += e2;
  });
  let E2 = C2.filter((e2) => (e2.data.value / T2 * 100).toFixed(0) !== `0`), D2 = e(w2).domain([...S2.keys()]);
  h2.selectAll(`mySlices`).data(E2).enter().append(`path`).attr(`d`, b2).attr(`fill`, (e2) => D2(e2.data.label)).attr(`class`, `pieCircle`), h2.selectAll(`mySlices`).data(E2).enter().append(`text`).text((e2) => (e2.data.value / T2 * 100).toFixed(0) + `%`).attr(`transform`, (e2) => `translate(` + x2.centroid(e2) + `)`).style(`text-anchor`, `middle`).attr(`class`, `slice`);
  let O2 = h2.append(`text`).text(s2.getDiagramTitle()).attr(`x`, 0).attr(`y`, -400 / 2).attr(`class`, `pieTitleText`), k2 = [...S2.entries()].map(([e2, t2]) => ({ label: e2, value: t2 })), A2 = h2.selectAll(`.legend`).data(k2).enter().append(`g`).attr(`class`, `legend`).attr(`transform`, (e2, t2) => {
    let n3 = 22 * k2.length / 2;
    return `translate(216,` + (t2 * 22 - n3) + `)`;
  });
  A2.append(`rect`).attr(`width`, 18).attr(`height`, 18).style(`fill`, (e2) => D2(e2.label)).style(`stroke`, (e2) => D2(e2.label)), A2.append(`text`).attr(`x`, 22).attr(`y`, 14).text((e2) => s2.getShowData() ? `${e2.label} [${e2.value}]` : e2.label);
  let j2 = 512 + Math.max(...A2.selectAll(`text`).nodes().map((e2) => (e2 == null ? void 0 : e2.getBoundingClientRect().width) ?? 0)), M2 = ((_a = O2.node()) == null ? void 0 : _a.getBoundingClientRect().width) ?? 0, N2 = 450 / 2 - M2 / 2, F2 = 450 / 2 + M2 / 2, I = Math.min(0, N2), L = Math.max(j2, F2) - I;
  m2.attr(`viewBox`, `${I} 0 ${L} 450`), g(m2, 450, L, f2.useMaxWidth);
}, `draw`) }, styles: N };
export {
  F as diagram
};
