import { L as e, R as t, b as n, h as r, j as i, k as a, w as o, y as s } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { g as c, h as l, p as u } from "./src-BWB47EtT.js";
import { a as d, r as f, u as p } from "./chunk-5PVQY5BW-DyH3Wf6D.js";
import { n as m, t as h } from "./chunk-ZZ45TVLE-BXYMKbdF.js";
import { a as g, i as _, r as v, t as y } from "./chunk-X2U36JSP-6pKAqsHP.js";
import { n as b, r as x } from "./chunk-U2HBQHQK-B952OdWg.js";
import { t as S } from "./rough.esm-1QChbhql.js";
var C = l(async (t2, i2, a2) => {
  var _a, _b;
  let o2, s2 = i2.useHtmlLabels || r((_a = n()) == null ? void 0 : _a.htmlLabels);
  o2 = a2 || `node default`;
  let c2 = t2.insert(`g`).attr(`class`, o2).attr(`id`, i2.domId || i2.id), l2 = c2.insert(`g`).attr(`class`, `label`).attr(`style`, p(i2.labelStyle)), f2;
  f2 = i2.label === void 0 ? `` : typeof i2.label == `string` ? i2.label : i2.label[0];
  let m2 = !!i2.icon || !!i2.img, g2 = i2.labelType === `markdown`, _2 = await b(l2, e(d(f2), n()), { useHtmlLabels: s2, width: i2.width || ((_b = n().flowchart) == null ? void 0 : _b.wrappingWidth), classes: g2 ? `markdown-node-label` : ``, style: i2.labelStyle, addSvgBackground: m2, markdown: g2 }, n()), v2 = _2.getBBox(), y2 = ((i2 == null ? void 0 : i2.padding) ?? 0) / 2;
  if (s2) {
    let e2 = _2.children[0], t3 = u(_2);
    await h(e2, f2), v2 = e2.getBoundingClientRect(), t3.attr(`width`, v2.width), t3.attr(`height`, v2.height);
  }
  return s2 ? l2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`) : l2.attr(`transform`, `translate(0, ` + -v2.height / 2 + `)`), i2.centerLabel && l2.attr(`transform`, `translate(` + -v2.width / 2 + `, ` + -v2.height / 2 + `)`), l2.insert(`rect`, `:first-child`), { shapeSvg: c2, bbox: v2, halfPadding: y2, label: l2 };
}, `labelHelper`), w = l(async (t2, r2, i2) => {
  var _a, _b;
  let a2 = i2.useHtmlLabels ?? o(n()), s2 = t2.insert(`g`).attr(`class`, `label`).attr(`style`, i2.labelStyle || ``), c2 = await b(s2, e(d(r2), n()), { useHtmlLabels: a2, width: i2.width || ((_b = (_a = n()) == null ? void 0 : _a.flowchart) == null ? void 0 : _b.wrappingWidth), style: i2.labelStyle, addSvgBackground: !!i2.icon || !!i2.img }), l2 = c2.getBBox(), f2 = i2.padding / 2;
  if (o(n())) {
    let e2 = c2.children[0], t3 = u(c2);
    l2 = e2.getBoundingClientRect(), t3.attr(`width`, l2.width), t3.attr(`height`, l2.height);
  }
  return a2 ? s2.attr(`transform`, `translate(` + -l2.width / 2 + `, ` + -l2.height / 2 + `)`) : s2.attr(`transform`, `translate(0, ` + -l2.height / 2 + `)`), i2.centerLabel && s2.attr(`transform`, `translate(` + -l2.width / 2 + `, ` + -l2.height / 2 + `)`), s2.insert(`rect`, `:first-child`), { shapeSvg: t2, bbox: l2, halfPadding: f2, label: s2 };
}, `insertLabel`), T = l((e2, t2) => {
  let n2 = t2.node().getBBox();
  e2.width = n2.width, e2.height = n2.height;
}, `updateNodeBounds`), E = l((e2, t2) => (e2.look === `handDrawn` ? `rough-node` : `node`) + ` ` + e2.cssClasses + ` ` + (t2 || ``), `getNodeClasses`);
function D(e2) {
  let t2 = e2.map((e3, t3) => `${t3 === 0 ? `M` : `L`}${e3.x},${e3.y}`);
  return t2.push(`Z`), t2.join(` `);
}
l(D, `createPathFromPoints`);
function O(e2, t2, n2, r2, i2, a2) {
  let o2 = [], s2 = n2 - e2, c2 = r2 - t2, l2 = s2 / a2, u2 = 2 * Math.PI / l2, d2 = t2 + c2 / 2;
  for (let t3 = 0; t3 <= 50; t3++) {
    let n3 = e2 + t3 / 50 * s2, r3 = d2 + i2 * Math.sin(u2 * (n3 - e2));
    o2.push({ x: n3, y: r3 });
  }
  return o2;
}
l(O, `generateFullSineWavePoints`);
function k(e2, t2, n2, r2, i2, a2) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
l(k, `generateCirclePoints`);
function A(e2) {
  let t2 = Array.from(e2.childNodes).filter((e3) => e3.tagName === `path`), n2 = document.createElementNS(`http://www.w3.org/2000/svg`, `path`), r2 = t2.map((e3) => e3.getAttribute(`d`)).filter((e3) => e3 !== null).join(` `);
  n2.setAttribute(`d`, r2);
  let i2 = t2.find((e3) => e3.getAttribute(`fill`) !== `none`), a2 = t2.find((e3) => e3.getAttribute(`stroke`) !== `none`), o2 = l((e3, t3) => (e3 == null ? void 0 : e3.getAttribute(t3)) ?? void 0, `getAttr`);
  if (i2) {
    let e3 = { fill: o2(i2, `fill`), "fill-opacity": o2(i2, `fill-opacity`) ?? `1` };
    Object.entries(e3).forEach(([e4, t3]) => {
      t3 && n2.setAttribute(e4, t3);
    });
  }
  if (a2) {
    let e3 = { stroke: o2(a2, `stroke`), "stroke-width": o2(a2, `stroke-width`) ?? `1`, "stroke-opacity": o2(a2, `stroke-opacity`) ?? `1` };
    Object.entries(e3).forEach(([e4, t3]) => {
      t3 && n2.setAttribute(e4, t3);
    });
  }
  let s2 = document.createElementNS(`http://www.w3.org/2000/svg`, `g`);
  return s2.appendChild(n2), s2;
}
l(A, `mergePaths`);
var j = l((e2, t2) => {
  var n2 = e2.x, r2 = e2.y, i2 = t2.x - n2, a2 = t2.y - r2, o2 = e2.width / 2, s2 = e2.height / 2, c2, l2;
  return Math.abs(a2) * o2 > Math.abs(i2) * s2 ? (a2 < 0 && (s2 = -s2), c2 = a2 === 0 ? 0 : s2 * i2 / a2, l2 = s2) : (i2 < 0 && (o2 = -o2), c2 = o2, l2 = i2 === 0 ? 0 : o2 * a2 / i2), { x: n2 + c2, y: r2 + l2 };
}, `intersectRect`), M = l(async (e2, t2, r2, i2 = false, a2 = false) => {
  let s2 = t2 || ``;
  typeof s2 == `object` && (s2 = s2[0]);
  let c2 = n(), l2 = o(c2);
  return await b(e2, s2, { style: r2, isTitle: i2, useHtmlLabels: l2, markdown: false, isNode: a2, width: 1 / 0 }, c2);
}, `createLabel`), N = l((e2, t2, n2, r2, i2) => [`M`, e2 + i2, t2, `H`, e2 + n2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2, t2 + i2, `V`, t2 + r2 - i2, `A`, i2, i2, 0, 0, 1, e2 + n2 - i2, t2 + r2, `H`, e2 + i2, `A`, i2, i2, 0, 0, 1, e2, t2 + r2 - i2, `V`, t2 + i2, `A`, i2, i2, 0, 0, 1, e2 + i2, t2, `Z`].join(` `), `createRoundedRectPathD`), P = l(async (e2, t2) => {
  c.info(`Creating subgraph rect for `, t2.id, t2);
  let r2 = n(), { themeVariables: i2, handDrawnSeed: a2 } = r2, { clusterBkg: s2, clusterBorder: l2 } = i2, { labelStyles: d2, nodeStyles: f2, borderStyles: p2, backgroundStyles: h2 } = _(t2), v2 = e2.insert(`g`).attr(`class`, `cluster ` + t2.cssClasses).attr(`id`, t2.domId).attr(`data-look`, t2.look), y2 = o(r2), x2 = v2.insert(`g`).attr(`class`, `cluster-label `), C2;
  C2 = t2.labelType === `markdown` ? await b(x2, t2.label, { style: t2.labelStyle, useHtmlLabels: y2, isNode: true, width: t2.width }) : await M(x2, t2.label, t2.labelStyle || ``, false, true);
  let w2 = C2.getBBox();
  if (o(r2)) {
    let e3 = C2.children[0], t3 = u(C2);
    w2 = e3.getBoundingClientRect(), t3.attr(`width`, w2.width), t3.attr(`height`, w2.height);
  }
  let T2 = t2.width <= w2.width + t2.padding ? w2.width + t2.padding : t2.width;
  t2.width <= w2.width + t2.padding ? t2.diff = (T2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let E2 = t2.height, D2 = t2.x - T2 / 2, O2 = t2.y - E2 / 2;
  c.trace(`Data `, t2, JSON.stringify(t2));
  let k2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(v2), n2 = g(t2, { roughness: 0.7, fill: s2, stroke: l2, fillWeight: 3, seed: a2 }), r3 = e3.path(N(D2, O2, T2, E2, 0), n2);
    k2 = v2.insert(() => (c.debug(`Rough node insert CXC`, r3), r3), `:first-child`), k2.select(`path:nth-child(2)`).attr(`style`, p2.join(`;`)), k2.select(`path`).attr(`style`, h2.join(`;`).replace(`fill`, `stroke`));
  } else k2 = v2.insert(`rect`, `:first-child`), k2.attr(`style`, f2).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, D2).attr(`y`, O2).attr(`width`, T2).attr(`height`, E2);
  let { subGraphTitleTopMargin: A2 } = m(r2);
  if (x2.attr(`transform`, `translate(${t2.x - w2.width / 2}, ${t2.y - t2.height / 2 + A2})`), d2) {
    let e3 = x2.select(`span`);
    e3 && e3.attr(`style`, d2);
  }
  let P2 = k2.node().getBBox();
  return t2.offsetX = 0, t2.width = P2.width, t2.height = P2.height, t2.offsetY = w2.height - t2.padding / 2, t2.intersect = function(e3) {
    return j(t2, e3);
  }, { cluster: v2, labelBBox: w2 };
}, `rect`), F = { rect: P, squareRect: P, roundedWithTitle: l(async (e2, t2) => {
  let r2 = n(), { themeVariables: i2, handDrawnSeed: a2 } = r2, { altBackground: s2, compositeBackground: c2, compositeTitleBackground: l2, nodeBorder: d2 } = i2, f2 = e2.insert(`g`).attr(`class`, t2.cssClasses).attr(`id`, t2.domId).attr(`data-id`, t2.id).attr(`data-look`, t2.look), p2 = f2.insert(`g`, `:first-child`), m2 = f2.insert(`g`).attr(`class`, `cluster-label`), h2 = f2.append(`rect`), g2 = await M(m2, t2.label, t2.labelStyle, void 0, true), _2 = g2.getBBox();
  if (o(r2)) {
    let e3 = g2.children[0], t3 = u(g2);
    _2 = e3.getBoundingClientRect(), t3.attr(`width`, _2.width), t3.attr(`height`, _2.height);
  }
  let v2 = 0 * t2.padding, y2 = v2 / 2, b2 = (t2.width <= _2.width + t2.padding ? _2.width + t2.padding : t2.width) + v2;
  t2.width <= _2.width + t2.padding ? t2.diff = (b2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let x2 = t2.height + v2, C2 = t2.height + v2 - _2.height - 6, w2 = t2.x - b2 / 2, T2 = t2.y - x2 / 2;
  t2.width = b2;
  let E2 = t2.y - t2.height / 2 - y2 + _2.height + 2, D2;
  if (t2.look === `handDrawn`) {
    let e3 = t2.cssClasses.includes(`statediagram-cluster-alt`), n2 = S.svg(f2), r3 = t2.rx || t2.ry ? n2.path(N(w2, T2, b2, x2, 10), { roughness: 0.7, fill: l2, fillStyle: `solid`, stroke: d2, seed: a2 }) : n2.rectangle(w2, T2, b2, x2, { seed: a2 });
    D2 = f2.insert(() => r3, `:first-child`);
    let i3 = n2.rectangle(w2, E2, b2, C2, { fill: e3 ? s2 : c2, fillStyle: e3 ? `hachure` : `solid`, stroke: d2, seed: a2 });
    D2 = f2.insert(() => r3, `:first-child`), h2 = f2.insert(() => i3);
  } else D2 = p2.insert(`rect`, `:first-child`), D2.attr(`class`, `outer`).attr(`x`, w2).attr(`y`, T2).attr(`width`, b2).attr(`height`, x2).attr(`data-look`, t2.look), h2.attr(`class`, `inner`).attr(`x`, w2).attr(`y`, E2).attr(`width`, b2).attr(`height`, C2);
  return m2.attr(`transform`, `translate(${t2.x - _2.width / 2}, ${T2 + 1 - (o(r2) ? 0 : 3)})`), t2.height = D2.node().getBBox().height, t2.offsetX = 0, t2.offsetY = _2.height - t2.padding / 2, t2.labelBBox = _2, t2.intersect = function(e3) {
    return j(t2, e3);
  }, { cluster: f2, labelBBox: _2 };
}, `roundedWithTitle`), noteGroup: l((e2, t2) => {
  let n2 = e2.insert(`g`).attr(`class`, `note-cluster`).attr(`id`, t2.domId), r2 = n2.insert(`rect`, `:first-child`), i2 = 0 * t2.padding, a2 = i2 / 2;
  r2.attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, t2.x - t2.width / 2 - a2).attr(`y`, t2.y - t2.height / 2 - a2).attr(`width`, t2.width + i2).attr(`height`, t2.height + i2).attr(`fill`, `none`);
  let o2 = r2.node().getBBox();
  return t2.width = o2.width, t2.height = o2.height, t2.intersect = function(e3) {
    return j(t2, e3);
  }, { cluster: n2, labelBBox: { width: 0, height: 0 } };
}, `noteGroup`), divider: l((e2, t2) => {
  let { themeVariables: r2, handDrawnSeed: i2 } = n(), { nodeBorder: a2 } = r2, o2 = e2.insert(`g`).attr(`class`, t2.cssClasses).attr(`id`, t2.domId).attr(`data-look`, t2.look), s2 = o2.insert(`g`, `:first-child`), c2 = 0 * t2.padding, l2 = t2.width + c2;
  t2.diff = -t2.padding;
  let u2 = t2.height + c2, d2 = t2.x - l2 / 2, f2 = t2.y - u2 / 2;
  t2.width = l2;
  let p2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(o2).rectangle(d2, f2, l2, u2, { fill: `lightgrey`, roughness: 0.5, strokeLineDash: [5], stroke: a2, seed: i2 });
    p2 = o2.insert(() => e3, `:first-child`);
  } else {
    p2 = s2.insert(`rect`, `:first-child`);
    let e3 = `outer`;
    e3 = (t2.look, `divider`), p2.attr(`class`, e3).attr(`x`, d2).attr(`y`, f2).attr(`width`, l2).attr(`height`, u2).attr(`data-look`, t2.look);
  }
  return t2.height = p2.node().getBBox().height, t2.offsetX = 0, t2.offsetY = 0, t2.intersect = function(e3) {
    return j(t2, e3);
  }, { cluster: o2, labelBBox: {} };
}, `divider`), kanbanSection: l(async (e2, t2) => {
  c.info(`Creating subgraph rect for `, t2.id, t2);
  let r2 = n(), { themeVariables: i2, handDrawnSeed: a2 } = r2, { clusterBkg: s2, clusterBorder: l2 } = i2, { labelStyles: d2, nodeStyles: f2, borderStyles: p2, backgroundStyles: h2 } = _(t2), v2 = e2.insert(`g`).attr(`class`, `cluster ` + t2.cssClasses).attr(`id`, t2.domId).attr(`data-look`, t2.look), y2 = o(r2), x2 = v2.insert(`g`).attr(`class`, `cluster-label `), C2 = await b(x2, t2.label, { style: t2.labelStyle, useHtmlLabels: y2, isNode: true, width: t2.width }), w2 = C2.getBBox();
  if (o(r2)) {
    let e3 = C2.children[0], t3 = u(C2);
    w2 = e3.getBoundingClientRect(), t3.attr(`width`, w2.width), t3.attr(`height`, w2.height);
  }
  let T2 = t2.width <= w2.width + t2.padding ? w2.width + t2.padding : t2.width;
  t2.width <= w2.width + t2.padding ? t2.diff = (T2 - t2.width) / 2 - t2.padding : t2.diff = -t2.padding;
  let E2 = t2.height, D2 = t2.x - T2 / 2, O2 = t2.y - E2 / 2;
  c.trace(`Data `, t2, JSON.stringify(t2));
  let k2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(v2), n2 = g(t2, { roughness: 0.7, fill: s2, stroke: l2, fillWeight: 4, seed: a2 }), r3 = e3.path(N(D2, O2, T2, E2, t2.rx), n2);
    k2 = v2.insert(() => (c.debug(`Rough node insert CXC`, r3), r3), `:first-child`), k2.select(`path:nth-child(2)`).attr(`style`, p2.join(`;`)), k2.select(`path`).attr(`style`, h2.join(`;`).replace(`fill`, `stroke`));
  } else k2 = v2.insert(`rect`, `:first-child`), k2.attr(`style`, f2).attr(`rx`, t2.rx).attr(`ry`, t2.ry).attr(`x`, D2).attr(`y`, O2).attr(`width`, T2).attr(`height`, E2);
  let { subGraphTitleTopMargin: A2 } = m(r2);
  if (x2.attr(`transform`, `translate(${t2.x - w2.width / 2}, ${t2.y - t2.height / 2 + A2})`), d2) {
    let e3 = x2.select(`span`);
    e3 && e3.attr(`style`, d2);
  }
  let M2 = k2.node().getBBox();
  return t2.offsetX = 0, t2.width = M2.width, t2.height = M2.height, t2.offsetY = w2.height - t2.padding / 2, t2.intersect = function(e3) {
    return j(t2, e3);
  }, { cluster: v2, labelBBox: w2 };
}, `kanbanSection`) }, I = /* @__PURE__ */ new Map(), ee = l(async (e2, t2) => {
  let n2 = await F[t2.shape || `rect`](e2, t2);
  return I.set(t2.id, n2), n2;
}, `insertCluster`), te = l(() => {
  I = /* @__PURE__ */ new Map();
}, `clear`);
function L(e2, t2) {
  return e2.intersect(t2);
}
l(L, `intersectNode`);
var R = L;
function ne(e2, t2, n2, r2) {
  var i2 = e2.x, a2 = e2.y, o2 = i2 - r2.x, s2 = a2 - r2.y, c2 = Math.sqrt(t2 * t2 * s2 * s2 + n2 * n2 * o2 * o2), l2 = Math.abs(t2 * n2 * o2 / c2);
  r2.x < i2 && (l2 = -l2);
  var u2 = Math.abs(t2 * n2 * s2 / c2);
  return r2.y < a2 && (u2 = -u2), { x: i2 + l2, y: a2 + u2 };
}
l(ne, `intersectEllipse`);
var z = ne;
function B(e2, t2, n2) {
  return z(e2, t2, t2, n2);
}
l(B, `intersectCircle`);
var V = B;
function H(e2, t2, n2, r2) {
  {
    let i2 = t2.y - e2.y, a2 = e2.x - t2.x, o2 = t2.x * e2.y - e2.x * t2.y, s2 = i2 * n2.x + a2 * n2.y + o2, c2 = i2 * r2.x + a2 * r2.y + o2, l2 = 1e-6;
    if (s2 !== 0 && c2 !== 0 && re(s2, c2)) return;
    let u2 = r2.y - n2.y, d2 = n2.x - r2.x, f2 = r2.x * n2.y - n2.x * r2.y, p2 = u2 * e2.x + d2 * e2.y + f2, m2 = u2 * t2.x + d2 * t2.y + f2;
    if (Math.abs(p2) < l2 && Math.abs(m2) < l2 && re(p2, m2)) return;
    let h2 = i2 * d2 - u2 * a2;
    if (h2 === 0) return;
    let g2 = Math.abs(h2 / 2), _2 = a2 * f2 - d2 * o2, v2 = _2 < 0 ? (_2 - g2) / h2 : (_2 + g2) / h2;
    return _2 = u2 * o2 - i2 * f2, { x: v2, y: _2 < 0 ? (_2 - g2) / h2 : (_2 + g2) / h2 };
  }
}
l(H, `intersectLine`);
function re(e2, t2) {
  return e2 * t2 > 0;
}
l(re, `sameSign`);
var ie = H;
function U(e2, t2, n2) {
  let r2 = e2.x, i2 = e2.y, a2 = [], o2 = 1 / 0, s2 = 1 / 0;
  typeof t2.forEach == `function` ? t2.forEach(function(e3) {
    o2 = Math.min(o2, e3.x), s2 = Math.min(s2, e3.y);
  }) : (o2 = Math.min(o2, t2.x), s2 = Math.min(s2, t2.y));
  let c2 = r2 - e2.width / 2 - o2, l2 = i2 - e2.height / 2 - s2;
  for (let r3 = 0; r3 < t2.length; r3++) {
    let i3 = t2[r3], o3 = t2[r3 < t2.length - 1 ? r3 + 1 : 0], s3 = ie(e2, n2, { x: c2 + i3.x, y: l2 + i3.y }, { x: c2 + o3.x, y: l2 + o3.y });
    s3 && a2.push(s3);
  }
  return a2.length ? (a2.length > 1 && a2.sort(function(e3, t3) {
    let r3 = e3.x - n2.x, i3 = e3.y - n2.y, a3 = Math.sqrt(r3 * r3 + i3 * i3), o3 = t3.x - n2.x, s3 = t3.y - n2.y, c3 = Math.sqrt(o3 * o3 + s3 * s3);
    return a3 < c3 ? -1 : a3 === c3 ? 0 : 1;
  }), a2[0]) : e2;
}
l(U, `intersectPolygon`);
var W = { node: R, circle: V, ellipse: z, polygon: U, rect: j };
function G(e2, t2) {
  let { labelStyles: n2 } = _(t2);
  t2.labelStyle = n2;
  let r2 = E(t2), i2 = r2;
  r2 || (i2 = `anchor`);
  let a2 = e2.insert(`g`).attr(`class`, i2).attr(`id`, t2.domId || t2.id), { cssStyles: o2 } = t2, s2 = S.svg(a2), l2 = g(t2, { fill: `black`, stroke: `none`, fillStyle: `solid` });
  t2.look !== `handDrawn` && (l2.roughness = 0);
  let u2 = s2.circle(0, 0, 2, l2), d2 = a2.insert(() => u2, `:first-child`);
  return d2.attr(`class`, `anchor`).attr(`style`, p(o2)), T(t2, d2), t2.intersect = function(e3) {
    return c.info(`Circle intersect`, t2, 1, e3), W.circle(t2, 1, e3);
  }, a2;
}
l(G, `anchor`);
function K(e2, t2, n2, r2, i2, a2, o2) {
  let s2 = (e2 + n2) / 2, c2 = (t2 + r2) / 2, l2 = Math.atan2(r2 - t2, n2 - e2), u2 = (n2 - e2) / 2, d2 = (r2 - t2) / 2, f2 = u2 / i2, p2 = d2 / a2, m2 = Math.sqrt(f2 ** 2 + p2 ** 2);
  if (m2 > 1) throw Error(`The given radii are too small to create an arc between the points.`);
  let h2 = Math.sqrt(1 - m2 ** 2), g2 = s2 + h2 * a2 * Math.sin(l2) * (o2 ? -1 : 1), _2 = c2 - h2 * i2 * Math.cos(l2) * (o2 ? -1 : 1), v2 = Math.atan2((t2 - _2) / a2, (e2 - g2) / i2), y2 = Math.atan2((r2 - _2) / a2, (n2 - g2) / i2) - v2;
  o2 && y2 < 0 && (y2 += 2 * Math.PI), !o2 && y2 > 0 && (y2 -= 2 * Math.PI);
  let b2 = [];
  for (let e3 = 0; e3 < 20; e3++) {
    let t3 = v2 + e3 / 19 * y2, n3 = g2 + i2 * Math.cos(t3), r3 = _2 + a2 * Math.sin(t3);
    b2.push({ x: n3, y: r3 });
  }
  return b2;
}
l(K, `generateArcPoints`);
function ae(e2, t2, n2) {
  let [r2, i2] = [t2, n2].sort((e3, t3) => t3 - e3);
  return i2 * (1 - Math.sqrt(1 - (e2 / r2 / 2) ** 2));
}
l(ae, `calculateArcSagitta`);
async function oe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2, s2 = l((e3) => e3 + o2, `calcTotalHeight`), c2 = l((e3) => {
    let t3 = e3 / 2;
    return [t3 / (2.5 + e3 / 50), t3];
  }, `calcEllipseRadius`), { shapeSvg: u2, bbox: d2 } = await C(e2, t2, E(t2)), f2 = s2((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : d2.height), [p2, m2] = c2(f2), h2 = ae(f2, p2, m2), v2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : d2.width) + a2 * 2 + h2 - h2, y2 = f2, { cssStyles: b2 } = t2, x2 = [{ x: v2 / 2, y: -y2 / 2 }, { x: -v2 / 2, y: -y2 / 2 }, ...K(-v2 / 2, -y2 / 2, -v2 / 2, y2 / 2, p2, m2, false), { x: v2 / 2, y: y2 / 2 }, ...K(v2 / 2, y2 / 2, v2 / 2, -y2 / 2, p2, m2, true)], w2 = S.svg(u2), O2 = g(t2, {});
  t2.look !== `handDrawn` && (O2.roughness = 0, O2.fillStyle = `solid`);
  let k2 = D(x2), A2 = w2.path(k2, O2), j2 = u2.insert(() => A2, `:first-child`);
  return j2.attr(`class`, `basic label-container outer-path`), b2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, b2), r2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, r2), j2.attr(`transform`, `translate(${p2 / 2}, 0)`), T(t2, j2), t2.intersect = function(e3) {
    return W.polygon(t2, x2, e3);
  }, u2;
}
l(oe, `bowTieRect`);
function q(e2, t2, n2, r2) {
  return e2.insert(`polygon`, `:first-child`).attr(`points`, r2.map(function(e3) {
    return e3.x + `,` + e3.y;
  }).join(` `)).attr(`class`, `label-container`).attr(`transform`, `translate(` + -t2 / 2 + `,` + n2 / 2 + `)`);
}
l(q, `insertPolygonShape`);
var se = 12;
async function ce(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 28 : i2, o2 = t2.look === `neo` ? 24 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + (t2.look === `neo` ? a2 * 2 : a2 + se), u2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + (t2.look === `neo` ? o2 * 2 : o2), d2 = l2, f2 = -u2, p2 = [{ x: 0 + se, y: f2 }, { x: d2, y: f2 }, { x: d2, y: 0 }, { x: 0, y: 0 }, { x: 0, y: f2 + se }, { x: 0 + se, y: f2 }], m2, { cssStyles: h2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = D(p2), i3 = e3.path(r3, n3);
    m2 = s2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-l2 / 2}, ${u2 / 2})`), h2 && m2.attr(`style`, h2);
  } else m2 = q(s2, l2, u2, p2);
  return r2 && m2.attr(`style`, r2), T(t2, m2), t2.intersect = function(e3) {
    return W.polygon(t2, p2, e3);
  }, s2;
}
l(ce, `card`);
function le(e2, t2) {
  let { nodeStyles: n2 } = _(t2);
  t2.label = ``;
  let r2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: i2 } = t2, a2 = Math.max(28, t2.width ?? 0), o2 = [{ x: 0, y: a2 / 2 }, { x: a2 / 2, y: 0 }, { x: 0, y: -a2 / 2 }, { x: -a2 / 2, y: 0 }], s2 = S.svg(r2), c2 = g(t2, {});
  t2.look !== `handDrawn` && (c2.roughness = 0, c2.fillStyle = `solid`);
  let l2 = D(o2), u2 = s2.path(l2, c2), d2 = r2.insert(() => u2, `:first-child`);
  return i2 && t2.look !== `handDrawn` && d2.selectAll(`path`).attr(`style`, i2), n2 && t2.look !== `handDrawn` && d2.selectAll(`path`).attr(`style`, n2), t2.width = 28, t2.height = 28, t2.intersect = function(e3) {
    return W.polygon(t2, o2, e3);
  }, r2;
}
l(le, `choice`);
async function ue(e2, t2, n2) {
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2;
  let { shapeSvg: a2, bbox: o2, halfPadding: s2 } = await C(e2, t2, E(t2)), l2 = (n2 == null ? void 0 : n2.padding) ?? s2, u2 = t2.look === `neo` ? o2.width / 2 + 32 : o2.width / 2 + l2, d2, { cssStyles: f2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(a2), n3 = g(t2, {}), r3 = e3.circle(0, 0, u2 * 2, n3);
    d2 = a2.insert(() => r3, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, p(f2));
  } else d2 = a2.insert(`circle`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, i2).attr(`r`, u2).attr(`cx`, 0).attr(`cy`, 0);
  return T(t2, d2), t2.calcIntersect = function(e3, t3) {
    let n3 = e3.width / 2;
    return W.circle(e3, n3, t3);
  }, t2.intersect = function(e3) {
    return c.info(`Circle intersect`, t2, u2, e3), W.circle(t2, u2, e3);
  }, a2;
}
l(ue, `circle`);
function de(e2) {
  let t2 = Math.cos(Math.PI / 4), n2 = Math.sin(Math.PI / 4), r2 = e2 * 2, i2 = { x: r2 / 2 * t2, y: r2 / 2 * n2 }, a2 = { x: -(r2 / 2) * t2, y: r2 / 2 * n2 }, o2 = { x: -(r2 / 2) * t2, y: -(r2 / 2) * n2 }, s2 = { x: r2 / 2 * t2, y: -(r2 / 2) * n2 };
  return `M ${a2.x},${a2.y} L ${s2.x},${s2.y}
                   M ${i2.x},${i2.y} L ${o2.x},${o2.y}`;
}
l(de, `createLine`);
function fe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2, t2.label = ``;
  let i2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId ?? t2.id), a2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), { cssStyles: o2 } = t2, s2 = S.svg(i2), l2 = g(t2, {});
  t2.look !== `handDrawn` && (l2.roughness = 0, l2.fillStyle = `solid`);
  let u2 = s2.circle(0, 0, a2 * 2, l2), d2 = de(a2), f2 = s2.path(d2, l2), p2 = i2.insert(() => u2, `:first-child`);
  return p2.insert(() => f2), p2.attr(`class`, `outer-path`), o2 && t2.look !== `handDrawn` && p2.selectAll(`path`).attr(`style`, o2), r2 && t2.look !== `handDrawn` && p2.selectAll(`path`).attr(`style`, r2), T(t2, p2), t2.intersect = function(e3) {
    return c.info(`crossedCircle intersect`, t2, { radius: a2, point: e3 }), W.circle(t2, a2, e3);
  }, i2;
}
l(fe, `crossedCircle`);
function J(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
l(J, `generateCirclePoints`);
async function pe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await C(e2, t2, E(t2)), s2 = t2.look === `neo` ? 18 : t2.padding ?? 0, c2 = t2.look === `neo` ? 12 : t2.padding ?? 0, l2 = a2.width + s2, u2 = a2.height + c2, d2 = Math.max(5, u2 * 0.1), { cssStyles: f2 } = t2, p2 = [...J(l2 / 2, -u2 / 2, d2, 30, -90, 0), { x: -l2 / 2 - d2, y: d2 }, ...J(l2 / 2 + d2 * 2, -d2, d2, 20, -180, -270), ...J(l2 / 2 + d2 * 2, d2, d2, 20, -90, -180), { x: -l2 / 2 - d2, y: -u2 / 2 }, ...J(l2 / 2, u2 / 2, d2, 20, 0, 90)], m2 = [{ x: l2 / 2, y: -u2 / 2 - d2 }, { x: -l2 / 2, y: -u2 / 2 - d2 }, ...J(l2 / 2, -u2 / 2, d2, 20, -90, 0), { x: -l2 / 2 - d2, y: -d2 }, ...J(l2 / 2 + l2 * 0.1, -d2, d2, 20, -180, -270), ...J(l2 / 2 + l2 * 0.1, d2, d2, 20, -90, -180), { x: -l2 / 2 - d2, y: u2 / 2 }, ...J(l2 / 2, u2 / 2, d2, 20, 0, 90), { x: -l2 / 2, y: u2 / 2 + d2 }, { x: l2 / 2, y: u2 / 2 + d2 }], h2 = S.svg(i2), v2 = g(t2, { fill: `none` });
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = D(p2).replace(`Z`, ``), b2 = h2.path(y2, v2), x2 = D(m2), w2 = h2.path(x2, { ...v2 }), O2 = i2.insert(`g`, `:first-child`);
  return O2.insert(() => w2, `:first-child`).attr(`stroke-opacity`, 0), O2.insert(() => b2, `:first-child`), O2.attr(`class`, `text`), f2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, r2), O2.attr(`transform`, `translate(${d2}, 0)`), o2.attr(`transform`, `translate(${-l2 / 2 + d2 - (a2.x - (a2.left ?? 0))},${-u2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), T(t2, O2), t2.intersect = function(e3) {
    return W.polygon(t2, m2, e3);
  }, i2;
}
l(pe, `curlyBraceLeft`);
function Y(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: a3, y: l2 });
  }
  return o2;
}
l(Y, `generateCirclePoints`);
async function me(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await C(e2, t2, E(t2)), s2 = t2.look === `neo` ? 18 : t2.padding ?? 0, c2 = t2.look === `neo` ? 12 : t2.padding ?? 0, l2 = a2.width + (t2.look === `neo` ? s2 * 2 : s2), u2 = a2.height + (t2.look === `neo` ? c2 * 2 : c2), d2 = Math.max(5, u2 * 0.1), { cssStyles: f2 } = t2, p2 = [...Y(l2 / 2, -u2 / 2, d2, 20, -90, 0), { x: l2 / 2 + d2, y: -d2 }, ...Y(l2 / 2 + d2 * 2, -d2, d2, 20, -180, -270), ...Y(l2 / 2 + d2 * 2, d2, d2, 20, -90, -180), { x: l2 / 2 + d2, y: u2 / 2 }, ...Y(l2 / 2, u2 / 2, d2, 20, 0, 90)], m2 = [{ x: -l2 / 2, y: -u2 / 2 - d2 }, { x: l2 / 2, y: -u2 / 2 - d2 }, ...Y(l2 / 2, -u2 / 2, d2, 20, -90, 0), { x: l2 / 2 + d2, y: -d2 }, ...Y(l2 / 2 + d2 * 2, -d2, d2, 20, -180, -270), ...Y(l2 / 2 + d2 * 2, d2, d2, 20, -90, -180), { x: l2 / 2 + d2, y: u2 / 2 }, ...Y(l2 / 2, u2 / 2, d2, 20, 0, 90), { x: l2 / 2, y: u2 / 2 + d2 }, { x: -l2 / 2, y: u2 / 2 + d2 }], h2 = S.svg(i2), v2 = g(t2, { fill: `none` });
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = D(p2).replace(`Z`, ``), b2 = h2.path(y2, v2), x2 = D(m2), w2 = h2.path(x2, { ...v2 }), O2 = i2.insert(`g`, `:first-child`);
  return O2.insert(() => w2, `:first-child`).attr(`stroke-opacity`, 0), O2.insert(() => b2, `:first-child`), O2.attr(`class`, `text`), f2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, r2), O2.attr(`transform`, `translate(${-d2}, 0)`), o2.attr(`transform`, `translate(${-l2 / 2 + (t2.padding ?? 0) / 2 - (a2.x - (a2.left ?? 0))},${-u2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), T(t2, O2), t2.intersect = function(e3) {
    return W.polygon(t2, m2, e3);
  }, i2;
}
l(me, `curlyBraceRight`);
function X(e2, t2, n2, r2 = 100, i2 = 0, a2 = 180) {
  let o2 = [], s2 = i2 * Math.PI / 180, c2 = (a2 * Math.PI / 180 - s2) / (r2 - 1);
  for (let i3 = 0; i3 < r2; i3++) {
    let r3 = s2 + i3 * c2, a3 = e2 + n2 * Math.cos(r3), l2 = t2 + n2 * Math.sin(r3);
    o2.push({ x: -a3, y: -l2 });
  }
  return o2;
}
l(X, `generateCirclePoints`);
async function he(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await C(e2, t2, E(t2)), s2 = t2.look === `neo` ? 18 : t2.padding ?? 0, c2 = t2.look === `neo` ? 12 : t2.padding ?? 0, l2 = a2.width + (t2.look === `neo` ? s2 * 2 : s2), u2 = a2.height + (t2.look === `neo` ? c2 * 2 : c2), d2 = Math.max(5, u2 * 0.1), { cssStyles: f2 } = t2, p2 = [...X(l2 / 2, -u2 / 2, d2, 30, -90, 0), { x: -l2 / 2 - d2, y: d2 }, ...X(l2 / 2 + d2 * 2, -d2, d2, 20, -180, -270), ...X(l2 / 2 + d2 * 2, d2, d2, 20, -90, -180), { x: -l2 / 2 - d2, y: -u2 / 2 }, ...X(l2 / 2, u2 / 2, d2, 20, 0, 90)], m2 = [...X(-l2 / 2 + d2 + d2 / 2, -u2 / 2, d2, 20, -90, -180), { x: l2 / 2 - d2 / 2, y: d2 }, ...X(-l2 / 2 - d2 / 2, -d2, d2, 20, 0, 90), ...X(-l2 / 2 - d2 / 2, d2, d2, 20, -90, 0), { x: l2 / 2 - d2 / 2, y: -d2 }, ...X(-l2 / 2 + d2 + d2 / 2, u2 / 2, d2, 30, -180, -270)], h2 = [{ x: l2 / 2, y: -u2 / 2 - d2 }, { x: -l2 / 2, y: -u2 / 2 - d2 }, ...X(l2 / 2, -u2 / 2, d2, 20, -90, 0), { x: -l2 / 2 - d2, y: -d2 }, ...X(l2 / 2 + d2 * 2, -d2, d2, 20, -180, -270), ...X(l2 / 2 + d2 * 2, d2, d2, 20, -90, -180), { x: -l2 / 2 - d2, y: u2 / 2 }, ...X(l2 / 2, u2 / 2, d2, 20, 0, 90), { x: -l2 / 2, y: u2 / 2 + d2 }, { x: l2 / 2 - d2 - d2 / 2, y: u2 / 2 + d2 }, ...X(-l2 / 2 + d2 + d2 / 2, -u2 / 2, d2, 20, -90, -180), { x: l2 / 2 - d2 / 2, y: d2 }, ...X(-l2 / 2 - d2 / 2, -d2, d2, 20, 0, 90), ...X(-l2 / 2 - d2 / 2, d2, d2, 20, -90, 0), { x: l2 / 2 - d2 / 2, y: -d2 }, ...X(-l2 / 2 + d2 + d2 / 2, u2 / 2, d2, 30, -180, -270)], v2 = S.svg(i2), y2 = g(t2, { fill: `none` });
  t2.look !== `handDrawn` && (y2.roughness = 0, y2.fillStyle = `solid`);
  let b2 = D(p2).replace(`Z`, ``), x2 = v2.path(b2, y2), w2 = D(m2).replace(`Z`, ``), O2 = v2.path(w2, y2), k2 = D(h2), A2 = v2.path(k2, { ...y2 }), j2 = i2.insert(`g`, `:first-child`);
  return j2.insert(() => A2, `:first-child`).attr(`stroke-opacity`, 0), j2.insert(() => x2, `:first-child`), j2.insert(() => O2, `:first-child`), j2.attr(`class`, `text`), f2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, r2), j2.attr(`transform`, `translate(${d2 - d2 / 4}, 0)`), o2.attr(`transform`, `translate(${-l2 / 2 + (t2.padding ?? 0) / 2 - (a2.x - (a2.left ?? 0))},${-u2 / 2 + (t2.padding ?? 0) / 2 - (a2.y - (a2.top ?? 0))})`), T(t2, j2), t2.intersect = function(e3) {
    return W.polygon(t2, h2, e3);
  }, i2;
}
l(he, `curlyBraces`);
async function ge(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = Math.max(20, (c2.width + a2 * 2) * 1.25, (t2 == null ? void 0 : t2.width) ?? 0), u2 = Math.max(5, c2.height + o2 * 2, (t2 == null ? void 0 : t2.height) ?? 0), d2 = u2 / 2, { cssStyles: f2 } = t2, p2 = S.svg(s2), m2 = g(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = l2, v2 = u2, y2 = h2 - d2, b2 = v2 / 4, x2 = [{ x: y2, y: 0 }, { x: b2, y: 0 }, { x: 0, y: v2 / 2 }, { x: b2, y: v2 }, { x: y2, y: v2 }, ...k(-y2, -v2 / 2, d2, 50, 270, 90)], w2 = D(x2), O2 = p2.path(w2, m2), A2 = s2.insert(() => O2, `:first-child`);
  return A2.attr(`class`, `basic label-container outer-path`), f2 && t2.look !== `handDrawn` && A2.selectChildren(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && A2.selectChildren(`path`).attr(`style`, r2), A2.attr(`transform`, `translate(${-l2 / 2}, ${-u2 / 2})`), T(t2, A2), t2.intersect = function(e3) {
    return W.polygon(t2, x2, e3);
  }, s2;
}
l(ge, `curvedTrapezoid`);
var _e = l((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`].join(` `), `createCylinderPathD`), ve = l((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2 + a2}`, `M${e2 + n2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`].join(` `), `createOuterCylinderPathD`), ye = l((e2, t2, n2, r2, i2, a2) => [`M${e2 - n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createInnerCylinderPathD`), be = 8, xe = 8;
async function Se(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 24 : i2, o2 = t2.look === `neo` ? 24 : i2;
  if (t2.width || t2.height) {
    let e3 = t2.width ?? 0;
    t2.width = (t2.width ?? 0) - o2, t2.width < xe && (t2.width = xe);
    let n3 = e3 / 2 / (2.5 + e3 / 50);
    t2.height = (t2.height ?? 0) - a2 - n3 * 3, t2.height < be && (t2.height = be);
  }
  let { shapeSvg: s2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = (t2.width ? t2.width : c2.width) + o2, d2 = u2 / 2, f2 = d2 / (2.5 + u2 / 50), m2 = (t2.height ? t2.height : c2.height) + a2 + f2, h2, { cssStyles: v2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = ve(0, 0, u2, m2, d2, f2), r3 = ye(0, f2, u2, m2, d2, f2), i3 = g(t2, {}), a3 = e3.path(n3, i3), o3 = e3.path(r3, g(t2, { fill: `none` }));
    h2 = s2.insert(() => o3, `:first-child`), h2 = s2.insert(() => a3, `:first-child`), h2.attr(`class`, `basic label-container`), v2 && h2.attr(`style`, v2);
  } else {
    let e3 = _e(0, 0, u2, m2, d2, f2);
    h2 = s2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container outer-path`).attr(`style`, p(v2)).attr(`style`, r2);
  }
  return h2.attr(`label-offset-y`, f2), h2.attr(`transform`, `translate(${-u2 / 2}, ${-(m2 / 2 + f2)})`), T(t2, h2), l2.attr(`transform`, `translate(${-(c2.width / 2) - (c2.x - (c2.left ?? 0))}, ${-(c2.height / 2) + (t2.padding ?? 0) / 1.5 - (c2.y - (c2.top ?? 0))})`), t2.intersect = function(e3) {
    let n3 = W.rect(t2, e3), r3 = n3.x - (t2.x ?? 0);
    if (d2 != 0 && (Math.abs(r3) < (t2.width ?? 0) / 2 || Math.abs(r3) == (t2.width ?? 0) / 2 && Math.abs(n3.y - (t2.y ?? 0)) > (t2.height ?? 0) / 2 - f2)) {
      let i3 = f2 * f2 * (1 - r3 * r3 / (d2 * d2));
      i3 > 0 && (i3 = Math.sqrt(i3)), i3 = f2 - i3, e3.y - (t2.y ?? 0) > 0 && (i3 = -i3), n3.y += i3;
    }
    return n3;
  }, s2;
}
l(Se, `cylinder`);
async function Ce(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.look === `neo` ? 16 : t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : t2.padding ?? 0, { shapeSvg: o2, bbox: s2, label: c2 } = await C(e2, t2, E(t2)), l2 = s2.width + i2, u2 = s2.height + a2, d2 = u2 * 0.2, f2 = -l2 / 2, p2 = -u2 / 2 - d2 / 2, { cssStyles: m2 } = t2, h2 = S.svg(o2), v2 = g(t2, {});
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = [{ x: f2, y: p2 + d2 }, { x: -f2, y: p2 + d2 }, { x: -f2, y: -p2 }, { x: f2, y: -p2 }, { x: f2, y: p2 }, { x: -f2, y: p2 }, { x: -f2, y: p2 + d2 }], b2 = h2.polygon(y2.map((e3) => [e3.x, e3.y]), v2), x2 = o2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container outer-path`), m2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, m2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), c2.attr(`transform`, `translate(${f2 + (t2.padding ?? 0) / 2 - (s2.x - (s2.left ?? 0))}, ${p2 + d2 + (t2.padding ?? 0) / 2 - (s2.y - (s2.top ?? 0))})`), T(t2, x2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, o2;
}
l(Ce, `dividedRectangle`);
async function we(e2, t2) {
  var _a, _b;
  let { labelStyles: n2, nodeStyles: r2 } = _(t2), i2 = t2.look === `neo` ? 12 : 5;
  t2.labelStyle = n2;
  let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 16 : a2, { shapeSvg: s2, bbox: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ? (t2 == null ? void 0 : t2.width) / 2 : l2.width / 2) + (o2 ?? 0), d2 = u2 - i2, f2, { cssStyles: m2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, { roughness: 0.2, strokeWidth: 2.5 }), r3 = g(t2, { roughness: 0.2, strokeWidth: 1.5 }), i3 = e3.circle(0, 0, u2 * 2, n3), a3 = e3.circle(0, 0, d2 * 2, r3);
    f2 = s2.insert(`g`, `:first-child`), f2.attr(`class`, p(t2.cssClasses)).attr(`style`, p(m2)), (_a = f2.node()) == null ? void 0 : _a.appendChild(i3), (_b = f2.node()) == null ? void 0 : _b.appendChild(a3);
  } else {
    f2 = s2.insert(`g`, `:first-child`);
    let e3 = f2.insert(`circle`, `:first-child`), t3 = f2.insert(`circle`);
    f2.attr(`class`, `basic label-container`).attr(`style`, r2), e3.attr(`class`, `outer-circle`).attr(`style`, r2).attr(`r`, u2).attr(`cx`, 0).attr(`cy`, 0), t3.attr(`class`, `inner-circle`).attr(`style`, r2).attr(`r`, d2).attr(`cx`, 0).attr(`cy`, 0);
  }
  return T(t2, f2), t2.intersect = function(e3) {
    return c.info(`DoubleCircle intersect`, t2, u2, e3), W.circle(t2, u2, e3);
  }, s2;
}
l(we, `doublecircle`);
function Te(e2, t2, { config: { themeVariables: n2 } }) {
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.label = ``, t2.labelStyle = r2;
  let a2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: o2 } = t2, s2 = S.svg(a2), { nodeBorder: l2 } = n2, u2 = g(t2, { fillStyle: `solid` });
  t2.look !== `handDrawn` && (u2.roughness = 0);
  let d2 = s2.circle(0, 0, 14, u2), f2 = a2.insert(() => d2, `:first-child`);
  return f2.selectAll(`path`).attr(`style`, `fill: ${l2} !important;`), o2 && o2.length > 0 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, o2), i2 && t2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, i2), T(t2, f2), t2.intersect = function(e3) {
    return c.info(`filledCircle intersect`, t2, { radius: 7, point: e3 }), W.circle(t2, 7, e3);
  }, a2;
}
l(Te, `filledCircle`);
var Ee = 10, De = 10;
async function Oe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? i2 * 2 : i2;
  (t2.width || t2.height) && (t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2.height < Ee && (t2.height = Ee), t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - a2 - a2 / 2, t2.width < De && (t2.width = De));
  let { shapeSvg: o2, bbox: s2, label: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : s2.width) + (a2 ?? 0), d2 = (t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : u2 + s2.height, f2 = d2, p2 = [{ x: 0, y: -d2 }, { x: f2, y: -d2 }, { x: f2 / 2, y: 0 }], { cssStyles: m2 } = t2, h2 = S.svg(o2), v2 = g(t2, {});
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = D(p2), b2 = h2.path(y2, v2), x2 = o2.insert(() => b2, `:first-child`).attr(`transform`, `translate(${-d2 / 2}, ${d2 / 2})`).attr(`class`, `outer-path`);
  return m2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, m2), r2 && t2.look !== `handDrawn` && x2.selectChildren(`path`).attr(`style`, r2), t2.width = u2, t2.height = d2, T(t2, x2), l2.attr(`transform`, `translate(${-s2.width / 2 - (s2.x - (s2.left ?? 0))}, ${-d2 / 2 + (t2.padding ?? 0) / 2 + (s2.y - (s2.top ?? 0))})`), t2.intersect = function(e3) {
    return c.info(`Triangle intersect`, t2, p2, e3), W.polygon(t2, p2, e3);
  }, o2;
}
l(Oe, `flippedTriangle`);
function ke(e2, t2, { dir: n2, config: { state: r2, themeVariables: i2 } }) {
  let { nodeStyles: a2 } = _(t2);
  t2.label = ``;
  let o2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: s2 } = t2, c2 = Math.max(70, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(10, (t2 == null ? void 0 : t2.height) ?? 0);
  n2 === `LR` && (c2 = Math.max(10, (t2 == null ? void 0 : t2.width) ?? 0), l2 = Math.max(70, (t2 == null ? void 0 : t2.height) ?? 0));
  let u2 = -1 * c2 / 2, d2 = -1 * l2 / 2, f2 = S.svg(o2), p2 = g(t2, { stroke: i2.lineColor, fill: i2.lineColor });
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = f2.rectangle(u2, d2, c2, l2, p2), h2 = o2.insert(() => m2, `:first-child`);
  s2 && t2.look !== `handDrawn` && h2.selectAll(`path`).attr(`style`, s2), a2 && t2.look !== `handDrawn` && h2.selectAll(`path`).attr(`style`, a2), T(t2, h2);
  let v2 = (r2 == null ? void 0 : r2.padding) ?? 0;
  return t2.width && t2.height && (t2.width += v2 / 2 || 0, t2.height += v2 / 2 || 0), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, o2;
}
l(ke, `forkJoin`);
async function Ae(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.look === `neo` ? 16 : t2.padding ?? 0, a2 = t2.look === `neo` ? 12 : t2.padding ?? 0;
  (t2.width || t2.height) && (t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - a2 * 2, t2.height < 10 && (t2.height = 10), t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - i2 * 2, t2.width < 15 && (t2.width = 15));
  let { shapeSvg: o2, bbox: s2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : Math.max(15, s2.width)) + i2 * 2, u2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : Math.max(10, s2.height)) + a2 * 2, d2 = u2 / 2, { cssStyles: f2 } = t2, p2 = S.svg(o2), m2 = g(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = [{ x: -l2 / 2, y: -u2 / 2 }, { x: l2 / 2 - d2, y: -u2 / 2 }, ...k(-l2 / 2 + d2, 0, d2, 50, 90, 270), { x: l2 / 2 - d2, y: u2 / 2 }, { x: -l2 / 2, y: u2 / 2 }], v2 = D(h2), y2 = p2.path(v2, m2), b2 = o2.insert(() => y2, `:first-child`);
  return b2.attr(`class`, `basic label-container outer-path`), f2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, r2), T(t2, b2), t2.intersect = function(e3) {
    return c.info(`Pill intersect`, t2, { radius: d2, point: e3 }), W.polygon(t2, h2, e3);
  }, o2;
}
l(Ae, `halfRoundedRectangle`);
var je = l((e2, t2, n2, r2, i2) => [`M${e2 + i2},${t2}`, `L${e2 + n2 - i2},${t2}`, `L${e2 + n2},${t2 - r2 / 2}`, `L${e2 + n2 - i2},${t2 - r2}`, `L${e2 + i2},${t2 - r2}`, `L${e2},${t2 - r2 / 2}`, `Z`].join(` `), `createHexagonPathD`);
async function Me(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2), i2 = t2.look === `neo` ? 3.5 : 4;
  t2.labelStyle = n2;
  let a2 = t2.padding ?? 0, o2 = t2.look === `neo` ? 70 : a2, s2 = t2.look === `neo` ? 32 : a2;
  if (t2.width || t2.height) {
    let e3 = (t2.height ?? 0) / i2;
    t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - 2 * e3 - s2, t2.height = (t2.height ?? 0) - o2;
  }
  let { shapeSvg: c2, bbox: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : l2.height) + o2, d2 = u2 / i2, f2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : l2.width) + 2 * d2 + s2, p2 = [{ x: d2, y: 0 }, { x: f2 - d2, y: 0 }, { x: f2, y: -u2 / 2 }, { x: f2 - d2, y: -u2 }, { x: d2, y: -u2 }, { x: 0, y: -u2 / 2 }], m2, { cssStyles: h2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(c2), n3 = g(t2, {}), r3 = je(0, 0, f2, u2, d2), i3 = e3.path(r3, n3);
    m2 = c2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-f2 / 2}, ${u2 / 2})`), h2 && m2.attr(`style`, h2);
  } else m2 = q(c2, f2, u2, p2);
  return r2 && m2.attr(`style`, r2), t2.width = f2, t2.height = u2, T(t2, m2), t2.intersect = function(e3) {
    return W.polygon(t2, p2, e3);
  }, c2;
}
l(Me, `hexagon`);
async function Ne(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.label = ``, t2.labelStyle = n2;
  let { shapeSvg: i2 } = await C(e2, t2, E(t2)), a2 = Math.max(30, (t2 == null ? void 0 : t2.width) ?? 0), o2 = Math.max(30, (t2 == null ? void 0 : t2.height) ?? 0), { cssStyles: s2 } = t2, l2 = S.svg(i2), u2 = g(t2, {});
  t2.look !== `handDrawn` && (u2.roughness = 0, u2.fillStyle = `solid`);
  let d2 = [{ x: 0, y: 0 }, { x: a2, y: 0 }, { x: 0, y: o2 }, { x: a2, y: o2 }], f2 = D(d2), p2 = l2.path(f2, u2), m2 = i2.insert(() => p2, `:first-child`);
  return m2.attr(`class`, `basic label-container outer-path`), s2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, s2), r2 && t2.look !== `handDrawn` && m2.selectChildren(`path`).attr(`style`, r2), m2.attr(`transform`, `translate(${-a2 / 2}, ${-o2 / 2})`), T(t2, m2), t2.intersect = function(e3) {
    return c.info(`Pill intersect`, t2, { points: d2 }), W.polygon(t2, d2, e3);
  }, i2;
}
l(Ne, `hourglass`);
async function Pe(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = _(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), l2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, l2 ?? 0);
  let { shapeSvg: u2, bbox: d2, label: f2 } = await C(e2, t2, `icon-shape default`), p2 = t2.pos === `t`, m2 = s2, h2 = s2, { nodeBorder: v2 } = n2, { stylesMap: b2 } = y(t2), w2 = -h2 / 2, E2 = -m2 / 2, D2 = t2.label ? 8 : 0, O2 = S.svg(u2), k2 = g(t2, { stroke: `none`, fill: `none` });
  t2.look !== `handDrawn` && (k2.roughness = 0, k2.fillStyle = `solid`);
  let A2 = O2.rectangle(w2, E2, h2, m2, k2), j2 = Math.max(h2, d2.width), M2 = m2 + d2.height + D2, N2 = O2.rectangle(-j2 / 2, -M2 / 2, j2, M2, { ...k2, fill: `transparent`, stroke: `none` }), P2 = u2.insert(() => A2, `:first-child`), F2 = u2.insert(() => N2);
  if (t2.icon) {
    let e3 = u2.append(`g`);
    e3.html(`<g>${await x(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${p2 ? d2.height / 2 + D2 / 2 - i3 / 2 - o3 : -d2.height / 2 - D2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${b2.get(`stroke`) ?? v2};`);
  }
  return f2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${p2 ? -M2 / 2 : M2 / 2 - d2.height})`), P2.attr(`transform`, `translate(0,${p2 ? d2.height / 2 + D2 / 2 : -d2.height / 2 - D2 / 2})`), T(t2, F2), t2.intersect = function(e3) {
    if (c.info(`iconSquare intersect`, t2, e3), !t2.label) return W.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = p2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + D2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 + d2.height + D2 }, { x: n3 + h2 / 2, y: r3 + i3 / 2 }, { x: n3 - h2 / 2, y: r3 + i3 / 2 }, { x: n3 - h2 / 2, y: r3 - i3 / 2 + d2.height + D2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + D2 }] : [{ x: n3 - h2 / 2, y: r3 - i3 / 2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 }, { x: n3 + h2 / 2, y: r3 - i3 / 2 + m2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + m2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + m2 }, { x: n3 - h2 / 2, y: r3 - i3 / 2 + m2 }], W.polygon(t2, a3, e3);
  }, u2;
}
l(Pe, `icon`);
async function Fe(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = _(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), l2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, l2 ?? 0);
  let { shapeSvg: u2, bbox: d2, label: f2 } = await C(e2, t2, `icon-shape default`), p2 = t2.label ? 8 : 0, m2 = t2.pos === `t`, { nodeBorder: h2, mainBkg: v2 } = n2, { stylesMap: b2 } = y(t2), w2 = S.svg(u2), E2 = g(t2, {});
  t2.look !== `handDrawn` && (E2.roughness = 0, E2.fillStyle = `solid`), E2.stroke = b2.get(`fill`) ?? v2;
  let D2 = u2.append(`g`);
  t2.icon && D2.html(`<g>${await x(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
  let O2 = D2.node().getBBox(), k2 = O2.width, A2 = O2.height, j2 = O2.x, M2 = O2.y, N2 = Math.max(k2, A2) * Math.SQRT2 + 40, P2 = w2.circle(0, 0, N2, E2), F2 = Math.max(N2, d2.width), I2 = N2 + d2.height + p2, ee2 = w2.rectangle(-F2 / 2, -I2 / 2, F2, I2, { ...E2, fill: `transparent`, stroke: `none` }), te2 = u2.insert(() => P2, `:first-child`), L2 = u2.insert(() => ee2);
  return D2.attr(`transform`, `translate(${-k2 / 2 - j2},${m2 ? d2.height / 2 + p2 / 2 - A2 / 2 - M2 : -d2.height / 2 - p2 / 2 - A2 / 2 - M2})`), D2.attr(`style`, `color: ${b2.get(`stroke`) ?? h2};`), f2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -I2 / 2 : I2 / 2 - d2.height})`), te2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + p2 / 2 : -d2.height / 2 - p2 / 2})`), T(t2, L2), t2.intersect = function(e3) {
    return c.info(`iconSquare intersect`, t2, e3), W.rect(t2, e3);
  }, u2;
}
l(Fe, `iconCircle`);
async function Ie(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = _(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), l2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, l2 ?? 0);
  let { shapeSvg: u2, bbox: d2, halfPadding: f2, label: p2 } = await C(e2, t2, `icon-shape default`), m2 = t2.pos === `t`, h2 = s2 + f2 * 2, v2 = s2 + f2 * 2, { nodeBorder: b2, mainBkg: w2 } = n2, { stylesMap: E2 } = y(t2), D2 = -v2 / 2, O2 = -h2 / 2, k2 = t2.label ? 8 : 0, A2 = S.svg(u2), j2 = g(t2, {});
  t2.look !== `handDrawn` && (j2.roughness = 0, j2.fillStyle = `solid`), j2.stroke = E2.get(`fill`) ?? w2;
  let M2 = A2.path(N(D2, O2, v2, h2, 5), j2), P2 = Math.max(v2, d2.width), F2 = h2 + d2.height + k2, I2 = A2.rectangle(-P2 / 2, -F2 / 2, P2, F2, { ...j2, fill: `transparent`, stroke: `none` }), ee2 = u2.insert(() => M2, `:first-child`).attr(`class`, `icon-shape2`), te2 = u2.insert(() => I2);
  if (t2.icon) {
    let e3 = u2.append(`g`);
    e3.html(`<g>${await x(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${m2 ? d2.height / 2 + k2 / 2 - i3 / 2 - o3 : -d2.height / 2 - k2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${E2.get(`stroke`) ?? b2};`);
  }
  return p2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -F2 / 2 : F2 / 2 - d2.height})`), ee2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + k2 / 2 : -d2.height / 2 - k2 / 2})`), T(t2, te2), t2.intersect = function(e3) {
    if (c.info(`iconSquare intersect`, t2, e3), !t2.label) return W.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = m2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 + v2 / 2, y: r3 + i3 / 2 }, { x: n3 - v2 / 2, y: r3 + i3 / 2 }, { x: n3 - v2 / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + k2 }] : [{ x: n3 - v2 / 2, y: r3 - i3 / 2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 - v2 / 2, y: r3 - i3 / 2 + h2 }], W.polygon(t2, a3, e3);
  }, u2;
}
l(Ie, `iconRounded`);
async function Le(e2, t2, { config: { themeVariables: n2, flowchart: r2 } }) {
  let { labelStyles: i2 } = _(t2);
  t2.labelStyle = i2;
  let a2 = t2.assetHeight ?? 48, o2 = t2.assetWidth ?? 48, s2 = Math.max(a2, o2), l2 = r2 == null ? void 0 : r2.wrappingWidth;
  t2.width = Math.max(s2, l2 ?? 0);
  let { shapeSvg: u2, bbox: d2, halfPadding: f2, label: p2 } = await C(e2, t2, `icon-shape default`), m2 = t2.pos === `t`, h2 = s2 + f2 * 2, v2 = s2 + f2 * 2, { nodeBorder: b2, mainBkg: w2 } = n2, { stylesMap: E2 } = y(t2), D2 = -v2 / 2, O2 = -h2 / 2, k2 = t2.label ? 8 : 0, A2 = S.svg(u2), j2 = g(t2, {});
  t2.look !== `handDrawn` && (j2.roughness = 0, j2.fillStyle = `solid`), j2.stroke = E2.get(`fill`) ?? w2;
  let M2 = A2.path(N(D2, O2, v2, h2, 0.1), j2), P2 = Math.max(v2, d2.width), F2 = h2 + d2.height + k2, I2 = A2.rectangle(-P2 / 2, -F2 / 2, P2, F2, { ...j2, fill: `transparent`, stroke: `none` }), ee2 = u2.insert(() => M2, `:first-child`), te2 = u2.insert(() => I2);
  if (t2.icon) {
    let e3 = u2.append(`g`);
    e3.html(`<g>${await x(t2.icon, { height: s2, width: s2, fallbackPrefix: `` })}</g>`);
    let n3 = e3.node().getBBox(), r3 = n3.width, i3 = n3.height, a3 = n3.x, o3 = n3.y;
    e3.attr(`transform`, `translate(${-r3 / 2 - a3},${m2 ? d2.height / 2 + k2 / 2 - i3 / 2 - o3 : -d2.height / 2 - k2 / 2 - i3 / 2 - o3})`), e3.attr(`style`, `color: ${E2.get(`stroke`) ?? b2};`);
  }
  return p2.attr(`transform`, `translate(${-d2.width / 2 - (d2.x - (d2.left ?? 0))},${m2 ? -F2 / 2 : F2 / 2 - d2.height})`), ee2.attr(`transform`, `translate(0,${m2 ? d2.height / 2 + k2 / 2 : -d2.height / 2 - k2 / 2})`), T(t2, te2), t2.intersect = function(e3) {
    if (c.info(`iconSquare intersect`, t2, e3), !t2.label) return W.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = m2 ? [{ x: n3 - d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 + v2 / 2, y: r3 + i3 / 2 }, { x: n3 - v2 / 2, y: r3 + i3 / 2 }, { x: n3 - v2 / 2, y: r3 - i3 / 2 + d2.height + k2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + d2.height + k2 }] : [{ x: n3 - v2 / 2, y: r3 - i3 / 2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 }, { x: n3 + v2 / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 + d2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 + i3 / 2 }, { x: n3 - d2.width / 2, y: r3 - i3 / 2 + h2 }, { x: n3 - v2 / 2, y: r3 - i3 / 2 + h2 }], W.polygon(t2, a3, e3);
  }, u2;
}
l(Le, `iconSquare`);
async function Re(e2, t2, { config: { flowchart: n2 } }) {
  let r2 = new Image();
  r2.src = (t2 == null ? void 0 : t2.img) ?? ``, await r2.decode();
  let i2 = Number(r2.naturalWidth.toString().replace(`px`, ``)), a2 = Number(r2.naturalHeight.toString().replace(`px`, ``));
  t2.imageAspectRatio = i2 / a2;
  let { labelStyles: o2 } = _(t2);
  t2.labelStyle = o2;
  let s2 = n2 == null ? void 0 : n2.wrappingWidth;
  t2.defaultWidth = n2 == null ? void 0 : n2.wrappingWidth;
  let l2 = Math.max(t2.label ? s2 ?? 0 : 0, (t2 == null ? void 0 : t2.assetWidth) ?? i2), u2 = t2.constraint === `on` && (t2 == null ? void 0 : t2.assetHeight) ? t2.assetHeight * t2.imageAspectRatio : l2, d2 = t2.constraint === `on` ? u2 / t2.imageAspectRatio : (t2 == null ? void 0 : t2.assetHeight) ?? a2;
  t2.width = Math.max(u2, s2 ?? 0);
  let { shapeSvg: f2, bbox: p2, label: m2 } = await C(e2, t2, `image-shape default`), h2 = t2.pos === `t`, v2 = -u2 / 2, y2 = -d2 / 2, b2 = t2.label ? 8 : 0, x2 = S.svg(f2), w2 = g(t2, {});
  t2.look !== `handDrawn` && (w2.roughness = 0, w2.fillStyle = `solid`);
  let E2 = x2.rectangle(v2, y2, u2, d2, w2), D2 = Math.max(u2, p2.width), O2 = d2 + p2.height + b2, k2 = x2.rectangle(-D2 / 2, -O2 / 2, D2, O2, { ...w2, fill: `none`, stroke: `none` }), A2 = f2.insert(() => E2, `:first-child`), j2 = f2.insert(() => k2);
  if (t2.img) {
    let e3 = f2.append(`image`);
    e3.attr(`href`, t2.img), e3.attr(`width`, u2), e3.attr(`height`, d2), e3.attr(`preserveAspectRatio`, `none`), e3.attr(`transform`, `translate(${-u2 / 2},${h2 ? O2 / 2 - d2 : -O2 / 2})`);
  }
  return m2.attr(`transform`, `translate(${-p2.width / 2 - (p2.x - (p2.left ?? 0))},${h2 ? -d2 / 2 - p2.height / 2 - b2 / 2 : d2 / 2 - p2.height / 2 + b2 / 2})`), A2.attr(`transform`, `translate(0,${h2 ? p2.height / 2 + b2 / 2 : -p2.height / 2 - b2 / 2})`), T(t2, j2), t2.intersect = function(e3) {
    if (c.info(`iconSquare intersect`, t2, e3), !t2.label) return W.rect(t2, e3);
    let n3 = t2.x ?? 0, r3 = t2.y ?? 0, i3 = t2.height ?? 0, a3 = [];
    return a3 = h2 ? [{ x: n3 - p2.width / 2, y: r3 - i3 / 2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 + u2 / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 + u2 / 2, y: r3 + i3 / 2 }, { x: n3 - u2 / 2, y: r3 + i3 / 2 }, { x: n3 - u2 / 2, y: r3 - i3 / 2 + p2.height + b2 }, { x: n3 - p2.width / 2, y: r3 - i3 / 2 + p2.height + b2 }] : [{ x: n3 - u2 / 2, y: r3 - i3 / 2 }, { x: n3 + u2 / 2, y: r3 - i3 / 2 }, { x: n3 + u2 / 2, y: r3 - i3 / 2 + d2 }, { x: n3 + p2.width / 2, y: r3 - i3 / 2 + d2 }, { x: n3 + p2.width / 2 / 2, y: r3 + i3 / 2 }, { x: n3 - p2.width / 2, y: r3 + i3 / 2 }, { x: n3 - p2.width / 2, y: r3 - i3 / 2 + d2 }, { x: n3 - u2 / 2, y: r3 - i3 / 2 + d2 }], W.polygon(t2, a3, e3);
  }, f2;
}
l(Re, `imageSquare`);
async function ze(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = i2, o2 = t2.look === `neo` ? i2 * 2 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = Math.max(c2.width + (o2 ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), u2 = Math.max(c2.height + (a2 ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), d2 = [{ x: 0, y: 0 }, { x: l2, y: 0 }, { x: l2 + 3 * u2 / 6, y: -u2 }, { x: -3 * u2 / 6, y: -u2 }], f2, { cssStyles: p2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = D(d2), i3 = e3.path(r3, n3);
    f2 = s2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-l2 / 2}, ${u2 / 2})`), p2 && f2.attr(`style`, p2);
  } else f2 = q(s2, l2, u2, d2);
  return r2 && f2.attr(`style`, r2), t2.width = l2, t2.height = u2, T(t2, f2), t2.intersect = function(e3) {
    return W.polygon(t2, d2, e3);
  }, s2;
}
l(ze, `inv_trapezoid`);
async function Be(e2, t2, n2) {
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2;
  let { shapeSvg: a2, bbox: o2 } = await C(e2, t2, E(t2)), s2 = Math.max(o2.width + n2.labelPaddingX * 2, (t2 == null ? void 0 : t2.width) || 0), c2 = Math.max(o2.height + n2.labelPaddingY * 2, (t2 == null ? void 0 : t2.height) || 0), l2 = -s2 / 2, u2 = -c2 / 2, d2, { rx: f2, ry: m2 } = t2, { cssStyles: h2 } = t2;
  if ((n2 == null ? void 0 : n2.rx) && n2.ry && (f2 = n2.rx, m2 = n2.ry), t2.look === `handDrawn`) {
    let e3 = S.svg(a2), n3 = g(t2, {}), r3 = f2 || m2 ? e3.path(N(l2, u2, s2, c2, f2 || 0), n3) : e3.rectangle(l2, u2, s2, c2, n3);
    d2 = a2.insert(() => r3, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, p(h2));
  } else d2 = a2.insert(`rect`, `:first-child`), d2.attr(`class`, `basic label-container`).attr(`style`, i2).attr(`rx`, p(f2)).attr(`ry`, p(m2)).attr(`x`, l2).attr(`y`, u2).attr(`width`, s2).attr(`height`, c2);
  return T(t2, d2), t2.calcIntersect = function(e3, t3) {
    return W.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, a2;
}
l(Be, `drawRect`);
async function Ve(e2, t2) {
  let { shapeSvg: n2, bbox: r2, label: i2 } = await C(e2, t2, `label`), a2 = n2.insert(`rect`, `:first-child`);
  return a2.attr(`width`, 0.1).attr(`height`, 0.1), n2.attr(`class`, `label edgeLabel`), i2.attr(`transform`, `translate(${-(r2.width / 2) - (r2.x - (r2.left ?? 0))}, ${-(r2.height / 2) - (r2.y - (r2.top ?? 0))})`), T(t2, a2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, n2;
}
l(Ve, `labelRect`);
async function He(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = i2, o2 = t2.look === `neo` ? i2 * 2 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + a2, u2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + o2, d2 = [{ x: 0, y: 0 }, { x: u2 + 3 * l2 / 6, y: 0 }, { x: u2, y: -l2 }, { x: -(3 * l2) / 6, y: -l2 }], f2, { cssStyles: p2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = D(d2), i3 = e3.path(r3, n3);
    f2 = s2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-u2 / 2}, ${l2 / 2})`), p2 && f2.attr(`style`, p2);
  } else f2 = q(s2, u2, l2, d2);
  return r2 && f2.attr(`style`, r2), t2.width = u2, t2.height = l2, T(t2, f2), t2.intersect = function(e3) {
    return W.polygon(t2, d2, e3);
  }, s2;
}
l(He, `lean_left`);
async function Ue(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = i2, o2 = t2.look === `neo` ? i2 * 2 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + a2, u2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + o2, d2 = [{ x: -3 * l2 / 6, y: 0 }, { x: u2, y: 0 }, { x: u2 + 3 * l2 / 6, y: -l2 }, { x: 0, y: -l2 }], f2, { cssStyles: p2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = D(d2), i3 = e3.path(r3, n3);
    f2 = s2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-u2 / 2}, ${l2 / 2})`), p2 && f2.attr(`style`, p2);
  } else f2 = q(s2, u2, l2, d2);
  return r2 && f2.attr(`style`, r2), t2.width = u2, t2.height = l2, T(t2, f2), t2.intersect = function(e3) {
    return W.polygon(t2, d2, e3);
  }, s2;
}
l(Ue, `lean_right`);
function We(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.label = ``, t2.labelStyle = n2;
  let i2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId ?? t2.id), { cssStyles: a2 } = t2, o2 = Math.max(35, (t2 == null ? void 0 : t2.width) ?? 0), s2 = Math.max(35, (t2 == null ? void 0 : t2.height) ?? 0), l2 = [{ x: o2, y: 0 }, { x: 0, y: s2 + 7 / 2 }, { x: o2 - 14, y: s2 + 7 / 2 }, { x: 0, y: 2 * s2 }, { x: o2, y: s2 - 7 / 2 }, { x: 14, y: s2 - 7 / 2 }], u2 = S.svg(i2), d2 = g(t2, {});
  t2.look !== `handDrawn` && (d2.roughness = 0, d2.fillStyle = `solid`);
  let f2 = D(l2), p2 = u2.path(f2, d2), m2 = i2.insert(() => p2, `:first-child`);
  return m2.attr(`class`, `outer-path`), a2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, a2), r2 && t2.look !== `handDrawn` && m2.selectAll(`path`).attr(`style`, r2), m2.attr(`transform`, `translate(-${o2 / 2},${-s2})`), T(t2, m2), t2.intersect = function(e3) {
    return c.info(`lightningBolt intersect`, t2, e3), W.polygon(t2, l2, e3);
  }, i2;
}
l(We, `lightningBolt`);
var Ge = l((e2, t2, n2, r2, i2, a2, o2) => [`M${e2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`, `M${e2},${t2 + a2 + o2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createCylinderPathD`), Ke = l((e2, t2, n2, r2, i2, a2, o2) => [`M${e2},${t2 + a2}`, `M${e2 + n2},${t2 + a2}`, `a${i2},${a2} 0,0,0 ${-n2},0`, `l0,${r2}`, `a${i2},${a2} 0,0,0 ${n2},0`, `l0,${-r2}`, `M${e2},${t2 + a2 + o2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createOuterCylinderPathD`), qe = l((e2, t2, n2, r2, i2, a2) => [`M${e2 - n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 ${n2},0`].join(` `), `createInnerCylinderPathD`), Je = 10, Ye = 10;
async function Xe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 24 : i2;
  if (t2.width || t2.height) {
    let e3 = t2.width ?? 0;
    t2.width = (t2.width ?? 0) - a2, t2.width < Ye && (t2.width = Ye);
    let n3 = e3 / 2 / (2.5 + e3 / 50);
    t2.height = (t2.height ?? 0) - o2 - n3 * 3, t2.height < Je && (t2.height = Je);
  }
  let { shapeSvg: s2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2, d2 = u2 / 2, f2 = d2 / (2.5 + u2 / 50), m2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + f2 + o2 * 2, h2 = m2 * 0.1, v2, { cssStyles: y2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = Ke(0, 0, u2, m2, d2, f2, h2), r3 = qe(0, f2, u2, m2, d2, f2), i3 = g(t2, {}), a3 = e3.path(n3, i3), o3 = e3.path(r3, i3);
    s2.insert(() => o3, `:first-child`).attr(`class`, `line`), v2 = s2.insert(() => a3, `:first-child`), v2.attr(`class`, `basic label-container`), y2 && v2.attr(`style`, y2);
  } else {
    let e3 = Ge(0, 0, u2, m2, d2, f2, h2);
    v2 = s2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container outer-path`).attr(`style`, p(y2)).attr(`style`, r2);
  }
  return v2.attr(`label-offset-y`, f2), v2.attr(`transform`, `translate(${-u2 / 2}, ${-(m2 / 2 + f2)})`), T(t2, v2), l2.attr(`transform`, `translate(${-(c2.width / 2) - (c2.x - (c2.left ?? 0))}, ${-(c2.height / 2) + f2 - (c2.y - (c2.top ?? 0))})`), t2.intersect = function(e3) {
    let n3 = W.rect(t2, e3), r3 = n3.x - (t2.x ?? 0);
    if (d2 != 0 && (Math.abs(r3) < (t2.width ?? 0) / 2 || Math.abs(r3) == (t2.width ?? 0) / 2 && Math.abs(n3.y - (t2.y ?? 0)) > (t2.height ?? 0) / 2 - f2)) {
      let i3 = f2 * f2 * (1 - r3 * r3 / (d2 * d2));
      i3 > 0 && (i3 = Math.sqrt(i3)), i3 = f2 - i3, e3.y - (t2.y ?? 0) > 0 && (i3 = -i3), n3.y += i3;
    }
    return n3;
  }, s2;
}
l(Xe, `linedCylinder`);
async function Ze(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2;
  (t2.width || t2.height) && (t2.width = (t2.width ?? 0) * 10 / 11 - a2 * 2, t2.width < 10 && (t2.width = 10), t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - o2 * 2, t2.height < 10 && (t2.height = 10));
  let { shapeSvg: s2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + (a2 ?? 0) * 2, d2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + (o2 ?? 0) * 2, f2 = t2.look === `neo` ? d2 / 4 : d2 / 8, p2 = d2 + f2, { cssStyles: m2 } = t2, h2 = S.svg(s2), v2 = g(t2, {});
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = [{ x: -u2 / 2 - u2 / 2 * 0.1, y: -p2 / 2 }, { x: -u2 / 2 - u2 / 2 * 0.1, y: p2 / 2 }, ...O(-u2 / 2 - u2 / 2 * 0.1, p2 / 2, u2 / 2 + u2 / 2 * 0.1, p2 / 2, f2, 0.8), { x: u2 / 2 + u2 / 2 * 0.1, y: -p2 / 2 }, { x: -u2 / 2 - u2 / 2 * 0.1, y: -p2 / 2 }, { x: -u2 / 2, y: -p2 / 2 }, { x: -u2 / 2, y: p2 / 2 * 1.1 }, { x: -u2 / 2, y: -p2 / 2 }], b2 = h2.polygon(y2.map((e3) => [e3.x, e3.y]), v2), x2 = s2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container outer-path`), m2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, m2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), x2.attr(`transform`, `translate(0,${-f2 / 2})`), l2.attr(`transform`, `translate(${-u2 / 2 + (t2.padding ?? 0) + u2 / 2 * 0.1 / 2 - (c2.x - (c2.left ?? 0))},${-d2 / 2 + (t2.padding ?? 0) - f2 / 2 - (c2.y - (c2.top ?? 0))})`), T(t2, x2), t2.intersect = function(e3) {
    return W.polygon(t2, y2, e3);
  }, s2;
}
l(Ze, `linedWaveEdgedRect`);
async function Qe(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2, s2 = t2.look === `neo` ? 10 : 5;
  (t2.width || t2.height) && (t2.width = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - a2 * 2 - 2 * s2, 10), t2.height = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) - o2 * 2 - 2 * s2, 10));
  let { shapeSvg: c2, bbox: l2, label: u2 } = await C(e2, t2, E(t2)), d2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : l2.width) + a2 * 2 + 2 * s2, f2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : l2.height) + o2 * 2 + 2 * s2, p2 = d2 - 2 * s2, m2 = f2 - 2 * s2, h2 = -p2 / 2, v2 = -m2 / 2, { cssStyles: y2 } = t2, b2 = S.svg(c2), x2 = g(t2, {}), w2 = [{ x: h2 - s2, y: v2 + s2 }, { x: h2 - s2, y: v2 + m2 + s2 }, { x: h2 + p2 - s2, y: v2 + m2 + s2 }, { x: h2 + p2 - s2, y: v2 + m2 }, { x: h2 + p2, y: v2 + m2 }, { x: h2 + p2, y: v2 + m2 - s2 }, { x: h2 + p2 + s2, y: v2 + m2 - s2 }, { x: h2 + p2 + s2, y: v2 - s2 }, { x: h2 + s2, y: v2 - s2 }, { x: h2 + s2, y: v2 }, { x: h2, y: v2 }, { x: h2, y: v2 + s2 }], O2 = [{ x: h2, y: v2 + s2 }, { x: h2 + p2 - s2, y: v2 + s2 }, { x: h2 + p2 - s2, y: v2 + m2 }, { x: h2 + p2, y: v2 + m2 }, { x: h2 + p2, y: v2 }, { x: h2, y: v2 }];
  t2.look !== `handDrawn` && (x2.roughness = 0, x2.fillStyle = `solid`);
  let k2 = D(w2), j2 = b2.path(k2, x2), M2 = D(O2), N2 = b2.path(M2, x2);
  t2.look !== `handDrawn` && (j2 = A(j2), N2 = A(N2));
  let P2 = c2.insert(`g`, `:first-child`);
  return P2.insert(() => j2), P2.insert(() => N2), P2.attr(`class`, `basic label-container outer-path`), y2 && t2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, y2), r2 && t2.look !== `handDrawn` && P2.selectAll(`path`).attr(`style`, r2), u2.attr(`transform`, `translate(${-(l2.width / 2) - s2 - (l2.x - (l2.left ?? 0))}, ${-(l2.height / 2) + s2 - (l2.y - (l2.top ?? 0))})`), T(t2, P2), t2.intersect = function(e3) {
    return W.polygon(t2, w2, e3);
  }, c2;
}
l(Qe, `multiRect`);
async function $e(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await C(e2, t2, E(t2)), s2 = t2.padding ?? 0, c2 = t2.look === `neo` ? 16 : s2, l2 = t2.look === `neo` ? 12 : s2, u2 = true;
  (t2.width || t2.height) && (u2 = false, t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - c2 * 2, t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - l2 * 3);
  let d2 = Math.max(a2.width, (t2 == null ? void 0 : t2.width) ?? 0) + c2 * 2, f2 = Math.max(a2.height, (t2 == null ? void 0 : t2.height) ?? 0) + l2 * 3, p2 = t2.look === `neo` ? f2 / 4 : f2 / 8, m2 = f2 + (u2 ? p2 / 2 : -p2 / 2), h2 = -d2 / 2, v2 = -m2 / 2, { cssStyles: y2 } = t2, b2 = O(h2 - 10, v2 + m2 + 10, h2 + d2 - 10, v2 + m2 + 10, p2, 0.8), x2 = b2 == null ? void 0 : b2[b2.length - 1], w2 = [{ x: h2 - 10, y: v2 + 10 }, { x: h2 - 10, y: v2 + m2 + 10 }, ...b2, { x: h2 + d2 - 10, y: x2.y - 10 }, { x: h2 + d2, y: x2.y - 10 }, { x: h2 + d2, y: x2.y - 20 }, { x: h2 + d2 + 10, y: x2.y - 20 }, { x: h2 + d2 + 10, y: v2 - 10 }, { x: h2 + 10, y: v2 - 10 }, { x: h2 + 10, y: v2 }, { x: h2, y: v2 }, { x: h2, y: v2 + 10 }], k2 = [{ x: h2, y: v2 + 10 }, { x: h2 + d2 - 10, y: v2 + 10 }, { x: h2 + d2 - 10, y: x2.y - 10 }, { x: h2 + d2, y: x2.y - 10 }, { x: h2 + d2, y: v2 }, { x: h2, y: v2 }], A2 = S.svg(i2), j2 = g(t2, {});
  t2.look !== `handDrawn` && (j2.roughness = 0, j2.fillStyle = `solid`);
  let M2 = D(w2), N2 = A2.path(M2, j2), P2 = D(k2), F2 = A2.path(P2, j2), I2 = i2.insert(() => N2, `:first-child`);
  return I2.insert(() => F2), I2.attr(`class`, `basic label-container outer-path`), y2 && t2.look !== `handDrawn` && I2.selectAll(`path`).attr(`style`, y2), r2 && t2.look !== `handDrawn` && I2.selectAll(`path`).attr(`style`, r2), I2.attr(`transform`, `translate(0,${-p2 / 2})`), o2.attr(`transform`, `translate(${-(a2.width / 2) - 10 - (a2.x - (a2.left ?? 0))}, ${-(a2.height / 2) + 10 - p2 / 2 - (a2.y - (a2.top ?? 0))})`), T(t2, I2), t2.intersect = function(e3) {
    return W.polygon(t2, w2, e3);
  }, i2;
}
l($e, `multiWaveEdgedRectangle`);
async function et(e2, t2, { config: { themeVariables: n2 } }) {
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2, t2.useHtmlLabels || o(s()) || (t2.centerLabel = true);
  let { shapeSvg: a2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = Math.max(c2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), d2 = Math.max(c2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), f2 = -u2 / 2, p2 = -d2 / 2, { cssStyles: m2 } = t2, h2 = S.svg(a2), v2 = g(t2, { fill: n2.noteBkgColor, stroke: n2.noteBorderColor });
  t2.look !== `handDrawn` && (v2.roughness = 0, v2.fillStyle = `solid`);
  let y2 = h2.rectangle(f2, p2, u2, d2, v2), b2 = a2.insert(() => y2, `:first-child`);
  return b2.attr(`class`, `basic label-container outer-path`), l2.attr(`class`, `label noteLabel`), m2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, m2), i2 && t2.look !== `handDrawn` && b2.selectAll(`path`).attr(`style`, i2), l2.attr(`transform`, `translate(${-c2.width / 2 - (c2.x - (c2.left ?? 0))}, ${-(c2.height / 2) - (c2.y - (c2.top ?? 0))})`), T(t2, b2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, a2;
}
l(et, `note`);
var tt = l((e2, t2, n2) => [`M${e2 + n2 / 2},${t2}`, `L${e2 + n2},${t2 - n2 / 2}`, `L${e2 + n2 / 2},${t2 - n2}`, `L${e2},${t2 - n2 / 2}`, `Z`].join(` `), `createDecisionBoxPathD`);
async function nt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await C(e2, t2, E(t2)), o2 = a2.width + (t2.padding ?? 0) + (a2.height + (t2.padding ?? 0)), s2 = 0.5, c2 = [{ x: o2 / 2, y: 0 }, { x: o2, y: -o2 / 2 }, { x: o2 / 2, y: -o2 }, { x: 0, y: -o2 / 2 }], l2, { cssStyles: u2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(i2), n3 = g(t2, {}), r3 = tt(0, 0, o2), a3 = e3.path(r3, n3);
    l2 = i2.insert(() => a3, `:first-child`).attr(`transform`, `translate(${-o2 / 2 + s2}, ${o2 / 2})`), u2 && l2.attr(`style`, u2);
  } else l2 = q(i2, o2, o2, c2), l2.attr(`transform`, `translate(${-o2 / 2 + s2}, ${o2 / 2})`);
  return r2 && l2.attr(`style`, r2), T(t2, l2), t2.calcIntersect = function(e3, t3) {
    let n3 = e3.width, r3 = [{ x: n3 / 2, y: 0 }, { x: n3, y: -n3 / 2 }, { x: n3 / 2, y: -n3 }, { x: 0, y: -n3 / 2 }], i3 = W.polygon(e3, r3, t3);
    return { x: i3.x - 0.5, y: i3.y - 0.5 };
  }, t2.intersect = function(e3) {
    return this.calcIntersect(t2, e3);
  }, i2;
}
l(nt, `question`);
async function rt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 21 : i2 ?? 0, o2 = t2.look === `neo` ? 12 : i2 ?? 0, { shapeSvg: s2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + (t2.look === `neo` ? a2 * 2 : a2), d2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + (t2.look === `neo` ? o2 * 2 : o2), f2 = -u2 / 2, p2 = -d2 / 2, m2 = p2 / 2, h2 = [{ x: f2 + m2, y: p2 }, { x: f2, y: 0 }, { x: f2 + m2, y: -p2 }, { x: -f2, y: -p2 }, { x: -f2, y: p2 }], { cssStyles: v2 } = t2, y2 = S.svg(s2), b2 = g(t2, {});
  t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
  let x2 = D(h2), w2 = y2.path(x2, b2), O2 = s2.insert(() => w2, `:first-child`);
  return O2.attr(`class`, `basic label-container outer-path`), v2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, v2), r2 && t2.look !== `handDrawn` && O2.selectAll(`path`).attr(`style`, r2), O2.attr(`transform`, `translate(${-m2 / 2},0)`), l2.attr(`transform`, `translate(${-m2 / 2 - c2.width / 2 - (c2.x - (c2.left ?? 0))}, ${-(c2.height / 2) - (c2.y - (c2.top ?? 0))})`), T(t2, O2), t2.intersect = function(e3) {
    return W.polygon(t2, h2, e3);
  }, s2;
}
l(rt, `rect_left_inv_arrow`);
async function it(e2, t2) {
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2;
  let a2;
  a2 = t2.cssClasses ? `node ` + t2.cssClasses : `node default`;
  let s2 = e2.insert(`g`).attr(`class`, a2).attr(`id`, t2.domId || t2.id), l2 = s2.insert(`g`), d2 = s2.insert(`g`).attr(`class`, `label`).attr(`style`, i2), f2 = t2.description, p2 = t2.label, m2 = await M(d2, p2, t2.labelStyle, true, true), h2 = { width: 0, height: 0 };
  if (o(n())) {
    let e3 = m2.children[0], t3 = u(m2);
    h2 = e3.getBoundingClientRect(), t3.attr(`width`, h2.width), t3.attr(`height`, h2.height);
  }
  c.info(`Text 2`, f2);
  let v2 = f2 || [], y2 = m2.getBBox(), b2 = await M(d2, Array.isArray(v2) ? v2.join(`<br/>`) : v2, t2.labelStyle, true, true), x2 = b2.children[0], C2 = u(b2);
  h2 = x2.getBoundingClientRect(), C2.attr(`width`, h2.width), C2.attr(`height`, h2.height);
  let w2 = (t2.padding || 0) / 2;
  u(b2).attr(`transform`, `translate( ` + (h2.width > y2.width ? 0 : (y2.width - h2.width) / 2) + `, ` + (y2.height + w2 + 5) + `)`), u(m2).attr(`transform`, `translate( ` + (h2.width < y2.width ? 0 : -(y2.width - h2.width) / 2) + `, 0)`), h2 = d2.node().getBBox(), d2.attr(`transform`, `translate(` + -h2.width / 2 + `, ` + (-h2.height / 2 - w2 + 3) + `)`);
  let E2 = h2.width + (t2.padding || 0), D2 = h2.height + (t2.padding || 0), O2 = -h2.width / 2 - w2, k2 = -h2.height / 2 - w2, A2, j2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n2 = g(t2, {}), r3 = e3.path(N(O2, k2, E2, D2, t2.rx || 0), n2), i3 = e3.line(-h2.width / 2 - w2, -h2.height / 2 - w2 + y2.height + w2, h2.width / 2 + w2, -h2.height / 2 - w2 + y2.height + w2, n2);
    j2 = s2.insert(() => (c.debug(`Rough node insert CXC`, r3), i3), `:first-child`), A2 = s2.insert(() => (c.debug(`Rough node insert CXC`, r3), r3), `:first-child`);
  } else A2 = l2.insert(`rect`, `:first-child`), j2 = l2.insert(`line`), A2.attr(`class`, `outer title-state`).attr(`style`, i2).attr(`x`, -h2.width / 2 - w2).attr(`y`, -h2.height / 2 - w2).attr(`width`, h2.width + (t2.padding || 0)).attr(`height`, h2.height + (t2.padding || 0)), j2.attr(`class`, `divider`).attr(`x1`, -h2.width / 2 - w2).attr(`x2`, h2.width / 2 + w2).attr(`y1`, -h2.height / 2 - w2 + y2.height + w2).attr(`y2`, -h2.height / 2 - w2 + y2.height + w2);
  return T(t2, A2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, s2;
}
l(it, `rectWithTitle`);
async function at(e2, t2, { config: { themeVariables: n2 } }) {
  let r2 = (n2 == null ? void 0 : n2.radius) ?? 5;
  return Be(e2, t2, { rx: r2, ry: r2, classes: ``, labelPaddingX: ((t2 == null ? void 0 : t2.padding) ?? 0) * 1, labelPaddingY: ((t2 == null ? void 0 : t2.padding) ?? 0) * 1 });
}
l(at, `roundedRect`);
var Z = 8;
async function ot(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.look === `neo` ? 16 : t2.padding ?? 0, a2 = t2.look === `neo` ? 12 : t2.padding ?? 0, { shapeSvg: o2, bbox: s2, label: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ?? s2.width) + i2 * 2 + (t2.look === `neo` ? Z : Z * 2), u2 = ((t2 == null ? void 0 : t2.height) ?? s2.height) + a2 * 2, d2 = l2 - Z, f2 = u2, m2 = Z - l2 / 2, h2 = -u2 / 2, { cssStyles: v2 } = t2, y2 = S.svg(o2), b2 = g(t2, {});
  t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
  let x2 = [{ x: m2, y: h2 }, { x: m2 + d2, y: h2 }, { x: m2 + d2, y: h2 + f2 }, { x: m2 - Z, y: h2 + f2 }, { x: m2 - Z, y: h2 }, { x: m2, y: h2 }, { x: m2, y: h2 + f2 }], w2 = y2.polygon(x2.map((e3) => [e3.x, e3.y]), b2), D2 = o2.insert(() => w2, `:first-child`);
  return D2.attr(`class`, `basic label-container outer-path`).attr(`style`, p(v2)), r2 && t2.look !== `handDrawn` && D2.selectAll(`path`).attr(`style`, r2), v2 && t2.look !== `handDrawn` && D2.selectAll(`path`).attr(`style`, r2), c2.attr(`transform`, `translate(${Z / 2 - s2.width / 2 - (s2.x - (s2.left ?? 0))}, ${-(s2.height / 2) - (s2.y - (s2.top ?? 0))})`), T(t2, D2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, o2;
}
l(ot, `shadedProcess`);
async function st(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2;
  (t2.width || t2.height) && (t2.width = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - a2 * 2, 10), t2.height = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) / 1.5 - o2 * 2, 10));
  let { shapeSvg: s2, bbox: c2, label: l2 } = await C(e2, t2, E(t2)), u2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2, d2 = (((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + o2 * 2) * 1.5, f2 = u2, p2 = d2 / 1.5, m2 = -f2 / 2, h2 = -p2 / 2, { cssStyles: v2 } = t2, y2 = S.svg(s2), b2 = g(t2, {});
  t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
  let x2 = [{ x: m2, y: h2 }, { x: m2, y: h2 + p2 }, { x: m2 + f2, y: h2 + p2 }, { x: m2 + f2, y: h2 - p2 / 2 }], w2 = D(x2), O2 = y2.path(w2, b2), k2 = s2.insert(() => O2, `:first-child`);
  return k2.attr(`class`, `basic label-container  outer-path`), v2 && t2.look !== `handDrawn` && k2.selectChildren(`path`).attr(`style`, v2), r2 && t2.look !== `handDrawn` && k2.selectChildren(`path`).attr(`style`, r2), k2.attr(`transform`, `translate(0, ${p2 / 4})`), l2.attr(`transform`, `translate(${-f2 / 2 + (t2.padding ?? 0) - (c2.x - (c2.left ?? 0))}, ${-p2 / 4 + (t2.padding ?? 0) - (c2.y - (c2.top ?? 0))})`), T(t2, k2), t2.intersect = function(e3) {
    return W.polygon(t2, x2, e3);
  }, s2;
}
l(st, `slopedRect`);
async function ct(e2, t2) {
  let n2 = t2.padding ?? 0, r2 = t2.look === `neo` ? 16 : n2 * 2, i2 = t2.look === `neo` ? 12 : n2;
  return Be(e2, t2, { rx: 0, ry: 0, classes: ``, labelPaddingX: t2.labelPaddingX ?? r2, labelPaddingY: i2 });
}
l(ct, `squareRect`);
async function lt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 20 : i2, o2 = t2.look === `neo` ? 12 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = c2.height + (t2.look === `neo` ? o2 * 2 : o2), u2 = c2.width + l2 / 4 + (t2.look === `neo` ? a2 * 2 : a2), d2 = l2 / 2, { cssStyles: f2 } = t2, p2 = S.svg(s2), m2 = g(t2, {});
  t2.look !== `handDrawn` && (m2.roughness = 0, m2.fillStyle = `solid`);
  let h2 = [{ x: -u2 / 2 + d2, y: -l2 / 2 }, { x: u2 / 2 - d2, y: -l2 / 2 }, ...k(-u2 / 2 + d2, 0, d2, 50, 90, 270), { x: u2 / 2 - d2, y: l2 / 2 }, ...k(u2 / 2 - d2, 0, d2, 50, 270, 450)], v2 = D(h2), y2 = p2.path(v2, m2), b2 = s2.insert(() => y2, `:first-child`);
  return b2.attr(`class`, `basic label-container outer-path`), f2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, f2), r2 && t2.look !== `handDrawn` && b2.selectChildren(`path`).attr(`style`, r2), T(t2, b2), t2.intersect = function(e3) {
    return W.polygon(t2, h2, e3);
  }, s2;
}
l(lt, `stadium`);
async function ut(e2, t2) {
  return Be(e2, t2, { rx: t2.look === `neo` ? 3 : 5, ry: t2.look === `neo` ? 3 : 5, classes: `flowchart-node` });
}
l(ut, `state`);
function dt(e2, t2, { config: { themeVariables: n2 } }) {
  var _a, _b;
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2;
  let { cssStyles: a2 } = t2, { lineColor: o2, stateBorder: s2, nodeBorder: c2, nodeShadow: l2 } = n2;
  (t2.width || t2.height) && ((t2.width ?? 0) < 14 && (t2.width = 14), (t2.height ?? 0) < 14 && (t2.height = 14)), t2.width || (t2.width = 14), t2.height || (t2.height = 14);
  let u2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId ?? t2.id), d2 = S.svg(u2), f2 = g(t2, {});
  t2.look !== `handDrawn` && (f2.roughness = 0, f2.fillStyle = `solid`);
  let p2 = d2.circle(0, 0, t2.width, { ...f2, stroke: o2, strokeWidth: 2 }), m2 = s2 ?? c2, h2 = (t2.width ?? 0) * 5 / 14, v2 = d2.circle(0, 0, h2, { ...f2, fill: m2, stroke: m2, strokeWidth: 2, fillStyle: `solid` }), y2 = u2.insert(() => p2, `:first-child`);
  if (y2.insert(() => v2), t2.look !== `handDrawn` && y2.attr(`class`, `outer-path`), a2 && y2.selectAll(`path`).attr(`style`, a2), i2 && y2.selectAll(`path`).attr(`style`, i2), t2.width < 25 && l2 && t2.look !== `handDrawn`) {
    let t3 = ((_b = (_a = e2.node()) == null ? void 0 : _a.ownerSVGElement) == null ? void 0 : _b.id) ?? ``, n3 = t3 ? `${t3}-drop-shadow-small` : `drop-shadow-small`;
    y2.attr(`style`, `filter:url(#${n3})`);
  }
  return T(t2, y2), t2.intersect = function(e3) {
    return W.circle(t2, (t2.width ?? 0) / 2, e3);
  }, u2;
}
l(dt, `stateEnd`);
function ft(e2, t2, { config: { themeVariables: n2 } }) {
  var _a, _b;
  let { lineColor: r2, nodeShadow: i2 } = n2;
  (t2.width || t2.height) && ((t2.width ?? 0) < 14 && (t2.width = 14), (t2.height ?? 0) < 14 && (t2.height = 14)), t2.width || (t2.width = 14), t2.height || (t2.height = 14);
  let a2 = e2.insert(`g`).attr(`class`, `node default`).attr(`id`, t2.domId || t2.id), o2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(a2).circle(0, 0, t2.width, v(r2));
    o2 = a2.insert(() => e3), o2.attr(`class`, `state-start`).attr(`r`, (t2.width ?? 7) / 2).attr(`width`, t2.width ?? 14).attr(`height`, t2.height ?? 14);
  } else o2 = a2.insert(`circle`, `:first-child`), o2.attr(`class`, `state-start`).attr(`r`, (t2.width ?? 7) / 2).attr(`width`, t2.width ?? 14).attr(`height`, t2.height ?? 14);
  if (t2.width < 25 && i2 && t2.look !== `handDrawn`) {
    let t3 = ((_b = (_a = e2.node()) == null ? void 0 : _a.ownerSVGElement) == null ? void 0 : _b.id) ?? ``, n3 = t3 ? `${t3}-drop-shadow-small` : `drop-shadow-small`;
    o2.attr(`style`, `filter:url(#${n3})`);
  }
  return T(t2, o2), t2.intersect = function(e3) {
    return W.circle(t2, (t2.width ?? 7) / 2, e3);
  }, a2;
}
l(ft, `stateStart`);
var pt = 8;
async function mt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = (t2 == null ? void 0 : t2.padding) ?? 8, a2 = t2.look === `neo` ? 28 : i2, o2 = t2.look === `neo` ? 12 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + 2 * pt + a2, u2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + o2, d2 = l2 - 2 * pt, f2 = u2, m2 = -l2 / 2, h2 = -u2 / 2, v2 = [{ x: 0, y: 0 }, { x: d2, y: 0 }, { x: d2, y: -f2 }, { x: 0, y: -f2 }, { x: 0, y: 0 }, { x: -8, y: 0 }, { x: d2 + 8, y: 0 }, { x: d2 + 8, y: -f2 }, { x: -8, y: -f2 }, { x: -8, y: 0 }];
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = e3.rectangle(m2, h2, d2 + 16, f2, n3), i3 = e3.line(m2 + pt, h2, m2 + pt, h2 + f2, n3), a3 = e3.line(m2 + pt + d2, h2, m2 + pt + d2, h2 + f2, n3);
    s2.insert(() => i3, `:first-child`), s2.insert(() => a3, `:first-child`);
    let o3 = s2.insert(() => r3, `:first-child`), { cssStyles: c3 } = t2;
    o3.attr(`class`, `basic label-container`).attr(`style`, p(c3)), T(t2, o3);
  } else {
    let e3 = q(s2, d2, f2, v2);
    r2 && e3.attr(`style`, r2), T(t2, e3);
  }
  return t2.intersect = function(e3) {
    return W.polygon(t2, v2, e3);
  }, s2;
}
l(mt, `subroutine`);
var ht = 0.2;
async function gt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2;
  (t2.width || t2.height) && (t2.height = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) - o2 * 2, 10), t2.width = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - a2 * 2 - ht * (t2.height + o2 * 2), 10));
  let { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + o2 * 2, u2 = ht * l2, d2 = ht * l2, f2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2 + u2 - u2, p2 = l2, m2 = -f2 / 2, h2 = -p2 / 2, { cssStyles: v2 } = t2, y2 = S.svg(s2), b2 = g(t2, {}), x2 = [{ x: m2 - u2 / 2, y: h2 }, { x: m2 + f2 + u2 / 2, y: h2 }, { x: m2 + f2 + u2 / 2, y: h2 + p2 }, { x: m2 - u2 / 2, y: h2 + p2 }], w2 = [{ x: m2 + f2 - u2 / 2, y: h2 + p2 }, { x: m2 + f2 + u2 / 2, y: h2 + p2 }, { x: m2 + f2 + u2 / 2, y: h2 + p2 - d2 }];
  t2.look !== `handDrawn` && (b2.roughness = 0, b2.fillStyle = `solid`);
  let O2 = D(x2), k2 = y2.path(O2, b2), A2 = D(w2), j2 = y2.path(A2, { ...b2, fillStyle: `solid` }), M2 = s2.insert(() => j2, `:first-child`);
  return M2.insert(() => k2, `:first-child`), M2.attr(`class`, `basic label-container outer-path`), v2 && t2.look !== `handDrawn` && M2.selectAll(`path`).attr(`style`, v2), r2 && t2.look !== `handDrawn` && M2.selectAll(`path`).attr(`style`, r2), T(t2, M2), t2.intersect = function(e3) {
    return W.polygon(t2, x2, e3);
  }, s2;
}
l(gt, `taggedRect`);
async function _t(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, label: o2 } = await C(e2, t2, E(t2)), s2 = Math.max(a2.width + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.width) ?? 0), c2 = Math.max(a2.height + (t2.padding ?? 0) * 2, (t2 == null ? void 0 : t2.height) ?? 0), l2 = c2 / 8, u2 = 0.2 * s2, d2 = 0.2 * c2, f2 = c2 + l2, { cssStyles: p2 } = t2, m2 = S.svg(i2), h2 = g(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let v2 = [{ x: -s2 / 2 - s2 / 2 * 0.1, y: f2 / 2 }, ...O(-s2 / 2 - s2 / 2 * 0.1, f2 / 2, s2 / 2 + s2 / 2 * 0.1, f2 / 2, l2, 0.8), { x: s2 / 2 + s2 / 2 * 0.1, y: -f2 / 2 }, { x: -s2 / 2 - s2 / 2 * 0.1, y: -f2 / 2 }], y2 = -s2 / 2 + s2 / 2 * 0.1, b2 = -f2 / 2 - d2 * 0.4, x2 = [{ x: y2 + s2 - u2, y: (b2 + c2) * 1.3 }, { x: y2 + s2, y: b2 + c2 - d2 }, { x: y2 + s2, y: (b2 + c2) * 0.9 }, ...O(y2 + s2, (b2 + c2) * 1.25, y2 + s2 - u2, (b2 + c2) * 1.3, -c2 * 0.02, 0.5)], w2 = D(v2), k2 = m2.path(w2, h2), A2 = D(x2), j2 = m2.path(A2, { ...h2, fillStyle: `solid` }), M2 = i2.insert(() => j2, `:first-child`);
  return M2.insert(() => k2, `:first-child`), M2.attr(`class`, `basic label-container outer-path`), p2 && t2.look !== `handDrawn` && M2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && M2.selectAll(`path`).attr(`style`, r2), M2.attr(`transform`, `translate(0,${-l2 / 2})`), o2.attr(`transform`, `translate(${-s2 / 2 + (t2.padding ?? 0) - (a2.x - (a2.left ?? 0))},${-c2 / 2 + (t2.padding ?? 0) - l2 / 2 - (a2.y - (a2.top ?? 0))})`), T(t2, M2), t2.intersect = function(e3) {
    return W.polygon(t2, v2, e3);
  }, i2;
}
l(_t, `taggedWaveEdgedRectangle`);
async function vt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2 } = await C(e2, t2, E(t2)), o2 = Math.max(a2.width + (t2.padding ?? 0), (t2 == null ? void 0 : t2.width) || 0), s2 = Math.max(a2.height + (t2.padding ?? 0), (t2 == null ? void 0 : t2.height) || 0), c2 = -o2 / 2, l2 = -s2 / 2, u2 = i2.insert(`rect`, `:first-child`);
  return u2.attr(`class`, `text`).attr(`style`, r2).attr(`rx`, 0).attr(`ry`, 0).attr(`x`, c2).attr(`y`, l2).attr(`width`, o2).attr(`height`, s2), T(t2, u2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, i2;
}
l(vt, `text`);
var yt = l((e2, t2, n2, r2, i2, a2) => `M${e2},${t2}
    a${i2},${a2} 0,0,1 0,${-r2}
    l${n2},0
    a${i2},${a2} 0,0,1 0,${r2}
    M${n2},${-r2}
    a${i2},${a2} 0,0,0 0,${r2}
    l${-n2},0`, `createCylinderPathD`), bt = l((e2, t2, n2, r2, i2, a2) => [`M${e2},${t2}`, `M${e2 + n2},${t2}`, `a${i2},${a2} 0,0,0 0,${-r2}`, `l${-n2},0`, `a${i2},${a2} 0,0,0 0,${r2}`, `l${n2},0`].join(` `), `createOuterCylinderPathD`), xt = l((e2, t2, n2, r2, i2, a2) => [`M${e2 + n2 / 2},${-r2 / 2}`, `a${i2},${a2} 0,0,0 0,${r2}`].join(` `), `createInnerCylinderPathD`), St = 5, Ct = 10;
