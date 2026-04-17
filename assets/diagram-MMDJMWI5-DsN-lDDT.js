import { B as e, C as t, E as n, V as r, W as i, _ as a, a as o, c as s, d as c, v as l, y as u } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { g as d, h as f } from "./src-DiRGiyL4.js";
import "./dist-BhM2qfql.js";
import { i as p } from "./chunk-5PVQY5BW-BPITZuxu.js";
import { t as m } from "./chunk-426QAEUC-DnOBqw_y.js";
import "./identity-B9owP9ru.js";
import "./isEmpty-DOQ62aC5.js";
import "./chunk-K5T4RW27-CzljlcrI.js";
import "./reduce-mGdWE-KL.js";
import "./flatten-CqtkwEvn.js";
import "./chunk-7N4EOEYR-cGcAQvpO.js";
import "./chunk-67CJDMHE-X0heNxj0.js";
import "./chunk-KGLVRYIC-BC3qp-Ss.js";
import "./chunk-FOC6F5B3-OxJqr3tu.js";
import "./chunk-AA7GKIK3-H6knSMUZ.js";
import "./chunk-2KRD3SAO-BhrV7a2r.js";
import "./chunk-ORNJ4GCN-DkoYmq2g.js";
import "./chunk-LIHQZDEY-D-TcdTVz.js";
import "./chunk-CIAEETIT-B3M4TTX-.js";
import { t as h } from "./chunk-4BX2VUAB-Zt4DWBfT.js";
import { t as g } from "./mermaid-parser.core-BhyjZala.js";
var _ = { showLegend: true, ticks: 5, max: null, min: 0, graticule: `circle` }, v = { axes: [], curves: [], options: _ }, y = structuredClone(v), b = c.radar, x = f(() => p({ ...b, ...u().radar }), `getConfig`), S = f(() => y.axes, `getAxes`), C = f(() => y.curves, `getCurves`), w = f(() => y.options, `getOptions`), T = f((e2) => {
  y.axes = e2.map((e3) => ({ name: e3.name, label: e3.label ?? e3.name }));
}, `setAxes`), E = f((e2) => {
  y.curves = e2.map((e3) => ({ name: e3.name, label: e3.label ?? e3.name, entries: D(e3.entries) }));
}, `setCurves`), D = f((e2) => {
  if (e2[0].axis == null) return e2.map((e3) => e3.value);
  let t2 = S();
  if (t2.length === 0) throw Error(`Axes must be populated before curves for reference entries`);
  return t2.map((t3) => {
    let n2 = e2.find((e3) => {
      var _a;
      return ((_a = e3.axis) == null ? void 0 : _a.$refText) === t3.name;
    });
    if (n2 === void 0) throw Error(`Missing entry for axis ` + t3.label);
    return n2.value;
  });
}, `computeCurveEntries`), O = { getAxes: S, getCurves: C, getOptions: w, setAxes: T, setCurves: E, setOptions: f((e2) => {
  var _a, _b, _c, _d, _e;
  let t2 = e2.reduce((e3, t3) => (e3[t3.name] = t3, e3), {});
  y.options = { showLegend: ((_a = t2.showLegend) == null ? void 0 : _a.value) ?? _.showLegend, ticks: ((_b = t2.ticks) == null ? void 0 : _b.value) ?? _.ticks, max: ((_c = t2.max) == null ? void 0 : _c.value) ?? _.max, min: ((_d = t2.min) == null ? void 0 : _d.value) ?? _.min, graticule: ((_e = t2.graticule) == null ? void 0 : _e.value) ?? _.graticule };
}, `setOptions`), getConfig: x, clear: f(() => {
  o(), y = structuredClone(v);
}, `clear`), setAccTitle: r, getAccTitle: l, setDiagramTitle: i, getDiagramTitle: t, getAccDescription: a, setAccDescription: e }, k = f((e2) => {
  h(e2, O);
  let { axes: t2, curves: n2, options: r2 } = e2;
  O.setAxes(t2), O.setCurves(n2), O.setOptions(r2);
}, `populate`), A = { parse: f(async (e2) => {
  let t2 = await g(`radar`, e2);
  d.debug(t2), k(t2);
}, `parse`) }, j = f((e2, t2, n2, r2) => {
  let i2 = r2.db, a2 = i2.getAxes(), o2 = i2.getCurves(), s2 = i2.getOptions(), c2 = i2.getConfig(), l2 = i2.getDiagramTitle(), u2 = M(m(t2), c2), d2 = s2.max ?? Math.max(...o2.map((e3) => Math.max(...e3.entries))), f2 = s2.min, p2 = Math.min(c2.width, c2.height) / 2;
  N(u2, a2, p2, s2.ticks, s2.graticule), P(u2, a2, p2, c2), F(u2, a2, o2, f2, d2, s2.graticule, c2), R(u2, o2, s2.showLegend, c2), u2.append(`text`).attr(`class`, `radarTitle`).text(l2).attr(`x`, 0).attr(`y`, -c2.height / 2 - c2.marginTop);
}, `draw`), M = f((e2, t2) => {
  let n2 = t2.width + t2.marginLeft + t2.marginRight, r2 = t2.height + t2.marginTop + t2.marginBottom, i2 = { x: t2.marginLeft + t2.width / 2, y: t2.marginTop + t2.height / 2 };
  return s(e2, r2, n2, t2.useMaxWidth ?? true), e2.attr(`viewBox`, `0 0 ${n2} ${r2}`), e2.append(`g`).attr(`transform`, `translate(${i2.x}, ${i2.y})`);
}, `drawFrame`), N = f((e2, t2, n2, r2, i2) => {
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
}, `drawGraticule`), P = f((e2, t2, n2, r2) => {
  let i2 = t2.length;
  for (let a2 = 0; a2 < i2; a2++) {
    let o2 = t2[a2].label, s2 = 2 * a2 * Math.PI / i2 - Math.PI / 2;
    e2.append(`line`).attr(`x1`, 0).attr(`y1`, 0).attr(`x2`, n2 * r2.axisScaleFactor * Math.cos(s2)).attr(`y2`, n2 * r2.axisScaleFactor * Math.sin(s2)).attr(`class`, `radarAxisLine`), e2.append(`text`).text(o2).attr(`x`, n2 * r2.axisLabelFactor * Math.cos(s2)).attr(`y`, n2 * r2.axisLabelFactor * Math.sin(s2)).attr(`class`, `radarAxisLabel`);
  }
}, `drawAxes`);
function F(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = t2.length, c2 = Math.min(o2.width, o2.height) / 2;
  n2.forEach((t3, n3) => {
    if (t3.entries.length !== s2) return;
    let l2 = t3.entries.map((e3, t4) => {
      let n4 = 2 * Math.PI * t4 / s2 - Math.PI / 2, a3 = I(e3, r2, i2, c2);
      return { x: a3 * Math.cos(n4), y: a3 * Math.sin(n4) };
    });
    a2 === `circle` ? e2.append(`path`).attr(`d`, L(l2, o2.curveTension)).attr(`class`, `radarCurve-${n3}`) : a2 === `polygon` && e2.append(`polygon`).attr(`points`, l2.map((e3) => `${e3.x},${e3.y}`).join(` `)).attr(`class`, `radarCurve-${n3}`);
  });
}
f(F, `drawCurves`);
function I(e2, t2, n2, r2) {
  return r2 * (Math.min(Math.max(e2, t2), n2) - t2) / (n2 - t2);
}
f(I, `relativeRadius`);
function L(e2, t2) {
  let n2 = e2.length, r2 = `M${e2[0].x},${e2[0].y}`;
  for (let i2 = 0; i2 < n2; i2++) {
    let a2 = e2[(i2 - 1 + n2) % n2], o2 = e2[i2], s2 = e2[(i2 + 1) % n2], c2 = e2[(i2 + 2) % n2], l2 = { x: o2.x + (s2.x - a2.x) * t2, y: o2.y + (s2.y - a2.y) * t2 }, u2 = { x: s2.x - (c2.x - o2.x) * t2, y: s2.y - (c2.y - o2.y) * t2 };
    r2 += ` C${l2.x},${l2.y} ${u2.x},${u2.y} ${s2.x},${s2.y}`;
  }
  return `${r2} Z`;
}
f(L, `closedRoundCurve`);
function R(e2, t2, n2, r2) {
  if (!n2) return;
  let i2 = (r2.width / 2 + r2.marginRight) * 3 / 4, a2 = -(r2.height / 2 + r2.marginTop) * 3 / 4;
  t2.forEach((t3, n3) => {
    let r3 = e2.append(`g`).attr(`transform`, `translate(${i2}, ${a2 + n3 * 20})`);
    r3.append(`rect`).attr(`width`, 12).attr(`height`, 12).attr(`class`, `radarLegendBox-${n3}`), r3.append(`text`).attr(`x`, 16).attr(`y`, 0).attr(`class`, `radarLegendText`).text(t3.label);
  });
}
f(R, `drawLegend`);
var z = { draw: j }, B = f((e2, t2) => {
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
}, `genIndexStyles`), V = f((e2) => {
  let t2 = p(n(), u().themeVariables);
  return { themeVariables: t2, radarOptions: p(t2.radar, e2) };
}, `buildRadarStyleOptions`), H = { parser: A, db: O, renderer: z, styles: f(({ radar: e2 } = {}) => {
  let { themeVariables: t2, radarOptions: n2 } = V(e2);
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
	${B(t2, n2)}
	`;
}, `styles`) };
export {
  H as diagram
};
