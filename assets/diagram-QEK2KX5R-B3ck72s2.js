import { B as e, C as t, T as n, U as r, _ as i, a, d as o, v as s, y as c, z as l } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as u, h as d } from "./src-D8UWkQNo.js";
import "./math-O_7OW4FW.js";
import { i as f } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as p } from "./chunk-EXTU4WIE-K1dhFJK1.js";
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
import { t as m } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as h } from "./mermaid-parser.core-pDIzeYSr.js";
var g = { showLegend: true, ticks: 5, max: null, min: 0, graticule: `circle` }, _ = { axes: [], curves: [], options: g }, v = structuredClone(_), y = o.radar, b = d(() => f({ ...y, ...c().radar }), `getConfig`), x = d(() => v.axes, `getAxes`), S = d(() => v.curves, `getCurves`), C = d(() => v.options, `getOptions`), w = d((e2) => {
  v.axes = e2.map((e3) => ({ name: e3.name, label: e3.label ?? e3.name }));
}, `setAxes`), T = d((e2) => {
  v.curves = e2.map((e3) => ({ name: e3.name, label: e3.label ?? e3.name, entries: E(e3.entries) }));
}, `setCurves`), E = d((e2) => {
  if (e2[0].axis == null) return e2.map((e3) => e3.value);
  let t2 = x();
  if (t2.length === 0) throw Error(`Axes must be populated before curves for reference entries`);
  return t2.map((t3) => {
    let n2 = e2.find((e3) => {
      var _a;
      return ((_a = e3.axis) == null ? void 0 : _a.$refText) === t3.name;
    });
    if (n2 === void 0) throw Error(`Missing entry for axis ` + t3.label);
    return n2.value;
  });
}, `computeCurveEntries`), D = { getAxes: x, getCurves: S, getOptions: C, setAxes: w, setCurves: T, setOptions: d((e2) => {
  var _a, _b, _c, _d, _e;
  let t2 = e2.reduce((e3, t3) => (e3[t3.name] = t3, e3), {});
  v.options = { showLegend: ((_a = t2.showLegend) == null ? void 0 : _a.value) ?? g.showLegend, ticks: ((_b = t2.ticks) == null ? void 0 : _b.value) ?? g.ticks, max: ((_c = t2.max) == null ? void 0 : _c.value) ?? g.max, min: ((_d = t2.min) == null ? void 0 : _d.value) ?? g.min, graticule: ((_e = t2.graticule) == null ? void 0 : _e.value) ?? g.graticule };
}, `setOptions`), getConfig: b, clear: d(() => {
  a(), v = structuredClone(_);
}, `clear`), setAccTitle: e, getAccTitle: s, setDiagramTitle: r, getDiagramTitle: t, getAccDescription: i, setAccDescription: l }, O = d((e2) => {
  m(e2, D);
  let { axes: t2, curves: n2, options: r2 } = e2;
  D.setAxes(t2), D.setCurves(n2), D.setOptions(r2);
}, `populate`), k = { parse: d(async (e2) => {
  let t2 = await h(`radar`, e2);
  u.debug(t2), O(t2);
}, `parse`) }, A = d((e2, t2, n2, r2) => {
  let i2 = r2.db, a2 = i2.getAxes(), o2 = i2.getCurves(), s2 = i2.getOptions(), c2 = i2.getConfig(), l2 = i2.getDiagramTitle(), u2 = j(p(t2), c2), d2 = s2.max ?? Math.max(...o2.map((e3) => Math.max(...e3.entries))), f2 = s2.min, m2 = Math.min(c2.width, c2.height) / 2;
  M(u2, a2, m2, s2.ticks, s2.graticule), N(u2, a2, m2, c2), P(u2, a2, o2, f2, d2, s2.graticule, c2), L(u2, o2, s2.showLegend, c2), u2.append(`text`).attr(`class`, `radarTitle`).text(l2).attr(`x`, 0).attr(`y`, -c2.height / 2 - c2.marginTop);
}, `draw`), j = d((e2, t2) => {
  let n2 = t2.width + t2.marginLeft + t2.marginRight, r2 = t2.height + t2.marginTop + t2.marginBottom, i2 = { x: t2.marginLeft + t2.width / 2, y: t2.marginTop + t2.height / 2 };
  return e2.attr(`viewbox`, `0 0 ${n2} ${r2}`).attr(`width`, n2).attr(`height`, r2), e2.append(`g`).attr(`transform`, `translate(${i2.x}, ${i2.y})`);
}, `drawFrame`), M = d((e2, t2, n2, r2, i2) => {
  if (i2 === `circle`) for (let t3 = 0; t3 < r2; t3++) {
    let i3 = n2 * (t3 + 1) / r2;
    e2.append(`circle`).attr(`r`, i3).attr(`class`, `radarGraticule`);
  }
  else if (i2 === `polygon`) {
    let i3 = t2.length;
    for (let a2 = 0; a2 < r2; a2++) {
      let o2 = n2 * (a2 + 1) / r2, s2 = t2.map((e3, t3) => {
        let n3 = 2 * t3 * Math.PI / i3 - Math.PI / 2;
        return `${o2 * Math.cos(n3)},${o2 * Math.sin(n3)}`;
      }).join(` `);
      e2.append(`polygon`).attr(`points`, s2).attr(`class`, `radarGraticule`);
    }
  }
}, `drawGraticule`), N = d((e2, t2, n2, r2) => {
  let i2 = t2.length;
  for (let a2 = 0; a2 < i2; a2++) {
    let o2 = t2[a2].label, s2 = 2 * a2 * Math.PI / i2 - Math.PI / 2;
    e2.append(`line`).attr(`x1`, 0).attr(`y1`, 0).attr(`x2`, n2 * r2.axisScaleFactor * Math.cos(s2)).attr(`y2`, n2 * r2.axisScaleFactor * Math.sin(s2)).attr(`class`, `radarAxisLine`), e2.append(`text`).text(o2).attr(`x`, n2 * r2.axisLabelFactor * Math.cos(s2)).attr(`y`, n2 * r2.axisLabelFactor * Math.sin(s2)).attr(`class`, `radarAxisLabel`);
  }
}, `drawAxes`);
function P(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = t2.length, c2 = Math.min(o2.width, o2.height) / 2;
  n2.forEach((t3, n3) => {
    if (t3.entries.length !== s2) return;
    let l2 = t3.entries.map((e3, t4) => {
      let n4 = 2 * Math.PI * t4 / s2 - Math.PI / 2, a3 = F(e3, r2, i2, c2);
      return { x: a3 * Math.cos(n4), y: a3 * Math.sin(n4) };
    });
    a2 === `circle` ? e2.append(`path`).attr(`d`, I(l2, o2.curveTension)).attr(`class`, `radarCurve-${n3}`) : a2 === `polygon` && e2.append(`polygon`).attr(`points`, l2.map((e3) => `${e3.x},${e3.y}`).join(` `)).attr(`class`, `radarCurve-${n3}`);
  });
}
d(P, `drawCurves`);
function F(e2, t2, n2, r2) {
  return r2 * (Math.min(Math.max(e2, t2), n2) - t2) / (n2 - t2);
}
d(F, `relativeRadius`);
function I(e2, t2) {
  let n2 = e2.length, r2 = `M${e2[0].x},${e2[0].y}`;
  for (let i2 = 0; i2 < n2; i2++) {
    let a2 = e2[(i2 - 1 + n2) % n2], o2 = e2[i2], s2 = e2[(i2 + 1) % n2], c2 = e2[(i2 + 2) % n2], l2 = { x: o2.x + (s2.x - a2.x) * t2, y: o2.y + (s2.y - a2.y) * t2 }, u2 = { x: s2.x - (c2.x - o2.x) * t2, y: s2.y - (c2.y - o2.y) * t2 };
    r2 += ` C${l2.x},${l2.y} ${u2.x},${u2.y} ${s2.x},${s2.y}`;
  }
  return `${r2} Z`;
}
d(I, `closedRoundCurve`);
function L(e2, t2, n2, r2) {
  if (!n2) return;
  let i2 = (r2.width / 2 + r2.marginRight) * 3 / 4, a2 = -(r2.height / 2 + r2.marginTop) * 3 / 4;
  t2.forEach((t3, n3) => {
    let r3 = e2.append(`g`).attr(`transform`, `translate(${i2}, ${a2 + n3 * 20})`);
    r3.append(`rect`).attr(`width`, 12).attr(`height`, 12).attr(`class`, `radarLegendBox-${n3}`), r3.append(`text`).attr(`x`, 16).attr(`y`, 0).attr(`class`, `radarLegendText`).text(t3.label);
  });
}
d(L, `drawLegend`);
var R = { draw: A }, z = d((e2, t2) => {
  let n2 = ``;
  for (let r2 = 0; r2 < e2.THEME_COLOR_LIMIT; r2++) {
    let i2 = e2[`cScale${r2}`];
    n2 += `
		.radarCurve-${r2} {
			color: ${i2};
			fill: ${i2};
			fill-opacity: ${t2.curveOpacity};
			stroke: ${i2};
			stroke-width: ${t2.curveStrokeWidth};
		}
		.radarLegendBox-${r2} {
			fill: ${i2};
			fill-opacity: ${t2.curveOpacity};
			stroke: ${i2};
		}
		`;
  }
  return n2;
}, `genIndexStyles`), B = d((e2) => {
  let t2 = f(n(), c().themeVariables);
  return { themeVariables: t2, radarOptions: f(t2.radar, e2) };
}, `buildRadarStyleOptions`), V = { parser: k, db: D, renderer: R, styles: d(({ radar: e2 } = {}) => {
  let { themeVariables: t2, radarOptions: n2 } = B(e2);
  return `
	.radarTitle {
		font-size: ${t2.fontSize};
		color: ${t2.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${n2.axisColor};
		stroke-width: ${n2.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${n2.axisLabelFontSize}px;
		color: ${n2.axisColor};
	}
	.radarGraticule {
		fill: ${n2.graticuleColor};
		fill-opacity: ${n2.graticuleOpacity};
		stroke: ${n2.graticuleColor};
		stroke-width: ${n2.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${n2.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${z(t2, n2)}
	`;
}, `styles`) };
export {
  V as diagram
};
