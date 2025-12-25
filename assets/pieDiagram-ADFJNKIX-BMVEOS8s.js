import { B as e, C as t, U as n, _ as r, a as i, b as a, c as o, d as s, v as c, z as l } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as u, h as d } from "./src-D8UWkQNo.js";
import { t as f } from "./ordinal-Bps6pt-l.js";
import { n as p } from "./path-B-GLhb_8.js";
import "./init-BBmXJqXp.js";
import { p as m } from "./math-O_7OW4FW.js";
import { t as h } from "./arc-Bab8x5BZ.js";
import { t as g } from "./array-CopOK-GI.js";
import { i as _, p as v } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as y } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import "./isEmpty-Suvitui-.js";
import "./chunk-FPAJGGOC-C3gFAQ_Y.js";
import "./reduce-S4_EnTW-.js";
import "./flatten-DG1tNxhW.js";
import "./chunk-O7ZBX7Z2-Bruh2zNs.js";
import "./chunk-S6J4BHB3-DAc_Mhl7.js";
import "./chunk-LBM3YZW2-B_3MR1yX.js";
import "./chunk-76Q3JFCE-BoCXoCPi.js";
import "./chunk-T53DSG4Q-CZaMHOwT.js";
import "./chunk-LHMN2FUI-C3wDs2RB.js";
import "./chunk-FWNWRKHM-Df_W1Cti.js";
import { t as b } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as x } from "./mermaid-parser.core-pDIzeYSr.js";
function S(e2, t2) {
  return t2 < e2 ? -1 : t2 > e2 ? 1 : t2 >= e2 ? 0 : NaN;
}
function C(e2) {
  return e2;
}
function w() {
  var e2 = C, t2 = S, n2 = null, r2 = p(0), i2 = p(m), a2 = p(0);
  function o2(o3) {
    var s2, c2 = (o3 = g(o3)).length, l2, u2, d2 = 0, f2 = Array(c2), p2 = Array(c2), h2 = +r2.apply(this, arguments), _2 = Math.min(m, Math.max(-m, i2.apply(this, arguments) - h2)), v2, y2 = Math.min(Math.abs(_2) / c2, a2.apply(this, arguments)), b2 = y2 * (_2 < 0 ? -1 : 1), x2;
    for (s2 = 0; s2 < c2; ++s2) (x2 = p2[f2[s2] = s2] = +e2(o3[s2], s2, o3)) > 0 && (d2 += x2);
    for (t2 == null ? n2 != null && f2.sort(function(e3, t3) {
      return n2(o3[e3], o3[t3]);
    }) : f2.sort(function(e3, n3) {
      return t2(p2[e3], p2[n3]);
    }), s2 = 0, u2 = d2 ? (_2 - c2 * b2) / d2 : 0; s2 < c2; ++s2, h2 = v2) l2 = f2[s2], x2 = p2[l2], v2 = h2 + (x2 > 0 ? x2 * u2 : 0) + b2, p2[l2] = { data: o3[l2], index: s2, value: x2, startAngle: h2, endAngle: v2, padAngle: y2 };
    return p2;
  }
  return o2.value = function(t3) {
    return arguments.length ? (e2 = typeof t3 == `function` ? t3 : p(+t3), o2) : e2;
  }, o2.sortValues = function(e3) {
    return arguments.length ? (t2 = e3, n2 = null, o2) : t2;
  }, o2.sort = function(e3) {
    return arguments.length ? (n2 = e3, t2 = null, o2) : n2;
  }, o2.startAngle = function(e3) {
    return arguments.length ? (r2 = typeof e3 == `function` ? e3 : p(+e3), o2) : r2;
  }, o2.endAngle = function(e3) {
    return arguments.length ? (i2 = typeof e3 == `function` ? e3 : p(+e3), o2) : i2;
  }, o2.padAngle = function(e3) {
    return arguments.length ? (a2 = typeof e3 == `function` ? e3 : p(+e3), o2) : a2;
  }, o2;
}
var T = s.pie, E = { sections: /* @__PURE__ */ new Map(), showData: false, config: T }, D = E.sections, O = E.showData, k = structuredClone(T), A = { getConfig: d(() => structuredClone(k), `getConfig`), clear: d(() => {
  D = /* @__PURE__ */ new Map(), O = E.showData, i();
}, `clear`), setDiagramTitle: n, getDiagramTitle: t, setAccTitle: e, getAccTitle: c, setAccDescription: l, getAccDescription: r, addSection: d(({ label: e2, value: t2 }) => {
  if (t2 < 0) throw Error(`"${e2}" has invalid value: ${t2}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
  D.has(e2) || (D.set(e2, t2), u.debug(`added new section: ${e2}, with value: ${t2}`));
}, `addSection`), getSections: d(() => D, `getSections`), setShowData: d((e2) => {
  O = e2;
}, `setShowData`), getShowData: d(() => O, `getShowData`) }, j = d((e2, t2) => {
  b(e2, t2), t2.setShowData(e2.showData), e2.sections.map(t2.addSection);
}, `populateDb`), M = { parse: d(async (e2) => {
  let t2 = await x(`pie`, e2);
  u.debug(t2), j(t2, A);
}, `parse`) }, N = d((e2) => `
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
`, `getStyles`), P = d((e2) => {
  let t2 = [...e2.values()].reduce((e3, t3) => e3 + t3, 0), n2 = [...e2.entries()].map(([e3, t3]) => ({ label: e3, value: t3 })).filter((e3) => e3.value / t2 * 100 >= 1).sort((e3, t3) => t3.value - e3.value);
  return w().value((e3) => e3.value)(n2);
}, `createPieArcs`), F = { parser: M, db: A, renderer: { draw: d((e2, t2, n2, r2) => {
  u.debug(`rendering pie chart
` + e2);
  let i2 = r2.db, s2 = a(), c2 = _(i2.getConfig(), s2.pie), l2 = y(t2), d2 = l2.append(`g`);
  d2.attr(`transform`, `translate(225,225)`);
  let { themeVariables: p2 } = s2, [m2] = v(p2.pieOuterStrokeWidth);
  m2 ?? (m2 = 2);
  let g2 = c2.textPosition, b2 = h().innerRadius(0).outerRadius(185), x2 = h().innerRadius(185 * g2).outerRadius(185 * g2);
  d2.append(`circle`).attr(`cx`, 0).attr(`cy`, 0).attr(`r`, 185 + m2 / 2).attr(`class`, `pieOuterCircle`);
  let S2 = i2.getSections(), C2 = P(S2), w2 = [p2.pie1, p2.pie2, p2.pie3, p2.pie4, p2.pie5, p2.pie6, p2.pie7, p2.pie8, p2.pie9, p2.pie10, p2.pie11, p2.pie12], T2 = 0;
  S2.forEach((e3) => {
    T2 += e3;
  });
  let E2 = C2.filter((e3) => (e3.data.value / T2 * 100).toFixed(0) !== `0`), D2 = f(w2);
  d2.selectAll(`mySlices`).data(E2).enter().append(`path`).attr(`d`, b2).attr(`fill`, (e3) => D2(e3.data.label)).attr(`class`, `pieCircle`), d2.selectAll(`mySlices`).data(E2).enter().append(`text`).text((e3) => (e3.data.value / T2 * 100).toFixed(0) + `%`).attr(`transform`, (e3) => `translate(` + x2.centroid(e3) + `)`).style(`text-anchor`, `middle`).attr(`class`, `slice`), d2.append(`text`).text(i2.getDiagramTitle()).attr(`x`, 0).attr(`y`, -400 / 2).attr(`class`, `pieTitleText`);
  let O2 = [...S2.entries()].map(([e3, t3]) => ({ label: e3, value: t3 })), k2 = d2.selectAll(`.legend`).data(O2).enter().append(`g`).attr(`class`, `legend`).attr(`transform`, (e3, t3) => {
    let n3 = 22 * O2.length / 2;
    return `translate(216,` + (t3 * 22 - n3) + `)`;
  });
  k2.append(`rect`).attr(`width`, 18).attr(`height`, 18).style(`fill`, (e3) => D2(e3.label)).style(`stroke`, (e3) => D2(e3.label)), k2.append(`text`).attr(`x`, 22).attr(`y`, 14).text((e3) => i2.getShowData() ? `${e3.label} [${e3.value}]` : e3.label);
  let A2 = 512 + Math.max(...k2.selectAll(`text`).nodes().map((e3) => (e3 == null ? void 0 : e3.getBoundingClientRect().width) ?? 0));
  l2.attr(`viewBox`, `0 0 ${A2} 450`), o(l2, 450, A2, c2.useMaxWidth);
}, `draw`) }, styles: N };
export {
  F as diagram
};