async function wt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 12 : i2 / 2;
  if (t2.width || t2.height) {
    let e3 = t2.height ?? 0;
    t2.height = (t2.height ?? 0) - a2, t2.height < St && (t2.height = St);
    let n3 = e3 / 2 / (2.5 + e3 / 50);
    t2.width = (t2.width ?? 0) - a2 - n3 * 3, t2.width < Ct && (t2.width = Ct);
  }
  let { shapeSvg: o2, bbox: s2, label: c2 } = await C(e2, t2, E(t2)), l2 = (t2.height ? t2.height : s2.height) + a2, u2 = l2 / 2, d2 = u2 / (2.5 + l2 / 50), f2 = (t2.width ? t2.width : s2.width) + d2 + a2, { cssStyles: m2 } = t2, h2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(o2), n3 = bt(0, 0, f2, l2, d2, u2), r3 = xt(0, 0, f2, l2, d2, u2), i3 = e3.path(n3, g(t2, {})), a3 = e3.path(r3, g(t2, { fill: `none` }));
    h2 = o2.insert(() => a3, `:first-child`), h2 = o2.insert(() => i3, `:first-child`), h2.attr(`class`, `basic label-container`), m2 && h2.attr(`style`, m2);
  } else {
    let e3 = yt(0, 0, f2, l2, d2, u2);
    h2 = o2.insert(`path`, `:first-child`).attr(`d`, e3).attr(`class`, `basic label-container`).attr(`style`, p(m2)).attr(`style`, r2), h2.attr(`class`, `basic label-container outer-path`), m2 && h2.selectAll(`path`).attr(`style`, m2), r2 && h2.selectAll(`path`).attr(`style`, r2);
  }
  return h2.attr(`label-offset-x`, d2), h2.attr(`transform`, `translate(${-f2 / 2}, ${l2 / 2} )`), c2.attr(`transform`, `translate(${-(s2.width / 2) - d2 - (s2.x - (s2.left ?? 0))}, ${-(s2.height / 2) - (s2.y - (s2.top ?? 0))})`), T(t2, h2), t2.intersect = function(e3) {
    let n3 = W.rect(t2, e3), r3 = n3.y - (t2.y ?? 0);
    if (u2 != 0 && (Math.abs(r3) < (t2.height ?? 0) / 2 || Math.abs(r3) == (t2.height ?? 0) / 2 && Math.abs(n3.x - (t2.x ?? 0)) > (t2.width ?? 0) / 2 - d2)) {
      let i3 = d2 * d2 * (1 - r3 * r3 / (u2 * u2));
      i3 != 0 && (i3 = Math.sqrt(Math.abs(i3))), i3 = d2 - i3, e3.x - (t2.x ?? 0) > 0 && (i3 = -i3), n3.x += i3;
    }
    return n3;
  }, o2;
}
l(wt, `tiltedCylinder`);
async function Tt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = (t2.look, i2), o2 = t2.look === `neo` ? i2 * 2 : i2, { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.height) ?? c2.height) + a2, u2 = ((t2 == null ? void 0 : t2.width) ?? c2.width) + o2, d2 = [{ x: -3 * l2 / 6, y: 0 }, { x: u2 + 3 * l2 / 6, y: 0 }, { x: u2, y: -l2 }, { x: 0, y: -l2 }], f2, { cssStyles: p2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(s2), n3 = g(t2, {}), r3 = D(d2), i3 = e3.path(r3, n3);
    f2 = s2.insert(() => i3, `:first-child`).attr(`transform`, `translate(${-u2 / 2}, ${l2 / 2})`), p2 && f2.attr(`style`, p2);
  } else f2 = q(s2, u2, l2, d2);
  return r2 && f2.attr(`style`, r2), t2.width = u2, t2.height = l2, T(t2, f2), t2.intersect = function(e3) {
    return W.polygon(t2, d2, e3);
  }, s2;
}
l(Tt, `trapezoid`);
async function Et(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2;
  (t2.width || t2.height) && (t2.height = (t2.height ?? 0) - o2 * 2, t2.height < 5 && (t2.height = 5), t2.width = (t2.width ?? 0) - a2 * 2, t2.width < 15 && (t2.width = 15));
  let { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2, u2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + o2 * 2, { cssStyles: d2 } = t2, f2 = S.svg(s2), p2 = g(t2, {});
  t2.look !== `handDrawn` && (p2.roughness = 0, p2.fillStyle = `solid`);
  let m2 = [{ x: -l2 / 2 * 0.8, y: -u2 / 2 }, { x: l2 / 2 * 0.8, y: -u2 / 2 }, { x: l2 / 2, y: -u2 / 2 * 0.6 }, { x: l2 / 2, y: u2 / 2 }, { x: -l2 / 2, y: u2 / 2 }, { x: -l2 / 2, y: -u2 / 2 * 0.6 }], h2 = D(m2), v2 = f2.path(h2, p2), y2 = s2.insert(() => v2, `:first-child`);
  return y2.attr(`class`, `basic label-container outer-path`), d2 && t2.look !== `handDrawn` && y2.selectChildren(`path`).attr(`style`, d2), r2 && t2.look !== `handDrawn` && y2.selectChildren(`path`).attr(`style`, r2), T(t2, y2), t2.intersect = function(e3) {
    return W.polygon(t2, m2, e3);
  }, s2;
}
l(Et, `trapezoidalPentagon`);
var Dt = 10, Ot = 10;
async function kt(e2, t2) {
  var _a;
  let { labelStyles: i2, nodeStyles: a2 } = _(t2);
  t2.labelStyle = i2;
  let o2 = t2.padding ?? 0, s2 = t2.look === `neo` ? o2 * 2 : o2;
  (t2.width || t2.height) && (t2.width = (((t2 == null ? void 0 : t2.width) ?? 0) - s2) / 2, t2.width < Ot && (t2.width = Ot), t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2.height < Dt && (t2.height = Dt));
  let { shapeSvg: l2, bbox: u2, label: d2 } = await C(e2, t2, E(t2)), f2 = r((_a = n().flowchart) == null ? void 0 : _a.htmlLabels), p2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : u2.width) + s2, m2 = (t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : p2 + u2.height, h2 = m2, v2 = [{ x: 0, y: 0 }, { x: h2, y: 0 }, { x: h2 / 2, y: -m2 }], { cssStyles: y2 } = t2, b2 = S.svg(l2), x2 = g(t2, {});
  t2.look !== `handDrawn` && (x2.roughness = 0, x2.fillStyle = `solid`);
  let w2 = D(v2), O2 = b2.path(w2, x2), k2 = l2.insert(() => O2, `:first-child`).attr(`transform`, `translate(${-m2 / 2}, ${m2 / 2})`).attr(`class`, `outer-path`);
  return y2 && t2.look !== `handDrawn` && k2.selectChildren(`path`).attr(`style`, y2), a2 && t2.look !== `handDrawn` && k2.selectChildren(`path`).attr(`style`, a2), t2.width = p2, t2.height = m2, T(t2, k2), d2.attr(`transform`, `translate(${-u2.width / 2 - (u2.x - (u2.left ?? 0))}, ${m2 / 2 - (u2.height + (t2.padding ?? 0) / (f2 ? 2 : 1) - (u2.y - (u2.top ?? 0)))})`), t2.intersect = function(e3) {
    return c.info(`Triangle intersect`, t2, v2, e3), W.polygon(t2, v2, e3);
  }, l2;
}
l(kt, `triangle`);
async function At(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 12 : i2, s2 = true;
  (t2.width || t2.height) && (s2 = false, t2.width = ((t2 == null ? void 0 : t2.width) ?? 0) - a2 * 2, t2.width < 10 && (t2.width = 10), t2.height = ((t2 == null ? void 0 : t2.height) ?? 0) - o2 * 2, t2.height < 10 && (t2.height = 10));
  let { shapeSvg: c2, bbox: l2, label: u2 } = await C(e2, t2, E(t2)), d2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : l2.width) + (a2 ?? 0) * 2, f2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : l2.height) + (o2 ?? 0) * 2, p2 = t2.look === `neo` ? f2 / 4 : f2 / 8, m2 = f2 + (s2 ? p2 : -p2), { cssStyles: h2 } = t2, v2 = 14 - d2, y2 = v2 > 0 ? v2 / 2 : 0, b2 = S.svg(c2), x2 = g(t2, {});
  t2.look !== `handDrawn` && (x2.roughness = 0, x2.fillStyle = `solid`);
  let w2 = [{ x: -d2 / 2 - y2, y: m2 / 2 }, ...O(-d2 / 2 - y2, m2 / 2, d2 / 2 + y2, m2 / 2, p2, 0.8), { x: d2 / 2 + y2, y: -m2 / 2 }, { x: -d2 / 2 - y2, y: -m2 / 2 }], k2 = D(w2), A2 = b2.path(k2, x2), j2 = c2.insert(() => A2, `:first-child`);
  return j2.attr(`class`, `basic label-container outer-path`), h2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, h2), r2 && t2.look !== `handDrawn` && j2.selectAll(`path`).attr(`style`, r2), j2.attr(`transform`, `translate(0,${-p2 / 2})`), u2.attr(`transform`, `translate(${-d2 / 2 + (t2.padding ?? 0) - (l2.x - (l2.left ?? 0))},${-f2 / 2 + (t2.padding ?? 0) - p2 - (l2.y - (l2.top ?? 0))})`), T(t2, j2), t2.intersect = function(e3) {
    return W.polygon(t2, w2, e3);
  }, c2;
}
l(At, `waveEdgedRectangle`);
async function jt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.padding ?? 0, a2 = t2.look === `neo` ? 16 : i2, o2 = t2.look === `neo` ? 20 : i2;
  if (t2.width || t2.height) {
    t2.width = (t2 == null ? void 0 : t2.width) ?? 0, t2.width < 20 && (t2.width = 20), t2.height = (t2 == null ? void 0 : t2.height) ?? 0, t2.height < 10 && (t2.height = 10);
    let e3 = Math.min(t2.height * 0.2, t2.height / 4);
    t2.height = Math.ceil(t2.height - o2 - e3 * (20 / 9)), t2.width -= a2 * 2;
  }
  let { shapeSvg: s2, bbox: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : c2.width) + a2 * 2, u2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : c2.height) + o2, d2 = u2 / 8, f2 = u2 + d2 * 2, { cssStyles: p2 } = t2, m2 = S.svg(s2), h2 = g(t2, {});
  t2.look !== `handDrawn` && (h2.roughness = 0, h2.fillStyle = `solid`);
  let v2 = [{ x: -l2 / 2, y: f2 / 2 }, ...O(-l2 / 2, f2 / 2, l2 / 2, f2 / 2, d2, 1), { x: l2 / 2, y: -f2 / 2 }, ...O(l2 / 2, -f2 / 2, -l2 / 2, -f2 / 2, d2, -1)], y2 = D(v2), b2 = m2.path(y2, h2), x2 = s2.insert(() => b2, `:first-child`);
  return x2.attr(`class`, `basic label-container`), p2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, p2), r2 && t2.look !== `handDrawn` && x2.selectAll(`path`).attr(`style`, r2), T(t2, x2), t2.intersect = function(e3) {
    return W.polygon(t2, v2, e3);
  }, s2;
}
l(jt, `waveRectangle`);
var Q = 10;
async function Mt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let i2 = t2.look === `neo` ? 16 : t2.padding ?? 0, a2 = t2.look === `neo` ? 12 : t2.padding ?? 0;
  (t2.width || t2.height) && (t2.width = Math.max(((t2 == null ? void 0 : t2.width) ?? 0) - i2 * 2 - Q, 10), t2.height = Math.max(((t2 == null ? void 0 : t2.height) ?? 0) - a2 * 2 - Q, 10));
  let { shapeSvg: o2, bbox: s2, label: c2 } = await C(e2, t2, E(t2)), l2 = ((t2 == null ? void 0 : t2.width) ? t2 == null ? void 0 : t2.width : s2.width) + i2 * 2 + Q, u2 = ((t2 == null ? void 0 : t2.height) ? t2 == null ? void 0 : t2.height : s2.height) + a2 * 2 + Q, d2 = l2 - Q, f2 = u2 - Q, p2 = -d2 / 2, m2 = -f2 / 2, { cssStyles: h2 } = t2, v2 = S.svg(o2), y2 = g(t2, {}), b2 = [{ x: p2 - Q, y: m2 - Q }, { x: p2 - Q, y: m2 + f2 }, { x: p2 + d2, y: m2 + f2 }, { x: p2 + d2, y: m2 - Q }], x2 = `M${p2 - Q},${m2 - Q} L${p2 + d2},${m2 - Q} L${p2 + d2},${m2 + f2} L${p2 - Q},${m2 + f2} L${p2 - Q},${m2 - Q}
                M${p2 - Q},${m2} L${p2 + d2},${m2}
                M${p2},${m2 - Q} L${p2},${m2 + f2}`;
  t2.look !== `handDrawn` && (y2.roughness = 0, y2.fillStyle = `solid`);
  let w2 = v2.path(x2, y2), D2 = o2.insert(() => w2, `:first-child`);
  return D2.attr(`transform`, `translate(${Q / 2}, ${Q / 2})`), D2.attr(`class`, `basic label-container outer-path`), h2 && t2.look !== `handDrawn` && D2.selectAll(`path`).attr(`style`, h2), r2 && t2.look !== `handDrawn` && D2.selectAll(`path`).attr(`style`, r2), c2.attr(`transform`, `translate(${-(s2.width / 2) + Q / 2 - (s2.x - (s2.left ?? 0))}, ${-(s2.height / 2) + Q / 2 - (s2.y - (s2.top ?? 0))})`), T(t2, D2), t2.intersect = function(e3) {
    return W.polygon(t2, b2, e3);
  }, o2;
}
l(Mt, `windowPane`);
var Nt = /* @__PURE__ */ new Set([`redux-color`, `redux-dark-color`]), Pt = /* @__PURE__ */ new Set([`redux`, `redux-dark`, `redux-color`, `redux-dark-color`]);
async function Ft(e2, t2) {
  var _a, _b, _c, _d, _e2;
  let n2 = t2;
  n2.alias && (t2.label = n2.alias);
  let { theme: i2, themeVariables: a2 } = s(), { rowEven: o2, rowOdd: c2, nodeBorder: l2, borderColorArray: d2 } = a2;
  if (t2.look === `handDrawn`) {
    let { themeVariables: n3 } = s(), { background: r2 } = n3;
    await Ft(e2, { ...t2, id: t2.id + `-background`, domId: (t2.domId || t2.id) + `-background`, look: `default`, cssStyles: [`stroke: none`, `fill: ${r2}`] });
  }
  let p2 = s();
  t2.useHtmlLabels = p2.htmlLabels;
  let m2 = ((_a = p2.er) == null ? void 0 : _a.diagramPadding) ?? 10, h2 = ((_b = p2.er) == null ? void 0 : _b.entityPadding) ?? 6, { cssStyles: v2 } = t2, { labelStyles: y2, nodeStyles: b2 } = _(t2);
  if (n2.attributes.length === 0 && t2.label) {
    let a3 = { rx: 0, ry: 0, labelPaddingX: m2, labelPaddingY: m2 * 1.5, classes: `` };
    f(t2.label, p2) + a3.labelPaddingX * 2 < p2.er.minEntityWidth && (t2.width = p2.er.minEntityWidth);
    let o3 = await Be(e2, t2, a3);
    if (i2 != null && Nt.has(i2)) {
      let e3 = n2.colorIndex ?? 0;
      o3.attr(`data-color-id`, `color-${e3 % d2.length}`);
    }
    if (!r(p2.htmlLabels)) {
      let e3 = o3.select(`text`), t3 = (_c = e3.node()) == null ? void 0 : _c.getBBox();
      e3.attr(`transform`, `translate(${-t3.width / 2}, 0)`);
    }
    return o3;
  }
  p2.htmlLabels || (m2 *= 1.25, h2 *= 1.25);
  let x2 = E(t2);
  x2 || (x2 = `node default`);
  let C2 = e2.insert(`g`).attr(`class`, x2).attr(`id`, t2.domId || t2.id), w2 = await It(C2, t2.label ?? ``, p2, 0, 0, [`name`], y2);
  w2.height += h2;
  let D2 = 0, O2 = [], k2 = [], A2 = 0, j2 = 0, M2 = 0, N2 = 0, P2 = true, F2 = true;
  for (let e3 of n2.attributes) {
    let t3 = await It(C2, e3.type, p2, 0, D2, [`attribute-type`], y2);
    A2 = Math.max(A2, t3.width + m2);
    let n3 = await It(C2, e3.name, p2, 0, D2, [`attribute-name`], y2);
    j2 = Math.max(j2, n3.width + m2);
    let r2 = await It(C2, e3.keys.join(), p2, 0, D2, [`attribute-keys`], y2);
    M2 = Math.max(M2, r2.width + m2);
    let i3 = await It(C2, e3.comment, p2, 0, D2, [`attribute-comment`], y2);
    N2 = Math.max(N2, i3.width + m2);
    let a3 = Math.max(t3.height, n3.height, r2.height, i3.height) + h2;
    k2.push({ yOffset: D2, rowHeight: a3 }), D2 += a3;
  }
  let I2 = 4;
  M2 <= m2 && (P2 = false, M2 = 0, I2--), N2 <= m2 && (F2 = false, N2 = 0, I2--);
  let ee2 = C2.node().getBBox();
  if (w2.width + m2 * 2 - (A2 + j2 + M2 + N2) > 0) {
    let e3 = w2.width + m2 * 2 - (A2 + j2 + M2 + N2);
    A2 += e3 / I2, j2 += e3 / I2, M2 > 0 && (M2 += e3 / I2), N2 > 0 && (N2 += e3 / I2);
  }
  let te2 = A2 + j2 + M2 + N2, L2 = S.svg(C2), R2 = g(t2, {});
  t2.look !== `handDrawn` && (R2.roughness = 0, R2.fillStyle = `solid`);
  let ne2 = 0;
  k2.length > 0 && (ne2 = k2.reduce((e3, t3) => e3 + ((t3 == null ? void 0 : t3.rowHeight) ?? 0), 0));
  let z2 = Math.max(ee2.width + m2 * 2, (t2 == null ? void 0 : t2.width) || 0, te2), B2 = Math.max((ne2 ?? 0) + w2.height, (t2 == null ? void 0 : t2.height) || 0), V2 = -z2 / 2, H2 = -B2 / 2;
  if (C2.selectAll(`g:not(:first-child)`).each((e3, t3, n3) => {
    let r2 = u(n3[t3]), i3 = r2.attr(`transform`), a3 = 0, o3 = 0;
    if (i3) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(i3);
      e4 && (a3 = parseFloat(e4[1]), o3 = parseFloat(e4[2]), r2.attr(`class`).includes(`attribute-name`) ? a3 += A2 : r2.attr(`class`).includes(`attribute-keys`) ? a3 += A2 + j2 : r2.attr(`class`).includes(`attribute-comment`) && (a3 += A2 + j2 + M2));
    }
    r2.attr(`transform`, `translate(${V2 + m2 / 2 + a3}, ${o3 + H2 + w2.height + h2 / 2})`);
  }), C2.select(`.name`).attr(`transform`, `translate(` + -w2.width / 2 + `, ` + (H2 + h2 / 2) + `)`), i2 != null && Nt.has(i2)) {
    let e3 = n2.colorIndex ?? 0;
    C2.attr(`data-color-id`, `color-${e3 % d2.length}`);
  }
  let re2 = L2.rectangle(V2, H2, z2, B2, R2), ie2 = C2.insert(() => re2, `:first-child`).attr(`class`, `outer-path`).attr(`style`, v2.join(``));
  O2.push(0);
  for (let [e3, t3] of k2.entries()) {
    let n3 = (e3 + 1) % 2 == 0 && t3.yOffset !== 0, r2 = L2.rectangle(V2, w2.height + H2 + (t3 == null ? void 0 : t3.yOffset), z2, t3 == null ? void 0 : t3.rowHeight, { ...R2, fill: n3 ? o2 : c2, stroke: l2 });
    C2.insert(() => r2, `g.label`).attr(`style`, v2.join(``)).attr(`class`, `row-rect-${n3 ? `even` : `odd`}`);
  }
  let U2 = 1e-4, G2 = Lt(V2, w2.height + H2, z2 + V2, w2.height + H2, U2), K2 = L2.polygon(G2.map((e3) => [e3.x, e3.y]), R2);
  if (C2.insert(() => K2).attr(`class`, `divider`), G2 = Lt(A2 + V2, w2.height + H2, A2 + V2, B2 + H2, U2), K2 = L2.polygon(G2.map((e3) => [e3.x, e3.y]), R2), C2.insert(() => K2).attr(`class`, `divider`), P2) {
    let e3 = A2 + j2 + V2;
    G2 = Lt(e3, w2.height + H2, e3, B2 + H2, U2), K2 = L2.polygon(G2.map((e4) => [e4.x, e4.y]), R2), C2.insert(() => K2).attr(`class`, `divider`);
  }
  if (F2) {
    let e3 = A2 + j2 + M2 + V2;
    G2 = Lt(e3, w2.height + H2, e3, B2 + H2, U2), K2 = L2.polygon(G2.map((e4) => [e4.x, e4.y]), R2), C2.insert(() => K2).attr(`class`, `divider`);
  }
  for (let e3 of O2) {
    let t3 = w2.height + H2 + e3;
    G2 = Lt(V2, t3, z2 + V2, t3, U2), K2 = L2.polygon(G2.map((e4) => [e4.x, e4.y]), R2), C2.insert(() => K2).attr(`class`, `divider`);
  }
  if (T(t2, ie2), b2 && t2.look !== `handDrawn`) if (i2 != null && Pt.has(i2)) C2.selectAll(`path`).attr(`style`, b2);
  else {
    let e3 = (_e2 = (_d = b2.split(`;`)) == null ? void 0 : _d.filter((e4) => e4.includes(`stroke`))) == null ? void 0 : _e2.map((e4) => `${e4}`).join(`; `);
    C2.selectAll(`path`).attr(`style`, e3 ?? ``), C2.selectAll(`.row-rect-even path`).attr(`style`, b2);
  }
  return t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, C2;
}
l(Ft, `erBox`);
async function It(e2, t2, n2, a2 = 0, o2 = 0, s2 = [], c2 = ``) {
  let l2 = e2.insert(`g`).attr(`class`, `label ${s2.join(` `)}`).attr(`transform`, `translate(${a2}, ${o2})`).attr(`style`, c2);
  t2 !== i(t2) && (t2 = i(t2), t2 = t2.replaceAll(`<`, `&lt;`).replaceAll(`>`, `&gt;`));
  let d2 = l2.node().appendChild(await b(l2, t2, { width: f(t2, n2) + 100, style: c2, useHtmlLabels: n2.htmlLabels }, n2));
  if (t2.includes(`&lt;`) || t2.includes(`&gt;`)) {
    let e3 = d2.children[0];
    for (e3.textContent = e3.textContent.replaceAll(`&lt;`, `<`).replaceAll(`&gt;`, `>`); e3.childNodes[0]; ) e3 = e3.childNodes[0], e3.textContent = e3.textContent.replaceAll(`&lt;`, `<`).replaceAll(`&gt;`, `>`);
  }
  let p2 = d2.getBBox();
  if (r(n2.htmlLabels)) {
    let e3 = d2.children[0];
    e3.style.textAlign = `start`;
    let t3 = u(d2);
    p2 = e3.getBoundingClientRect(), t3.attr(`width`, p2.width), t3.attr(`height`, p2.height);
  }
  return p2;
}
l(It, `addText`);
function Lt(e2, t2, n2, r2, i2) {
  return e2 === n2 ? [{ x: e2 - i2 / 2, y: t2 }, { x: e2 + i2 / 2, y: t2 }, { x: n2 + i2 / 2, y: r2 }, { x: n2 - i2 / 2, y: r2 }] : [{ x: e2, y: t2 - i2 / 2 }, { x: e2, y: t2 + i2 / 2 }, { x: n2, y: r2 + i2 / 2 }, { x: n2, y: r2 - i2 / 2 }];
}
l(Lt, `lineToPolygon`);
async function Rt(e2, t2, n2, r2, i2 = n2.class.padding ?? 12) {
  let a2 = r2 ? 0 : 3, o2 = e2.insert(`g`).attr(`class`, E(t2)).attr(`id`, t2.domId || t2.id), s2 = null, c2 = null, l2 = null, u2 = null, d2 = 0, f2 = 0, p2 = 0;
  if (s2 = o2.insert(`g`).attr(`class`, `annotation-group text`), t2.annotations.length > 0) {
    let e3 = t2.annotations[0];
    await zt(s2, { text: `\xAB${e3}\xBB` }, 0), d2 = s2.node().getBBox().height;
  }
  c2 = o2.insert(`g`).attr(`class`, `label-group text`), await zt(c2, t2, 0, [`font-weight: bolder`]);
  let m2 = c2.node().getBBox();
  f2 = m2.height, l2 = o2.insert(`g`).attr(`class`, `members-group text`);
  let h2 = 0;
  for (let e3 of t2.members) {
    let t3 = await zt(l2, e3, h2, [e3.parseClassifier()]);
    h2 += t3 + a2;
  }
  p2 = l2.node().getBBox().height, p2 <= 0 && (p2 = i2 / 2), u2 = o2.insert(`g`).attr(`class`, `methods-group text`);
  let g2 = 0;
  for (let e3 of t2.methods) {
    let t3 = await zt(u2, e3, g2, [e3.parseClassifier()]);
    g2 += t3 + a2;
  }
  let _2 = o2.node().getBBox();
  if (s2 !== null) {
    let e3 = s2.node().getBBox();
    s2.attr(`transform`, `translate(${-e3.width / 2})`);
  }
  return c2.attr(`transform`, `translate(${-m2.width / 2}, ${d2})`), _2 = o2.node().getBBox(), l2.attr(`transform`, `translate(0, ${d2 + f2 + i2 * 2})`), _2 = o2.node().getBBox(), u2.attr(`transform`, `translate(0, ${d2 + f2 + (p2 ? p2 + i2 * 4 : i2 * 2)})`), _2 = o2.node().getBBox(), { shapeSvg: o2, bbox: _2 };
}
l(Rt, `textHelper`);
async function zt(e2, n2, i2, o2 = []) {
  let c2 = e2.insert(`g`).attr(`class`, `label`).attr(`style`, o2.join(`; `)), p2 = s(), m2 = `useHtmlLabels` in n2 ? n2.useHtmlLabels : r(p2.htmlLabels) ?? true, h2 = ``;
  h2 = `text` in n2 ? n2.text : n2.label, !m2 && h2.startsWith(`\\`) && (h2 = h2.substring(1)), a(h2) && (m2 = true);
  let g2 = await b(c2, t(d(h2)), { width: f(h2, p2) + 50, classes: `markdown-node-label`, useHtmlLabels: m2 }, p2), _2, v2 = 1;
  if (m2) {
    let e3 = g2.children[0], t2 = u(g2);
    v2 = e3.innerHTML.split(`<br>`).length, e3.innerHTML.includes(`</math>`) && (v2 += e3.innerHTML.split(`<mrow>`).length - 1);
    let n3 = e3.getElementsByTagName(`img`);
    if (n3) {
      let e4 = h2.replace(/<img[^>]*>/g, ``).trim() === ``;
      await Promise.all([...n3].map((t3) => new Promise((n4) => {
        function r2() {
          var _a;
          if (t3.style.display = `flex`, t3.style.flexDirection = `column`, e4) {
            let e5 = ((_a = p2.fontSize) == null ? void 0 : _a.toString()) ?? window.getComputedStyle(document.body).fontSize, n5 = parseInt(e5, 10) * 5 + `px`;
            t3.style.minWidth = n5, t3.style.maxWidth = n5;
          } else t3.style.width = `100%`;
          n4(t3);
        }
        l(r2, `setupImage`), setTimeout(() => {
          t3.complete && r2();
        }), t3.addEventListener(`error`, r2), t3.addEventListener(`load`, r2);
      })));
    }
    _2 = e3.getBoundingClientRect(), t2.attr(`width`, _2.width), t2.attr(`height`, _2.height);
  } else {
    o2.includes(`font-weight: bolder`) && u(g2).selectAll(`tspan`).attr(`font-weight`, ``), v2 = g2.children.length;
    let e3 = g2.children[0];
    (g2.textContent === `` || g2.textContent.includes(`&gt`)) && (e3.textContent = h2[0] + h2.substring(1).replaceAll(`&gt;`, `>`).replaceAll(`&lt;`, `<`).trim(), h2[1] === ` ` && (e3.textContent = e3.textContent[0] + ` ` + e3.textContent.substring(1))), e3.textContent === `undefined` && (e3.textContent = ``), _2 = g2.getBBox();
  }
  return c2.attr(`transform`, `translate(0,` + (-_2.height / (2 * v2) + i2) + `)`), _2.height;
}
l(zt, `addText`);
async function Bt(e2, t2) {
  var _a, _b;
  let i2 = n(), { themeVariables: a2 } = i2, { useGradient: o2 } = a2, s2 = i2.class.padding ?? 12, c2 = s2, l2 = t2.useHtmlLabels ?? r(i2.htmlLabels) ?? true, d2 = t2;
  d2.annotations = d2.annotations ?? [], d2.members = d2.members ?? [], d2.methods = d2.methods ?? [];
  let { shapeSvg: f2, bbox: p2 } = await Rt(e2, t2, i2, l2, c2), { labelStyles: m2, nodeStyles: h2 } = _(t2);
  t2.labelStyle = m2, t2.cssStyles = d2.styles || ``;
  let v2 = ((_a = d2.styles) == null ? void 0 : _a.join(`;`)) || h2 || ``;
  t2.cssStyles || (t2.cssStyles = v2.replaceAll(`!important`, ``).split(`;`));
  let y2 = d2.members.length === 0 && d2.methods.length === 0 && !((_b = i2.class) == null ? void 0 : _b.hideEmptyMembersBox), b2 = S.svg(f2), x2 = g(t2, {});
  t2.look !== `handDrawn` && (x2.roughness = 0, x2.fillStyle = `solid`);
  let C2 = Math.max(t2.width ?? 0, p2.width), w2 = Math.max(t2.height ?? 0, p2.height), E2 = (t2.height ?? 0) > p2.height;
  d2.members.length === 0 && d2.methods.length === 0 ? w2 += c2 : d2.members.length > 0 && d2.methods.length === 0 && (w2 += c2 * 2);
  let D2 = -C2 / 2, O2 = -w2 / 2, k2 = y2 ? s2 * 2 : d2.members.length === 0 && d2.methods.length === 0 ? -s2 : 0;
  E2 && (k2 = s2 * 2);
  let A2 = b2.rectangle(D2 - s2, O2 - s2 - (y2 ? s2 : d2.members.length === 0 && d2.methods.length === 0 ? -s2 / 2 : 0), C2 + 2 * s2, w2 + 2 * s2 + k2, x2), j2 = f2.insert(() => A2, `:first-child`);
  j2.attr(`class`, `basic label-container outer-path`);
  let M2 = j2.node().getBBox(), N2 = f2.select(`.annotation-group`).node().getBBox().height - (y2 ? s2 / 2 : 0) || 0, P2 = f2.select(`.label-group`).node().getBBox().height - (y2 ? s2 / 2 : 0) || 0, F2 = f2.select(`.members-group`).node().getBBox().height - (y2 ? s2 / 2 : 0) || 0, I2 = (N2 + P2 + O2 + s2 - (O2 - s2 - (y2 ? s2 : d2.members.length === 0 && d2.methods.length === 0 ? -s2 / 2 : 0))) / 2;
  if (f2.selectAll(`.text`).each((e3, t3, n2) => {
    var _a2, _b2;
    let r2 = u(n2[t3]), a3 = r2.attr(`transform`), o3 = 0;
    if (a3) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(a3);
      e4 && (o3 = parseFloat(e4[2]));
    }
    let p3 = o3 + O2 + s2 - (y2 ? s2 : d2.members.length === 0 && d2.methods.length === 0 ? -s2 / 2 : 0);
    if (r2.attr(`class`).includes(`methods-group`)) {
      let e4 = Math.max(F2, c2 / 2);
      p3 = E2 ? Math.max(I2, N2 + P2 + e4 + O2 + c2 * 2 + s2) + c2 * 2 : N2 + P2 + e4 + O2 + c2 * 4 + s2;
    }
    d2.members.length === 0 && d2.methods.length === 0 && ((_a2 = i2.class) == null ? void 0 : _a2.hideEmptyMembersBox) && (p3 = d2.annotations.length > 0 ? o3 - c2 : o3), l2 || (p3 -= 4);
    let m3 = D2;
    (r2.attr(`class`).includes(`label-group`) || r2.attr(`class`).includes(`annotation-group`)) && (m3 = -((_b2 = r2.node()) == null ? void 0 : _b2.getBBox().width) / 2 || 0, f2.selectAll(`text`).each(function(e4, t4, n3) {
      window.getComputedStyle(n3[t4]).textAnchor === `middle` && (m3 = 0);
    })), r2.attr(`transform`, `translate(${m3}, ${p3})`);
  }), d2.members.length > 0 || d2.methods.length > 0 || y2) {
    let e3 = N2 + P2 + O2 + s2, n2 = b2.line(M2.x, e3, M2.x + M2.width, e3 + 1e-3, x2);
    f2.insert(() => n2).attr(`class`, `divider${t2.look === `neo` && !o2 ? ` neo-line` : ``}`).attr(`style`, v2);
  }
  if (y2 || d2.members.length > 0 || d2.methods.length > 0) {
    let e3 = N2 + P2 + F2 + O2 + c2 * 2 + s2, n2 = b2.line(M2.x, E2 ? Math.max(I2, e3) : e3, M2.x + M2.width, (E2 ? Math.max(I2, e3) : e3) + 1e-3, x2);
    f2.insert(() => n2).attr(`class`, `divider${t2.look === `neo` && !o2 ? ` neo-line` : ``}`).attr(`style`, v2);
  }
  if (d2.look !== `handDrawn` && f2.selectAll(`path`).attr(`style`, v2), j2.select(`:nth-child(2)`).attr(`style`, v2), f2.selectAll(`.divider`).select(`path`).attr(`style`, v2), t2.labelStyle ? f2.selectAll(`span`).attr(`style`, t2.labelStyle) : f2.selectAll(`span`).attr(`style`, v2), !l2) {
    let e3 = RegExp(/color\s*:\s*([^;]*)/), t3 = e3.exec(v2);
    if (t3) {
      let e4 = t3[0].replace(`color`, `fill`);
      f2.selectAll(`tspan`).attr(`style`, e4);
    } else if (m2) {
      let t4 = e3.exec(m2);
      if (t4) {
        let e4 = t4[0].replace(`color`, `fill`);
        f2.selectAll(`tspan`).attr(`style`, e4);
      }
    }
  }
  return T(t2, j2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, f2;
}
l(Bt, `classBox`);
async function Vt(e2, t2) {
  var _a, _b;
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2;
  let a2 = t2, o2 = t2, s2 = `verifyMethod` in t2, c2 = E(t2), { themeVariables: l2 } = n(), { borderColorArray: d2, requirementEdgeLabelBackground: f2 } = l2, p2 = e2.insert(`g`).attr(`class`, c2).attr(`id`, t2.domId ?? t2.id), m2;
  m2 = s2 ? await $(p2, `&lt;&lt;${a2.type}&gt;&gt;`, 0, t2.labelStyle) : await $(p2, `&lt;&lt;Element&gt;&gt;`, 0, t2.labelStyle);
  let h2 = m2, v2 = await $(p2, a2.name, h2, t2.labelStyle + `; font-weight: bold;`);
  if (h2 += v2 + 20, s2) {
    let e3 = await $(p2, `${a2.requirementId ? `ID: ${a2.requirementId}` : ``}`, h2, t2.labelStyle);
    h2 += e3;
    let n2 = await $(p2, `${a2.text ? `Text: ${a2.text}` : ``}`, h2, t2.labelStyle);
    h2 += n2;
    let r3 = await $(p2, `${a2.risk ? `Risk: ${a2.risk}` : ``}`, h2, t2.labelStyle);
    h2 += r3, await $(p2, `${a2.verifyMethod ? `Verification: ${a2.verifyMethod}` : ``}`, h2, t2.labelStyle);
  } else {
    let e3 = await $(p2, `${o2.type ? `Type: ${o2.type}` : ``}`, h2, t2.labelStyle);
    h2 += e3, await $(p2, `${o2.docRef ? `Doc Ref: ${o2.docRef}` : ``}`, h2, t2.labelStyle);
  }
  let y2 = (((_a = p2.node()) == null ? void 0 : _a.getBBox().width) ?? 200) + 20, b2 = (((_b = p2.node()) == null ? void 0 : _b.getBBox().height) ?? 200) + 20, x2 = -y2 / 2, C2 = -b2 / 2, w2 = S.svg(p2), D2 = g(t2, {});
  t2.look !== `handDrawn` && (D2.roughness = 0, D2.fillStyle = `solid`);
  let O2 = w2.rectangle(x2, C2, y2, b2, D2), k2 = p2.insert(() => O2, `:first-child`);
  if (k2.attr(`class`, `basic label-container outer-path`).attr(`style`, i2), d2 == null ? void 0 : d2.length) {
    let e3 = t2.colorIndex ?? 0;
    p2.attr(`data-color-id`, `color-${e3 % d2.length}`);
  }
  if (p2.selectAll(`.label`).each((e3, t3, n2) => {
    let r3 = u(n2[t3]), i3 = r3.attr(`transform`), a3 = 0, o3 = 0;
    if (i3) {
      let e4 = RegExp(/translate\(([^,]+),([^)]+)\)/).exec(i3);
      e4 && (a3 = parseFloat(e4[1]), o3 = parseFloat(e4[2]));
    }
    let s3 = o3 - b2 / 2, c3 = x2 + 20 / 2;
    (t3 === 0 || t3 === 1) && (c3 = a3), r3.attr(`transform`, `translate(${c3}, ${s3 + 20})`);
  }), h2 > m2 + v2 + 20) {
    let e3 = C2 + m2 + v2 + 20, n2;
    if (t2.look === `neo`) {
      let t3 = 1e-3, r3 = [[x2, e3], [x2 + y2, e3], [x2 + y2, e3 + t3], [x2, e3 + t3]];
      n2 = w2.polygon(r3, D2);
    } else n2 = w2.line(x2, e3, x2 + y2, e3, D2);
    p2.insert(() => n2).attr(`class`, `divider`);
  }
  return T(t2, k2), t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, i2 && t2.look !== `handDrawn` && (f2 || (d2 == null ? void 0 : d2.length)) && p2.selectAll(`path`).attr(`style`, i2), p2;
}
l(Vt, `requirementBox`);
async function $(e2, r2, i2, a2 = ``) {
  if (r2 === ``) return 0;
  let o2 = e2.insert(`g`).attr(`class`, `label`).attr(`style`, a2), s2 = n(), c2 = s2.htmlLabels ?? true, l2 = await b(o2, t(d(r2)), { width: f(r2, s2) + 50, classes: `markdown-node-label`, useHtmlLabels: c2, style: a2 }, s2), p2;
  if (c2) {
    let e3 = l2.children[0], t2 = u(l2);
    p2 = e3.getBoundingClientRect(), t2.attr(`width`, p2.width), t2.attr(`height`, p2.height);
  } else {
    let e3 = l2.children[0];
    for (let t2 of e3.children) a2 && t2.setAttribute(`style`, a2);
    p2 = l2.getBBox(), p2.height += 6;
  }
  return o2.attr(`transform`, `translate(${-p2.width / 2},${-p2.height / 2 + i2})`), p2.height;
}
l($, `addText`);
var Ht = l((e2) => {
  switch (e2) {
    case `Very High`:
      return `red`;
    case `High`:
      return `orange`;
    case `Medium`:
      return null;
    case `Low`:
      return `blue`;
    case `Very Low`:
      return `lightblue`;
  }
}, `colorFromPriority`);
async function Ut(e2, t2, { config: n2 }) {
  var _a, _b;
  let { labelStyles: r2, nodeStyles: i2 } = _(t2);
  t2.labelStyle = r2 || ``;
  let a2 = t2.width;
  t2.width = (t2.width ?? 200) - 10;
  let { shapeSvg: o2, bbox: s2, label: c2 } = await C(e2, t2, E(t2)), l2 = t2.padding || 10, u2 = ``, d2;
  `ticket` in t2 && t2.ticket && ((_a = n2 == null ? void 0 : n2.kanban) == null ? void 0 : _a.ticketBaseUrl) && (u2 = (_b = n2 == null ? void 0 : n2.kanban) == null ? void 0 : _b.ticketBaseUrl.replace(`#TICKET#`, t2.ticket), d2 = o2.insert(`svg:a`, `:first-child`).attr(`class`, `kanban-ticket-link`).attr(`xlink:href`, u2).attr(`target`, `_blank`));
  let f2 = { useHtmlLabels: t2.useHtmlLabels, labelStyle: t2.labelStyle || ``, width: t2.width, img: t2.img, padding: t2.padding || 8, centerLabel: false }, p2, m2;
  d2 ? { label: p2, bbox: m2 } = await w(d2, `ticket` in t2 && t2.ticket || ``, f2) : { label: p2, bbox: m2 } = await w(o2, `ticket` in t2 && t2.ticket || ``, f2);
  let { label: h2, bbox: v2 } = await w(o2, `assigned` in t2 && t2.assigned || ``, f2);
  t2.width = a2;
  let y2 = (t2 == null ? void 0 : t2.width) || 0, b2 = Math.max(m2.height, v2.height) / 2, x2 = Math.max(s2.height + 20, (t2 == null ? void 0 : t2.height) || 0) + b2, D2 = -y2 / 2, O2 = -x2 / 2;
  c2.attr(`transform`, `translate(` + (l2 - y2 / 2) + `, ` + (-b2 - s2.height / 2) + `)`), p2.attr(`transform`, `translate(` + (l2 - y2 / 2) + `, ` + (-b2 + s2.height / 2) + `)`), h2.attr(`transform`, `translate(` + (l2 + y2 / 2 - v2.width - 20) + `, ` + (-b2 + s2.height / 2) + `)`);
  let k2, { rx: A2, ry: j2 } = t2, { cssStyles: M2 } = t2;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(o2), n3 = g(t2, {}), r3 = A2 || j2 ? e3.path(N(D2, O2, y2, x2, A2 || 0), n3) : e3.rectangle(D2, O2, y2, x2, n3);
    k2 = o2.insert(() => r3, `:first-child`), k2.attr(`class`, `basic label-container`).attr(`style`, M2 || null);
  } else {
    k2 = o2.insert(`rect`, `:first-child`), k2.attr(`class`, `basic label-container __APA__`).attr(`style`, i2).attr(`rx`, A2 ?? 5).attr(`ry`, j2 ?? 5).attr(`x`, D2).attr(`y`, O2).attr(`width`, y2).attr(`height`, x2);
    let e3 = `priority` in t2 && t2.priority;
    if (e3) {
      let t3 = o2.append(`line`), n3 = D2 + 2, r3 = O2 + Math.floor((A2 ?? 0) / 2), i3 = O2 + x2 - Math.floor((A2 ?? 0) / 2);
      t3.attr(`x1`, n3).attr(`y1`, r3).attr(`x2`, n3).attr(`y2`, i3).attr(`stroke-width`, `4`).attr(`stroke`, Ht(e3));
    }
  }
  return T(t2, k2), t2.height = x2, t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, o2;
}
l(Ut, `kanbanItem`);
async function Wt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await C(e2, t2, E(t2)), l2 = a2.width + 10 * o2, u2 = a2.height + 8 * o2, d2 = 0.15 * l2, { cssStyles: f2 } = t2, m2 = a2.width + 20, h2 = a2.height + 20, v2 = Math.max(l2, m2), y2 = Math.max(u2, h2);
  s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`);
  let b2, x2 = `M0 0 
    a${d2},${d2} 1 0,0 ${v2 * 0.25},${-1 * y2 * 0.1}
    a${d2},${d2} 1 0,0 ${v2 * 0.25},0
    a${d2},${d2} 1 0,0 ${v2 * 0.25},0
    a${d2},${d2} 1 0,0 ${v2 * 0.25},${y2 * 0.1}

    a${d2},${d2} 1 0,0 ${v2 * 0.15},${y2 * 0.33}
    a${d2 * 0.8},${d2 * 0.8} 1 0,0 0,${y2 * 0.34}
    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.15},${y2 * 0.33}

    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.25},${y2 * 0.15}
    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.25},0
    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.25},0
    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.25},${-1 * y2 * 0.15}

    a${d2},${d2} 1 0,0 ${-1 * v2 * 0.1},${-1 * y2 * 0.33}
    a${d2 * 0.8},${d2 * 0.8} 1 0,0 0,${-1 * y2 * 0.34}
    a${d2},${d2} 1 0,0 ${v2 * 0.1},${-1 * y2 * 0.33}
  H0 V0 Z`;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(i2), n3 = g(t2, {}), r3 = e3.path(x2, n3);
    b2 = i2.insert(() => r3, `:first-child`), b2.attr(`class`, `basic label-container`).attr(`style`, p(f2));
  } else b2 = i2.insert(`path`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, r2).attr(`d`, x2);
  return b2.attr(`transform`, `translate(${-v2 / 2}, ${-y2 / 2})`), T(t2, b2), t2.calcIntersect = function(e3, t3) {
    return W.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return c.info(`Bang intersect`, t2, e3), W.rect(t2, e3);
  }, i2;
}
l(Wt, `bang`);
async function Gt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await C(e2, t2, E(t2)), l2 = a2.width + 2 * o2, u2 = a2.height + 2 * o2, d2 = 0.15 * l2, f2 = 0.25 * l2, m2 = 0.35 * l2, h2 = 0.2 * l2, { cssStyles: v2 } = t2, y2, b2 = `M0 0 
    a${d2},${d2} 0 0,1 ${l2 * 0.25},${-1 * l2 * 0.1}
    a${m2},${m2} 1 0,1 ${l2 * 0.4},${-1 * l2 * 0.1}
    a${f2},${f2} 1 0,1 ${l2 * 0.35},${l2 * 0.2}

    a${d2},${d2} 1 0,1 ${l2 * 0.15},${u2 * 0.35}
    a${h2},${h2} 1 0,1 ${-1 * l2 * 0.15},${u2 * 0.65}

    a${f2},${d2} 1 0,1 ${-1 * l2 * 0.25},${l2 * 0.15}
    a${m2},${m2} 1 0,1 ${-1 * l2 * 0.5},0
    a${d2},${d2} 1 0,1 ${-1 * l2 * 0.25},${-1 * l2 * 0.15}

    a${d2},${d2} 1 0,1 ${-1 * l2 * 0.1},${-1 * u2 * 0.35}
    a${h2},${h2} 1 0,1 ${l2 * 0.1},${-1 * u2 * 0.65}
  H0 V0 Z`;
  if (t2.look === `handDrawn`) {
    let e3 = S.svg(i2), n3 = g(t2, {}), r3 = e3.path(b2, n3);
    y2 = i2.insert(() => r3, `:first-child`), y2.attr(`class`, `basic label-container`).attr(`style`, p(v2));
  } else y2 = i2.insert(`path`, `:first-child`).attr(`class`, `basic label-container`).attr(`style`, r2).attr(`d`, b2);
  return s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`), y2.attr(`transform`, `translate(${-l2 / 2}, ${-u2 / 2})`), T(t2, y2), t2.calcIntersect = function(e3, t3) {
    return W.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return c.info(`Cloud intersect`, t2, e3), W.rect(t2, e3);
  }, i2;
}
l(Gt, `cloud`);
async function Kt(e2, t2) {
  let { labelStyles: n2, nodeStyles: r2 } = _(t2);
  t2.labelStyle = n2;
  let { shapeSvg: i2, bbox: a2, halfPadding: o2, label: s2 } = await C(e2, t2, E(t2)), c2 = a2.width + 8 * o2, l2 = a2.height + 2 * o2, u2 = t2.look === `neo` ? `
    M${-c2 / 2} ${l2 / 2 - 5}
    v${-l2 + 10}
    q0,-5 5,-5
    h${c2 - 10}
    q5,0 5,5
    v${l2 - 5}
    H${-c2 / 2}
    Z
  ` : `
    M${-c2 / 2} ${l2 / 2 - 5}
    v${-l2 + 10}
    q0,-5 5,-5
    h${c2 - 10}
    q5,0 5,5
    v${l2 - 10}
    q0,5 -5,5
    h${-(c2 - 10)}
    q-5,0 -5,-5
    Z
  `;
  if (!t2.domId) throw Error(`defaultMindmapNode: node "${t2.id}" is missing a domId \u2014 was render.ts domId prefixing skipped?`);
  let d2 = i2.append(`path`).attr(`id`, t2.domId).attr(`class`, `node-bkg node-` + t2.type).attr(`style`, r2).attr(`d`, u2);
  return i2.append(`line`).attr(`class`, `node-line-`).attr(`x1`, -c2 / 2).attr(`y1`, l2 / 2).attr(`x2`, c2 / 2).attr(`y2`, l2 / 2), s2.attr(`transform`, `translate(${-a2.width / 2}, ${-a2.height / 2})`), i2.append(() => s2.node()), T(t2, d2), t2.calcIntersect = function(e3, t3) {
    return W.rect(e3, t3);
  }, t2.intersect = function(e3) {
    return W.rect(t2, e3);
  }, i2;
}
l(Kt, `defaultMindmapNode`);
async function qt(e2, t2) {
  return ue(e2, t2, { padding: t2.padding ?? 0 });
}
l(qt, `mindmapCircle`);
var Jt = [{ semanticName: `Process`, name: `Rectangle`, shortName: `rect`, description: `Standard process shape`, aliases: [`proc`, `process`, `rectangle`], internalAliases: [`squareRect`], handler: ct }, { semanticName: `Event`, name: `Rounded Rectangle`, shortName: `rounded`, description: `Represents an event`, aliases: [`event`], internalAliases: [`roundedRect`], handler: at }, { semanticName: `Terminal Point`, name: `Stadium`, shortName: `stadium`, description: `Terminal point`, aliases: [`terminal`, `pill`], handler: lt }, { semanticName: `Subprocess`, name: `Framed Rectangle`, shortName: `fr-rect`, description: `Subprocess`, aliases: [`subprocess`, `subproc`, `framed-rectangle`, `subroutine`], handler: mt }, { semanticName: `Database`, name: `Cylinder`, shortName: `cyl`, description: `Database storage`, aliases: [`db`, `database`, `cylinder`], handler: Se }, { semanticName: `Start`, name: `Circle`, shortName: `circle`, description: `Starting point`, aliases: [`circ`], handler: ue }, { semanticName: `Bang`, name: `Bang`, shortName: `bang`, description: `Bang`, aliases: [`bang`], handler: Wt }, { semanticName: `Cloud`, name: `Cloud`, shortName: `cloud`, description: `cloud`, aliases: [`cloud`], handler: Gt }, { semanticName: `Decision`, name: `Diamond`, shortName: `diam`, description: `Decision-making step`, aliases: [`decision`, `diamond`, `question`], handler: nt }, { semanticName: `Prepare Conditional`, name: `Hexagon`, shortName: `hex`, description: `Preparation or condition step`, aliases: [`hexagon`, `prepare`], handler: Me }, { semanticName: `Data Input/Output`, name: `Lean Right`, shortName: `lean-r`, description: `Represents input or output`, aliases: [`lean-right`, `in-out`], internalAliases: [`lean_right`], handler: Ue }, { semanticName: `Data Input/Output`, name: `Lean Left`, shortName: `lean-l`, description: `Represents output or input`, aliases: [`lean-left`, `out-in`], internalAliases: [`lean_left`], handler: He }, { semanticName: `Priority Action`, name: `Trapezoid Base Bottom`, shortName: `trap-b`, description: `Priority action`, aliases: [`priority`, `trapezoid-bottom`, `trapezoid`], handler: Tt }, { semanticName: `Manual Operation`, name: `Trapezoid Base Top`, shortName: `trap-t`, description: `Represents a manual task`, aliases: [`manual`, `trapezoid-top`, `inv-trapezoid`], internalAliases: [`inv_trapezoid`], handler: ze }, { semanticName: `Stop`, name: `Double Circle`, shortName: `dbl-circ`, description: `Represents a stop point`, aliases: [`double-circle`], internalAliases: [`doublecircle`], handler: we }, { semanticName: `Text Block`, name: `Text Block`, shortName: `text`, description: `Text block`, handler: vt }, { semanticName: `Card`, name: `Notched Rectangle`, shortName: `notch-rect`, description: `Represents a card`, aliases: [`card`, `notched-rectangle`], handler: ce }, { semanticName: `Lined/Shaded Process`, name: `Lined Rectangle`, shortName: `lin-rect`, description: `Lined process shape`, aliases: [`lined-rectangle`, `lined-process`, `lin-proc`, `shaded-process`], handler: ot }, { semanticName: `Start`, name: `Small Circle`, shortName: `sm-circ`, description: `Small starting point`, aliases: [`start`, `small-circle`], internalAliases: [`stateStart`], handler: ft }, { semanticName: `Stop`, name: `Framed Circle`, shortName: `fr-circ`, description: `Stop point`, aliases: [`stop`, `framed-circle`], internalAliases: [`stateEnd`], handler: dt }, { semanticName: `Fork/Join`, name: `Filled Rectangle`, shortName: `fork`, description: `Fork or join in process flow`, aliases: [`join`], internalAliases: [`forkJoin`], handler: ke }, { semanticName: `Collate`, name: `Hourglass`, shortName: `hourglass`, description: `Represents a collate operation`, aliases: [`hourglass`, `collate`], handler: Ne }, { semanticName: `Comment`, name: `Curly Brace`, shortName: `brace`, description: `Adds a comment`, aliases: [`comment`, `brace-l`], handler: pe }, { semanticName: `Comment Right`, name: `Curly Brace`, shortName: `brace-r`, description: `Adds a comment`, handler: me }, { semanticName: `Comment with braces on both sides`, name: `Curly Braces`, shortName: `braces`, description: `Adds a comment`, handler: he }, { semanticName: `Com Link`, name: `Lightning Bolt`, shortName: `bolt`, description: `Communication link`, aliases: [`com-link`, `lightning-bolt`], handler: We }, { semanticName: `Document`, name: `Document`, shortName: `doc`, description: `Represents a document`, aliases: [`doc`, `document`], handler: At }, { semanticName: `Delay`, name: `Half-Rounded Rectangle`, shortName: `delay`, description: `Represents a delay`, aliases: [`half-rounded-rectangle`], handler: Ae }, { semanticName: `Direct Access Storage`, name: `Horizontal Cylinder`, shortName: `h-cyl`, description: `Direct access storage`, aliases: [`das`, `horizontal-cylinder`], handler: wt }, { semanticName: `Disk Storage`, name: `Lined Cylinder`, shortName: `lin-cyl`, description: `Disk storage`, aliases: [`disk`, `lined-cylinder`], handler: Xe }, { semanticName: `Display`, name: `Curved Trapezoid`, shortName: `curv-trap`, description: `Represents a display`, aliases: [`curved-trapezoid`, `display`], handler: ge }, { semanticName: `Divided Process`, name: `Divided Rectangle`, shortName: `div-rect`, description: `Divided process shape`, aliases: [`div-proc`, `divided-rectangle`, `divided-process`], handler: Ce }, { semanticName: `Extract`, name: `Triangle`, shortName: `tri`, description: `Extraction process`, aliases: [`extract`, `triangle`], handler: kt }, { semanticName: `Internal Storage`, name: `Window Pane`, shortName: `win-pane`, description: `Internal storage`, aliases: [`internal-storage`, `window-pane`], handler: Mt }, { semanticName: `Junction`, name: `Filled Circle`, shortName: `f-circ`, description: `Junction point`, aliases: [`junction`, `filled-circle`], handler: Te }, { semanticName: `Loop Limit`, name: `Trapezoidal Pentagon`, shortName: `notch-pent`, description: `Loop limit step`, aliases: [`loop-limit`, `notched-pentagon`], handler: Et }, { semanticName: `Manual File`, name: `Flipped Triangle`, shortName: `flip-tri`, description: `Manual file operation`, aliases: [`manual-file`, `flipped-triangle`], handler: Oe }, { semanticName: `Manual Input`, name: `Sloped Rectangle`, shortName: `sl-rect`, description: `Manual input step`, aliases: [`manual-input`, `sloped-rectangle`], handler: st }, { semanticName: `Multi-Document`, name: `Stacked Document`, shortName: `docs`, description: `Multiple documents`, aliases: [`documents`, `st-doc`, `stacked-document`], handler: $e }, { semanticName: `Multi-Process`, name: `Stacked Rectangle`, shortName: `st-rect`, description: `Multiple processes`, aliases: [`procs`, `processes`, `stacked-rectangle`], handler: Qe }, { semanticName: `Stored Data`, name: `Bow Tie Rectangle`, shortName: `bow-rect`, description: `Stored data`, aliases: [`stored-data`, `bow-tie-rectangle`], handler: oe }, { semanticName: `Summary`, name: `Crossed Circle`, shortName: `cross-circ`, description: `Summary`, aliases: [`summary`, `crossed-circle`], handler: fe }, { semanticName: `Tagged Document`, name: `Tagged Document`, shortName: `tag-doc`, description: `Tagged document`, aliases: [`tag-doc`, `tagged-document`], handler: _t }, { semanticName: `Tagged Process`, name: `Tagged Rectangle`, shortName: `tag-rect`, description: `Tagged process`, aliases: [`tagged-rectangle`, `tag-proc`, `tagged-process`], handler: gt }, { semanticName: `Paper Tape`, name: `Flag`, shortName: `flag`, description: `Paper tape`, aliases: [`paper-tape`], handler: jt }, { semanticName: `Odd`, name: `Odd`, shortName: `odd`, description: `Odd shape`, internalAliases: [`rect_left_inv_arrow`], handler: rt }, { semanticName: `Lined Document`, name: `Lined Document`, shortName: `lin-doc`, description: `Lined document`, aliases: [`lined-document`], handler: Ze }], Yt = l(() => {
  let e2 = { state: ut, choice: le, note: et, rectWithTitle: it, labelRect: Ve, iconSquare: Le, iconCircle: Fe, icon: Pe, iconRounded: Ie, imageSquare: Re, anchor: G, kanbanItem: Ut, mindmapCircle: qt, defaultMindmapNode: Kt, classBox: Bt, erBox: Ft, requirementBox: Vt }, t2 = [...Object.entries(e2), ...Jt.flatMap((e3) => [e3.shortName, ...`aliases` in e3 ? e3.aliases : [], ...`internalAliases` in e3 ? e3.internalAliases : []].map((t3) => [t3, e3.handler]))];
  return Object.fromEntries(t2);
}, `generateShapeMap`)();
function Xt(e2) {
  return e2 in Yt;
}
l(Xt, `isValidShape`);
var Zt = /* @__PURE__ */ new Map();
async function Qt(e2, t2, n2) {
  let r2, i2;
  t2.shape === `rect` && (t2.rx && t2.ry ? t2.shape = `roundedRect` : t2.shape = `squareRect`);
  let a2 = t2.shape ? Yt[t2.shape] : void 0;
  if (!a2) throw Error(`No such shape: ${t2.shape}. Please check your syntax.`);
  if (t2.link) {
    let o2;
    n2.config.securityLevel === `sandbox` ? o2 = `_top` : t2.linkTarget && (o2 = t2.linkTarget || `_blank`), r2 = e2.insert(`svg:a`).attr(`xlink:href`, t2.link).attr(`target`, o2 ?? null), i2 = await a2(r2, t2, n2);
  } else i2 = await a2(e2, t2, n2), r2 = i2;
  return r2.attr(`data-look`, p(t2.look)), t2.tooltip && i2.attr(`title`, t2.tooltip), Zt.set(t2.id, r2), t2.haveCallback && r2.attr(`class`, r2.attr(`class`) + ` clickable`), r2;
}
l(Qt, `insertNode`);
var $t = l((e2, t2) => {
  Zt.set(t2.id, e2);
}, `setNodeElem`), en = l(() => {
  Zt.clear();
}, `clear`), tn = l((e2) => {
  let t2 = Zt.get(e2.id);
  c.trace(`Transforming node`, e2.diff, e2, `translate(` + (e2.x - e2.width / 2 - 5) + `, ` + e2.width / 2 + `)`);
  let n2 = e2.diff || 0;
  return e2.clusterNode ? t2.attr(`transform`, `translate(` + (e2.x + n2 - e2.width / 2) + `, ` + (e2.y - e2.height / 2 - 8) + `)`) : t2.attr(`transform`, `translate(` + e2.x + `, ` + e2.y + `)`), n2;
}, `positionNode`);
export {
  Qt as a,
  tn as c,
  ee as i,
  $t as l,
  en as n,
  Xt as o,
  M as r,
  C as s,
  te as t,
  T as u
};
