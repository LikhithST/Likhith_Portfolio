var _a;
import { B as e, C as t, L as n, V as r, W as i, _ as a, a as o, b as s, c, v as l } from "./chunk-ICPOFSXX-qplCg4jO.js";
import { g as u, h as d } from "./src-BWB47EtT.js";
import { t as f } from "./chunk-426QAEUC-BhmuD47R.js";
import "./identity-B9owP9ru.js";
import "./isEmpty-DOQ62aC5.js";
import "./chunk-K5T4RW27-DUXd3lAV.js";
import "./reduce-mGdWE-KL.js";
import "./flatten-CqtkwEvn.js";
import "./chunk-7N4EOEYR-BNay14On.js";
import "./chunk-67CJDMHE-CevvqCZQ.js";
import "./chunk-KGLVRYIC-Bdwc4beS.js";
import "./chunk-FOC6F5B3-MYrXiPPN.js";
import "./chunk-AA7GKIK3-Dr4yUAtZ.js";
import "./chunk-2KRD3SAO-FjXc5vAo.js";
import "./chunk-ORNJ4GCN-CQK2OPE5.js";
import "./chunk-LIHQZDEY-CLu_63wF.js";
import "./chunk-CIAEETIT-B2khf7wt.js";
import { t as p } from "./chunk-4BX2VUAB-BbK9EeOm.js";
import { t as m } from "./mermaid-parser.core-CeQTpQma.js";
var h = d((e2, t2) => {
  let n2 = e2 <= 1 ? e2 * 100 : e2;
  if (n2 < 0 || n2 > 100) throw Error(`${t2} must be between 0-1 (decimal) or 0-100 (percentage). Received: ${e2}`);
  return n2;
}, `toPercent`), g = d((e2, t2, n2) => ({ x: h(t2, `${n2} evolution`), y: h(e2, `${n2} visibility`) }), `toCoordinates`), _ = d((e2) => {
  if (e2) {
    if (e2 === `+<>`) return `bidirectional`;
    if (e2 === `+<`) return `backward`;
    if (e2 === `+>`) return `forward`;
  }
}, `getFlowFromPort`), v = d((e2) => {
  var _a2;
  if (!(e2 == null ? void 0 : e2.startsWith(`+`))) return {};
  let t2 = (_a2 = /^\+'([^']*)'/.exec(e2)) == null ? void 0 : _a2[1];
  return e2.includes(`<>`) ? { flow: `bidirectional`, label: t2 } : e2.includes(`<`) ? { flow: `backward`, label: t2 } : e2.includes(`>`) ? { flow: `forward`, label: t2 } : { label: t2 };
}, `extractFlowFromArrow`), y = d((e2, t2) => {
  if (p(e2, t2), e2.size && t2.setSize(e2.size.width, e2.size.height), e2.evolution) {
    let n2 = e2.evolution.stages.map((e3) => e3.secondName ? `${e3.name.trim()} / ${e3.secondName.trim()}` : e3.name.trim()), r2 = e2.evolution.stages.filter((e3) => e3.boundary !== void 0).map((e3) => e3.boundary);
    t2.updateAxes({ stages: n2, stageBoundaries: r2 });
  }
  if (e2.anchors.forEach((e3) => {
    let n2 = g(e3.visibility, e3.evolution, `Anchor "${e3.name}"`);
    t2.addNode(e3.name, e3.name, n2.x, n2.y, `anchor`);
  }), e2.components.forEach((e3) => {
    var _a2;
    let n2 = g(e3.visibility, e3.evolution, `Component "${e3.name}"`), r2 = e3.label ? (e3.label.negX ? -1 : 1) * e3.label.offsetX : void 0, i2 = e3.label ? (e3.label.negY ? -1 : 1) * e3.label.offsetY : void 0, a2 = (_a2 = e3.decorator) == null ? void 0 : _a2.strategy;
    t2.addNode(e3.name, e3.name, n2.x, n2.y, `component`, r2, i2, e3.inertia, a2);
  }), e2.notes.forEach((e3) => {
    let n2 = g(e3.visibility, e3.evolution, `Note "${e3.text}"`);
    t2.addNote(e3.text, n2.x, n2.y);
  }), e2.pipelines.forEach((e3) => {
    let n2 = t2.getNode(e3.parent);
    if (!n2 || typeof n2.y != `number`) throw Error(`Pipeline "${e3.parent}" must reference an existing component with coordinates.`);
    let r2 = n2.y;
    t2.startPipeline(e3.parent), e3.components.forEach((n3) => {
      let i2 = `${e3.parent}_${n3.name}`, a2 = n3.label ? (n3.label.negX ? -1 : 1) * n3.label.offsetX : void 0, o2 = n3.label ? (n3.label.negY ? -1 : 1) * n3.label.offsetY : void 0, s2 = h(n3.evolution, `Pipeline component "${n3.name}" evolution`);
      t2.addNode(i2, n3.name, s2, r2, `pipeline-component`, a2, o2), t2.addPipelineComponent(e3.parent, i2);
    });
  }), e2.links.forEach((e3) => {
    let n2 = !!e3.arrow && (e3.arrow.includes(`-.->`) || e3.arrow.includes(`.-.`)), r2 = _(e3.fromPort) ?? _(e3.toPort), { flow: i2, label: a2 } = v(e3.arrow);
    !r2 && i2 && (r2 = i2);
    let o2 = e3.linkLabel, s2 = a2 ?? o2;
    t2.addLink(e3.from, e3.to, n2, s2, r2);
  }), e2.evolves.forEach((e3) => {
    let n2 = t2.getNode(e3.component);
    if ((n2 == null ? void 0 : n2.y) !== void 0) {
      let r2 = h(e3.target, `Evolve target for "${e3.component}"`);
      t2.addTrend(e3.component, r2, n2.y);
    }
  }), e2.annotations.length > 0) {
    let n2 = e2.annotations[0], r2 = g(n2.x, n2.y, `Annotations box`);
    t2.setAnnotationsBox(r2.x, r2.y);
  }
  e2.annotation.forEach((e3) => {
    let n2 = g(e3.x, e3.y, `Annotation ${e3.number}`);
    t2.addAnnotation(e3.number, [{ x: n2.x, y: n2.y }], e3.text);
  }), e2.accelerators.forEach((e3) => {
    let n2 = g(e3.x, e3.y, `Accelerator "${e3.name}"`);
    t2.addAccelerator(e3.name, n2.x, n2.y);
  }), e2.deaccelerators.forEach((e3) => {
    let n2 = g(e3.x, e3.y, `Deaccelerator "${e3.name}"`);
    t2.addDeaccelerator(e3.name, n2.x, n2.y);
  });
}, `populateDb`), b = { parser: { yy: void 0 }, parse: d(async (e2) => {
  var _a2;
  let t2 = await m(`wardley`, e2);
  u.debug(t2);
  let n2 = (_a2 = b.parser) == null ? void 0 : _a2.yy;
  if (!n2 || typeof n2.addNode != `function`) throw Error(`parser.parser?.yy was not a WardleyDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
  y(t2, n2);
}, `parse`) }, x = new (_a = class {
  constructor() {
    this.nodes = /* @__PURE__ */ new Map(), this.links = [], this.trends = /* @__PURE__ */ new Map(), this.pipelines = /* @__PURE__ */ new Map(), this.annotations = [], this.notes = [], this.accelerators = [], this.deaccelerators = [], this.axes = {};
  }
  addNode(e2) {
    let t2 = this.nodes.get(e2.id) ?? { id: e2.id, label: e2.label }, n2 = { ...t2, ...e2, className: e2.className ?? t2.className, labelOffsetX: e2.labelOffsetX ?? t2.labelOffsetX, labelOffsetY: e2.labelOffsetY ?? t2.labelOffsetY };
    this.nodes.set(e2.id, n2);
  }
  addLink(e2) {
    this.links.push(e2);
  }
  addTrend(e2) {
    this.trends.set(e2.nodeId, e2);
  }
  startPipeline(e2) {
    this.pipelines.set(e2, { nodeId: e2, componentIds: [] });
    let t2 = this.nodes.get(e2);
    t2 && (t2.isPipelineParent = true);
  }
  addPipelineComponent(e2, t2) {
    let n2 = this.pipelines.get(e2);
    n2 && n2.componentIds.push(t2);
    let r2 = this.nodes.get(t2);
    r2 && (r2.inPipeline = true);
  }
  addAnnotation(e2) {
    this.annotations.push(e2);
  }
  addNote(e2) {
    this.notes.push(e2);
  }
  addAccelerator(e2) {
    this.accelerators.push(e2);
  }
  addDeaccelerator(e2) {
    this.deaccelerators.push(e2);
  }
  setAnnotationsBox(e2, t2) {
    this.annotationsBox = { x: e2, y: t2 };
  }
  setAxes(e2) {
    this.axes = { ...this.axes, ...e2 };
  }
  setSize(e2, t2) {
    this.size = { width: e2, height: t2 };
  }
  getNode(e2) {
    return this.nodes.get(e2);
  }
  build() {
    let e2 = [];
    for (let t2 of this.nodes.values()) {
      if (typeof t2.x != `number` || typeof t2.y != `number`) throw Error(`Node "${t2.label}" is missing coordinates`);
      e2.push(t2);
    }
    return { nodes: e2, links: [...this.links], trends: [...this.trends.values()], pipelines: [...this.pipelines.values()], annotations: [...this.annotations], notes: [...this.notes], accelerators: [...this.accelerators], deaccelerators: [...this.deaccelerators], annotationsBox: this.annotationsBox, axes: { ...this.axes }, size: this.size };
  }
  clear() {
    this.nodes.clear(), this.links = [], this.trends.clear(), this.pipelines.clear(), this.annotations = [], this.notes = [], this.accelerators = [], this.deaccelerators = [], this.annotationsBox = void 0, this.axes = {}, this.size = void 0;
  }
}, d(_a, `WardleyBuilder`), _a)();
function S(e2) {
  let t2 = s();
  return n(e2.trim(), t2);
}
d(S, `textSanitizer`);
function C() {
  return s()[`wardley-beta`];
}
d(C, `getConfig`);
function w(e2, t2, n2, r2, i2, a2, o2, s2, c2) {
  x.addNode({ id: e2, label: S(t2), x: n2, y: r2, className: i2, labelOffsetX: a2, labelOffsetY: o2, inertia: s2, sourceStrategy: c2 });
}
d(w, `addNode`);
function T(e2, t2, n2 = false, r2, i2) {
  x.addLink({ source: e2, target: t2, dashed: n2, label: r2, flow: i2 });
}
d(T, `addLink`);
function E(e2, t2, n2) {
  x.addTrend({ nodeId: e2, targetX: t2, targetY: n2 });
}
d(E, `addTrend`);
function D(e2, t2, n2) {
  x.addAnnotation({ number: e2, coordinates: t2, text: n2 ? S(n2) : void 0 });
}
d(D, `addAnnotation`);
function O(e2, t2, n2) {
  x.addNote({ text: S(e2), x: t2, y: n2 });
}
d(O, `addNote`);
function k(e2, t2, n2) {
  x.addAccelerator({ name: S(e2), x: t2, y: n2 });
}
d(k, `addAccelerator`);
function A(e2, t2, n2) {
  x.addDeaccelerator({ name: S(e2), x: t2, y: n2 });
}
d(A, `addDeaccelerator`);
function j(e2, t2) {
  x.setAnnotationsBox(e2, t2);
}
d(j, `setAnnotationsBox`);
function M(e2, t2) {
  x.setSize(e2, t2);
}
d(M, `setSize`);
function N(e2) {
  x.startPipeline(e2);
}
d(N, `startPipeline`);
function P(e2, t2) {
  x.addPipelineComponent(e2, t2);
}
d(P, `addPipelineComponent`);
function F(e2) {
  let t2 = {};
  e2.xLabel && (t2.xLabel = S(e2.xLabel)), e2.yLabel && (t2.yLabel = S(e2.yLabel)), e2.stages && (t2.stages = e2.stages.map((e3) => S(e3))), e2.stageBoundaries && (t2.stageBoundaries = e2.stageBoundaries), x.setAxes(t2);
}
d(F, `updateAxes`);
function I(e2) {
  return x.getNode(e2);
}
d(I, `getNode`);
function L() {
  return x.build();
}
d(L, `getWardleyData`);
function R() {
  x.clear(), o();
}
d(R, `clear`);
var z = { getConfig: C, addNode: w, addLink: T, addTrend: E, addAnnotation: D, addNote: O, addAccelerator: k, addDeaccelerator: A, setAnnotationsBox: j, setSize: M, startPipeline: N, addPipelineComponent: P, updateAxes: F, getNode: I, getWardleyData: L, clear: R, setAccTitle: r, getAccTitle: l, setDiagramTitle: i, getDiagramTitle: t, getAccDescription: a, setAccDescription: e }, B = [`Genesis`, `Custom Built`, `Product`, `Commodity`], V = d(() => {
  var _a2, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  let { themeVariables: e2 } = s();
  return { backgroundColor: ((_a2 = e2.wardley) == null ? void 0 : _a2.backgroundColor) ?? e2.background ?? `#fff`, axisColor: ((_b = e2.wardley) == null ? void 0 : _b.axisColor) ?? `#000`, axisTextColor: ((_c = e2.wardley) == null ? void 0 : _c.axisTextColor) ?? e2.primaryTextColor ?? `#222`, gridColor: ((_d = e2.wardley) == null ? void 0 : _d.gridColor) ?? `rgba(100, 100, 100, 0.2)`, componentFill: ((_e = e2.wardley) == null ? void 0 : _e.componentFill) ?? `#fff`, componentStroke: ((_f = e2.wardley) == null ? void 0 : _f.componentStroke) ?? `#000`, componentLabelColor: ((_g = e2.wardley) == null ? void 0 : _g.componentLabelColor) ?? e2.primaryTextColor ?? `#222`, linkStroke: ((_h = e2.wardley) == null ? void 0 : _h.linkStroke) ?? `#000`, evolutionStroke: ((_i = e2.wardley) == null ? void 0 : _i.evolutionStroke) ?? `#dc3545`, annotationStroke: ((_j = e2.wardley) == null ? void 0 : _j.annotationStroke) ?? `#000`, annotationTextColor: ((_k = e2.wardley) == null ? void 0 : _k.annotationTextColor) ?? e2.primaryTextColor ?? `#222`, annotationFill: ((_l = e2.wardley) == null ? void 0 : _l.annotationFill) ?? e2.background ?? `#fff` };
}, `getTheme`), H = d(() => {
  let e2 = s()[`wardley-beta`];
  return { width: (e2 == null ? void 0 : e2.width) ?? 900, height: (e2 == null ? void 0 : e2.height) ?? 600, padding: (e2 == null ? void 0 : e2.padding) ?? 48, nodeRadius: (e2 == null ? void 0 : e2.nodeRadius) ?? 6, nodeLabelOffset: (e2 == null ? void 0 : e2.nodeLabelOffset) ?? 8, axisFontSize: (e2 == null ? void 0 : e2.axisFontSize) ?? 12, labelFontSize: (e2 == null ? void 0 : e2.labelFontSize) ?? 10, showGrid: (e2 == null ? void 0 : e2.showGrid) ?? false, useMaxWidth: (e2 == null ? void 0 : e2.useMaxWidth) ?? true };
}, `getConfigValues`), U = { parser: b, db: z, renderer: { draw: d((e2, t2, n2, r2) => {
  var _a2, _b;
  u.debug(`Rendering Wardley map
` + e2);
  let i2 = H(), a2 = V(), o2 = i2.nodeRadius * 1.6, s2 = r2.db, l2 = s2.getWardleyData(), p2 = s2.getDiagramTitle(), m2 = ((_a2 = l2.size) == null ? void 0 : _a2.width) ?? i2.width, h2 = ((_b = l2.size) == null ? void 0 : _b.height) ?? i2.height, g2 = f(t2);
  g2.selectAll(`*`).remove(), c(g2, h2, m2, i2.useMaxWidth), g2.attr(`viewBox`, `0 0 ${m2} ${h2}`);
  let _2 = g2.append(`g`).attr(`class`, `wardley-map`), v2 = g2.append(`defs`);
  v2.append(`marker`).attr(`id`, `arrow-${t2}`).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 9).attr(`refY`, 5).attr(`markerWidth`, 6).attr(`markerHeight`, 6).attr(`orient`, `auto-start-reverse`).append(`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`fill`, a2.evolutionStroke).attr(`stroke`, `none`), v2.append(`marker`).attr(`id`, `link-arrow-end-${t2}`).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 9).attr(`refY`, 5).attr(`markerWidth`, 5).attr(`markerHeight`, 5).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 0 0 L 10 5 L 0 10 z`).attr(`fill`, a2.linkStroke).attr(`stroke`, `none`), v2.append(`marker`).attr(`id`, `link-arrow-start-${t2}`).attr(`viewBox`, `0 0 10 10`).attr(`refX`, 1).attr(`refY`, 5).attr(`markerWidth`, 5).attr(`markerHeight`, 5).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 10 0 L 0 5 L 10 10 z`).attr(`fill`, a2.linkStroke).attr(`stroke`, `none`), _2.append(`rect`).attr(`class`, `wardley-background`).attr(`width`, m2).attr(`height`, h2).attr(`fill`, a2.backgroundColor);
  let y2 = m2 - i2.padding * 2, b2 = h2 - i2.padding * 2;
  p2 && _2.append(`text`).attr(`class`, `wardley-title`).attr(`x`, m2 / 2).attr(`y`, i2.padding / 2).attr(`fill`, a2.axisTextColor).attr(`font-size`, i2.axisFontSize * 1.05).attr(`font-weight`, `bold`).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).text(p2);
  let x2 = d((e3) => i2.padding + e3 / 100 * y2, `projectX`), S2 = d((e3) => h2 - i2.padding - e3 / 100 * b2, `projectY`), C2 = _2.append(`g`).attr(`class`, `wardley-axes`);
  C2.append(`line`).attr(`x1`, i2.padding).attr(`x2`, m2 - i2.padding).attr(`y1`, h2 - i2.padding).attr(`y2`, h2 - i2.padding).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1), C2.append(`line`).attr(`x1`, i2.padding).attr(`x2`, i2.padding).attr(`y1`, i2.padding).attr(`y2`, h2 - i2.padding).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1);
  let w2 = l2.axes.xLabel ?? `Evolution`, T2 = l2.axes.yLabel ?? `Visibility`;
  C2.append(`text`).attr(`class`, `wardley-axis-label wardley-axis-label-x`).attr(`x`, i2.padding + y2 / 2).attr(`y`, h2 - i2.padding / 4).attr(`fill`, a2.axisTextColor).attr(`font-size`, i2.axisFontSize).attr(`font-weight`, `bold`).attr(`text-anchor`, `middle`).text(w2), C2.append(`text`).attr(`class`, `wardley-axis-label wardley-axis-label-y`).attr(`x`, i2.padding / 3).attr(`y`, i2.padding + b2 / 2).attr(`fill`, a2.axisTextColor).attr(`font-size`, i2.axisFontSize).attr(`font-weight`, `bold`).attr(`text-anchor`, `middle`).attr(`transform`, `rotate(-90 ${i2.padding / 3} ${i2.padding + b2 / 2})`).text(T2);
  let E2 = l2.axes.stages && l2.axes.stages.length > 0 ? l2.axes.stages : B;
  if (E2.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-stages`), t3 = l2.axes.stageBoundaries, n3 = [];
    if (t3 && t3.length === E2.length) {
      let e4 = 0;
      t3.forEach((t4) => {
        n3.push({ start: e4, end: t4 }), e4 = t4;
      });
    } else {
      let e4 = 1 / E2.length;
      E2.forEach((t4, r3) => {
        n3.push({ start: r3 * e4, end: (r3 + 1) * e4 });
      });
    }
    E2.forEach((t4, r3) => {
      let o3 = n3[r3], s3 = i2.padding + o3.start * y2, c2 = (s3 + (i2.padding + o3.end * y2)) / 2;
      r3 > 0 && e3.append(`line`).attr(`x1`, s3).attr(`x2`, s3).attr(`y1`, i2.padding).attr(`y2`, h2 - i2.padding).attr(`stroke`, `#000`).attr(`stroke-width`, 1).attr(`stroke-dasharray`, `5 5`).attr(`opacity`, 0.8), e3.append(`text`).attr(`class`, `wardley-stage-label`).attr(`x`, c2).attr(`y`, h2 - i2.padding / 1.5).attr(`fill`, a2.axisTextColor).attr(`font-size`, i2.axisFontSize - 2).attr(`text-anchor`, `middle`).text(t4);
    });
  }
  if (i2.showGrid) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-grid`);
    for (let t3 = 1; t3 < 4; t3++) {
      let n3 = t3 / 4, r3 = i2.padding + y2 * n3;
      e3.append(`line`).attr(`x1`, r3).attr(`x2`, r3).attr(`y1`, i2.padding).attr(`y2`, h2 - i2.padding).attr(`stroke`, a2.gridColor).attr(`stroke-dasharray`, `2 6`), e3.append(`line`).attr(`x1`, i2.padding).attr(`x2`, m2 - i2.padding).attr(`y1`, h2 - i2.padding - b2 * n3).attr(`y2`, h2 - i2.padding - b2 * n3).attr(`stroke`, a2.gridColor).attr(`stroke-dasharray`, `2 6`);
    }
  }
  let D2 = /* @__PURE__ */ new Map();
  if (l2.nodes.forEach((e3) => {
    D2.set(e3.id, { x: x2(e3.x), y: S2(e3.y), node: e3 });
  }), l2.pipelines.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-pipelines`), t3 = _2.append(`g`).attr(`class`, `wardley-pipeline-links`);
    l2.pipelines.forEach((n3) => {
      if (n3.componentIds.length === 0) return;
      let r3 = n3.componentIds.map((e4) => ({ id: e4, pos: D2.get(e4), node: l2.nodes.find((t4) => t4.id === e4) })).filter((e4) => e4.pos && e4.node).sort((e4, t4) => e4.node.x - t4.node.x);
      for (let e4 = 0; e4 < r3.length - 1; e4++) {
        let n4 = r3[e4], i3 = r3[e4 + 1];
        t3.append(`line`).attr(`class`, `wardley-pipeline-evolution-link`).attr(`x1`, n4.pos.x).attr(`y1`, n4.pos.y).attr(`x2`, i3.pos.x).attr(`y2`, i3.pos.y).attr(`stroke`, a2.linkStroke).attr(`stroke-width`, 1).attr(`stroke-dasharray`, `4 4`);
      }
      let s3 = 1 / 0, c2 = -1 / 0, u2 = 0;
      if (n3.componentIds.forEach((e4) => {
        let t4 = D2.get(e4);
        t4 && (s3 = Math.min(s3, t4.x), c2 = Math.max(c2, t4.x), u2 = t4.y);
      }), s3 !== 1 / 0 && c2 !== -1 / 0) {
        let t4 = i2.nodeRadius * 4, r4 = u2 - t4 / 2, l3 = D2.get(n3.nodeId);
        l3 && (l3.x = (s3 + c2) / 2, l3.y = r4 - o2 / 6), e3.append(`rect`).attr(`class`, `wardley-pipeline-box`).attr(`x`, s3 - 15).attr(`y`, r4).attr(`width`, c2 - s3 + 30).attr(`height`, t4).attr(`fill`, `none`).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1.5).attr(`rx`, 4).attr(`ry`, 4);
      }
    });
  }
  let O2 = _2.append(`g`).attr(`class`, `wardley-links`), k2 = /* @__PURE__ */ new Map();
  l2.pipelines.forEach((e3) => {
    k2.set(e3.nodeId, new Set(e3.componentIds));
  });
  let A2 = l2.links.filter((e3) => {
    var _a3;
    return !(!D2.has(e3.source) || !D2.has(e3.target) || ((_a3 = k2.get(e3.target)) == null ? void 0 : _a3.has(e3.source)));
  });
  O2.selectAll(`line`).data(A2).enter().append(`line`).attr(`class`, (e3) => `wardley-link${e3.dashed ? ` wardley-link--dashed` : ``}`).attr(`x1`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = l2.nodes.find((t4) => t4.id === e3.source).isPipelineParent ? o2 / Math.sqrt(2) : i2.nodeRadius, a3 = n3.x - t3.x, s3 = n3.y - t3.y, c2 = Math.sqrt(a3 * a3 + s3 * s3);
    return t3.x + a3 / c2 * r3;
  }).attr(`y1`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = l2.nodes.find((t4) => t4.id === e3.source).isPipelineParent ? o2 / Math.sqrt(2) : i2.nodeRadius, a3 = n3.x - t3.x, s3 = n3.y - t3.y, c2 = Math.sqrt(a3 * a3 + s3 * s3);
    return t3.y + s3 / c2 * r3;
  }).attr(`x2`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = l2.nodes.find((t4) => t4.id === e3.target).isPipelineParent ? o2 / Math.sqrt(2) : i2.nodeRadius, a3 = t3.x - n3.x, s3 = t3.y - n3.y, c2 = Math.sqrt(a3 * a3 + s3 * s3);
    return n3.x + a3 / c2 * r3;
  }).attr(`y2`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = l2.nodes.find((t4) => t4.id === e3.target).isPipelineParent ? o2 / Math.sqrt(2) : i2.nodeRadius, a3 = t3.x - n3.x, s3 = t3.y - n3.y, c2 = Math.sqrt(a3 * a3 + s3 * s3);
    return n3.y + s3 / c2 * r3;
  }).attr(`stroke`, a2.linkStroke).attr(`stroke-width`, 1).attr(`stroke-dasharray`, (e3) => e3.dashed ? `6 6` : null).attr(`marker-end`, (e3) => e3.flow === `forward` || e3.flow === `bidirectional` ? `url(#link-arrow-end-${t2})` : null).attr(`marker-start`, (e3) => e3.flow === `backward` || e3.flow === `bidirectional` ? `url(#link-arrow-start-${t2})` : null), O2.selectAll(`text`).data(A2.filter((e3) => e3.label)).enter().append(`text`).attr(`class`, `wardley-link-label`).attr(`x`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = (t3.x + n3.x) / 2, i3 = n3.y - t3.y, a3 = n3.x - t3.x;
    return r3 + i3 / Math.sqrt(a3 * a3 + i3 * i3) * 8;
  }).attr(`y`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = (t3.y + n3.y) / 2, i3 = n3.x - t3.x, a3 = n3.y - t3.y, o3 = Math.sqrt(i3 * i3 + a3 * a3);
    return r3 + -i3 / o3 * 8;
  }).attr(`fill`, a2.axisTextColor).attr(`font-size`, i2.labelFontSize).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).attr(`transform`, (e3) => {
    let t3 = D2.get(e3.source), n3 = D2.get(e3.target), r3 = (t3.x + n3.x) / 2, i3 = (t3.y + n3.y) / 2, a3 = n3.x - t3.x, o3 = n3.y - t3.y, s3 = Math.sqrt(a3 * a3 + o3 * o3), c2 = o3 / s3, l3 = -a3 / s3, u2 = r3 + c2 * 8, d2 = i3 + l3 * 8, f2 = Math.atan2(o3, a3) * 180 / Math.PI;
    return (f2 > 90 || f2 < -90) && (f2 += 180), `rotate(${f2} ${u2} ${d2})`;
  }).text((e3) => e3.label);
  let j2 = _2.append(`g`).attr(`class`, `wardley-trends`), M2 = l2.trends.map((e3) => {
    let t3 = D2.get(e3.nodeId);
    if (!t3) return null;
    let n3 = x2(e3.targetX), r3 = S2(e3.targetY), a3 = n3 - t3.x, o3 = r3 - t3.y, s3 = Math.sqrt(a3 * a3 + o3 * o3), c2 = i2.nodeRadius + 2;
    return { origin: t3, targetX: n3, targetY: r3, adjustedX2: s3 > c2 ? n3 - a3 / s3 * c2 : n3, adjustedY2: s3 > c2 ? r3 - o3 / s3 * c2 : r3 };
  }).filter((e3) => e3 !== null);
  j2.selectAll(`line`).data(M2).enter().append(`line`).attr(`class`, `wardley-trend`).attr(`x1`, (e3) => e3.origin.x).attr(`y1`, (e3) => e3.origin.y).attr(`x2`, (e3) => e3.adjustedX2).attr(`y2`, (e3) => e3.adjustedY2).attr(`stroke`, a2.evolutionStroke).attr(`stroke-width`, 1).attr(`stroke-dasharray`, `4 4`).attr(`marker-end`, `url(#arrow-${t2})`);
  let N2 = _2.append(`g`).attr(`class`, `wardley-nodes`).selectAll(`g`).data(l2.nodes).enter().append(`g`).attr(`class`, (e3) => [`wardley-node`, e3.className ? `wardley-node--${e3.className}` : ``].filter(Boolean).join(` `));
  N2.filter((e3) => e3.sourceStrategy === `outsource`).append(`circle`).attr(`class`, `wardley-outsource-overlay`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y).attr(`r`, i2.nodeRadius * 2).attr(`fill`, `#666`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), N2.filter((e3) => e3.sourceStrategy === `buy`).append(`circle`).attr(`class`, `wardley-buy-overlay`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y).attr(`r`, i2.nodeRadius * 2).attr(`fill`, `#ccc`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), N2.filter((e3) => e3.sourceStrategy === `build`).append(`circle`).attr(`class`, `wardley-build-overlay`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y).attr(`r`, i2.nodeRadius * 2).attr(`fill`, `#eee`).attr(`stroke`, `#000`).attr(`stroke-width`, 1);
  let P2 = N2.filter((e3) => e3.sourceStrategy === `market`);
  P2.append(`circle`).attr(`class`, `wardley-market-overlay`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y).attr(`r`, i2.nodeRadius * 2).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), N2.filter((e3) => !e3.isPipelineParent && e3.sourceStrategy !== `market` && e3.className !== `anchor`).append(`circle`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y).attr(`r`, i2.nodeRadius).attr(`fill`, a2.componentFill).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1);
  let F2 = i2.nodeRadius * 0.7, I2 = i2.nodeRadius * 1.2;
  if (P2.append(`line`).attr(`class`, `wardley-market-line`).attr(`x1`, (e3) => D2.get(e3.id).x).attr(`y1`, (e3) => D2.get(e3.id).y - I2).attr(`x2`, (e3) => D2.get(e3.id).x - I2 * Math.cos(Math.PI / 6)).attr(`y2`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), P2.append(`line`).attr(`class`, `wardley-market-line`).attr(`x1`, (e3) => D2.get(e3.id).x - I2 * Math.cos(Math.PI / 6)).attr(`y1`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`x2`, (e3) => D2.get(e3.id).x + I2 * Math.cos(Math.PI / 6)).attr(`y2`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), P2.append(`line`).attr(`class`, `wardley-market-line`).attr(`x1`, (e3) => D2.get(e3.id).x + I2 * Math.cos(Math.PI / 6)).attr(`y1`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`x2`, (e3) => D2.get(e3.id).x).attr(`y2`, (e3) => D2.get(e3.id).y - I2).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), P2.append(`circle`).attr(`class`, `wardley-market-dot`).attr(`cx`, (e3) => D2.get(e3.id).x).attr(`cy`, (e3) => D2.get(e3.id).y - I2).attr(`r`, F2).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 2), P2.append(`circle`).attr(`class`, `wardley-market-dot`).attr(`cx`, (e3) => D2.get(e3.id).x - I2 * Math.cos(Math.PI / 6)).attr(`cy`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`r`, F2).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 2), P2.append(`circle`).attr(`class`, `wardley-market-dot`).attr(`cx`, (e3) => D2.get(e3.id).x + I2 * Math.cos(Math.PI / 6)).attr(`cy`, (e3) => D2.get(e3.id).y + I2 * Math.sin(Math.PI / 6)).attr(`r`, F2).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 2), N2.filter((e3) => e3.isPipelineParent === true).append(`rect`).attr(`x`, (e3) => D2.get(e3.id).x - o2 / 2).attr(`y`, (e3) => D2.get(e3.id).y - o2 / 2).attr(`width`, o2).attr(`height`, o2).attr(`fill`, a2.componentFill).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), N2.filter((e3) => e3.inertia === true).append(`line`).attr(`class`, `wardley-inertia`).attr(`x1`, (e3) => {
    let t3 = D2.get(e3.id), n3 = e3.isPipelineParent ? o2 / 2 + 15 : i2.nodeRadius + 15;
    return e3.sourceStrategy && (n3 += i2.nodeRadius + 10), t3.x + n3;
  }).attr(`y1`, (e3) => {
    let t3 = D2.get(e3.id), n3 = e3.isPipelineParent ? o2 : i2.nodeRadius * 2;
    return t3.y - n3 / 2;
  }).attr(`x2`, (e3) => {
    let t3 = D2.get(e3.id), n3 = e3.isPipelineParent ? o2 / 2 + 15 : i2.nodeRadius + 15;
    return e3.sourceStrategy && (n3 += i2.nodeRadius + 10), t3.x + n3;
  }).attr(`y2`, (e3) => {
    let t3 = D2.get(e3.id), n3 = e3.isPipelineParent ? o2 : i2.nodeRadius * 2;
    return t3.y + n3 / 2;
  }).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 6), N2.append(`text`).attr(`x`, (e3) => {
    let t3 = D2.get(e3.id);
    if (e3.className === `anchor`) return e3.labelOffsetX === void 0 ? t3.x : t3.x + e3.labelOffsetX;
    let n3 = i2.nodeLabelOffset;
    e3.sourceStrategy && e3.labelOffsetX === void 0 && (n3 += 10);
    let r3 = e3.labelOffsetX ?? n3;
    return t3.x + r3;
  }).attr(`y`, (e3) => {
    let t3 = D2.get(e3.id);
    if (e3.className === `anchor`) return e3.labelOffsetY === void 0 ? t3.y - 3 : t3.y + e3.labelOffsetY;
    let n3 = -i2.nodeLabelOffset;
    e3.sourceStrategy && e3.labelOffsetY === void 0 && (n3 -= 10);
    let r3 = e3.labelOffsetY ?? n3;
    return t3.y + r3;
  }).attr(`class`, `wardley-node-label`).attr(`fill`, (e3) => e3.className === `evolved` ? a2.evolutionStroke : e3.className === `anchor` ? `#000` : a2.componentLabelColor).attr(`font-size`, i2.labelFontSize).attr(`font-weight`, (e3) => e3.className === `anchor` ? `bold` : `normal`).attr(`text-anchor`, (e3) => e3.className === `anchor` ? `middle` : `start`).attr(`dominant-baseline`, (e3) => e3.className === `anchor` ? `middle` : `auto`).text((e3) => e3.label), l2.annotations.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-annotations`);
    if (l2.annotations.forEach((t3) => {
      let n3 = t3.coordinates.map((e4) => ({ x: x2(e4.x), y: S2(e4.y) }));
      if (n3.length > 1) for (let t4 = 0; t4 < n3.length - 1; t4++) e3.append(`line`).attr(`class`, `wardley-annotation-line`).attr(`x1`, n3[t4].x).attr(`y1`, n3[t4].y).attr(`x2`, n3[t4 + 1].x).attr(`y2`, n3[t4 + 1].y).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1.5).attr(`stroke-dasharray`, `4 4`);
      n3.forEach((n4) => {
        let r3 = e3.append(`g`).attr(`class`, `wardley-annotation`);
        r3.append(`circle`).attr(`cx`, n4.x).attr(`cy`, n4.y).attr(`r`, 10).attr(`fill`, `white`).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1.5), r3.append(`text`).attr(`x`, n4.x).attr(`y`, n4.y).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `central`).attr(`font-size`, 10).attr(`fill`, a2.axisTextColor).attr(`font-weight`, `bold`).text(t3.number);
      });
    }), l2.annotationsBox) {
      let t3 = x2(l2.annotationsBox.x), n3 = S2(l2.annotationsBox.y), r3 = e3.append(`g`).attr(`class`, `wardley-annotations-box`), o3 = [...l2.annotations].filter((e4) => e4.text).sort((e4, t4) => e4.number - t4.number), s3 = [];
      if (o3.forEach((e4, i3) => {
        let o4 = r3.append(`text`).attr(`x`, t3 + 10).attr(`y`, n3 + 10 + (i3 + 1) * 16).attr(`font-size`, 11).attr(`fill`, a2.axisTextColor).attr(`text-anchor`, `start`).attr(`dominant-baseline`, `middle`).text(`${e4.number}. ${e4.text}`);
        s3.push(o4);
      }), s3.length > 0) {
        let e4 = 0, c2 = 0;
        s3.forEach((t4) => {
          let n4 = t4.node(), r4 = n4.getComputedTextLength();
          e4 = Math.max(e4, r4);
          let i3 = n4.getBBox();
          c2 = Math.max(c2, i3.height);
        });
        let l3 = e4 + 20 + 105, u2 = o3.length * 16 + 20 + c2 / 2, d2 = i2.padding, f2 = m2 - i2.padding - l3, p3 = i2.padding, g3 = h2 - i2.padding - u2;
        t3 = Math.max(d2, Math.min(t3, f2)), n3 = Math.max(p3, Math.min(n3, g3)), s3.forEach((e5, r4) => {
          e5.attr(`x`, t3 + 10).attr(`y`, n3 + 10 + (r4 + 1) * 16);
        }), r3.insert(`rect`, `text`).attr(`x`, t3).attr(`y`, n3).attr(`width`, l3).attr(`height`, u2).attr(`fill`, `white`).attr(`stroke`, a2.axisColor).attr(`stroke-width`, 1.5).attr(`rx`, 4).attr(`ry`, 4);
      }
    }
  }
  if (l2.notes.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-notes`);
    l2.notes.forEach((t3) => {
      let n3 = x2(t3.x), r3 = S2(t3.y);
      e3.append(`text`).attr(`x`, n3).attr(`y`, r3).attr(`text-anchor`, `start`).attr(`font-size`, 11).attr(`fill`, a2.axisTextColor).attr(`font-weight`, `bold`).text(t3.text);
    });
  }
  if (l2.accelerators.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-accelerators`);
    l2.accelerators.forEach((t3) => {
      let n3 = x2(t3.x), r3 = S2(t3.y), i3 = `
        M ${n3} ${r3 - 30 / 2}
        L ${n3 + 60 - 20} ${r3 - 30 / 2}
        L ${n3 + 60 - 20} ${r3 - 30 / 2 - 8}
        L ${n3 + 60} ${r3}
        L ${n3 + 60 - 20} ${r3 + 30 / 2 + 8}
        L ${n3 + 60 - 20} ${r3 + 30 / 2}
        L ${n3} ${r3 + 30 / 2}
        Z
      `;
      e3.append(`path`).attr(`d`, i3).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), e3.append(`text`).attr(`x`, n3 + 60 / 2).attr(`y`, r3 + 30 / 2 + 15).attr(`text-anchor`, `middle`).attr(`font-size`, 10).attr(`fill`, a2.axisTextColor).attr(`font-weight`, `bold`).text(t3.name);
    });
  }
  if (l2.deaccelerators.length > 0) {
    let e3 = _2.append(`g`).attr(`class`, `wardley-deaccelerators`);
    l2.deaccelerators.forEach((t3) => {
      let n3 = x2(t3.x), r3 = S2(t3.y), i3 = `
        M ${n3 + 60} ${r3 - 30 / 2}
        L ${n3 + 20} ${r3 - 30 / 2}
        L ${n3 + 20} ${r3 - 30 / 2 - 8}
        L ${n3} ${r3}
        L ${n3 + 20} ${r3 + 30 / 2 + 8}
        L ${n3 + 20} ${r3 + 30 / 2}
        L ${n3 + 60} ${r3 + 30 / 2}
        Z
      `;
      e3.append(`path`).attr(`d`, i3).attr(`fill`, `white`).attr(`stroke`, a2.componentStroke).attr(`stroke-width`, 1), e3.append(`text`).attr(`x`, n3 + 60 / 2).attr(`y`, r3 + 30 / 2 + 15).attr(`text-anchor`, `middle`).attr(`font-size`, 10).attr(`fill`, a2.axisTextColor).attr(`font-weight`, `bold`).text(t3.name);
    });
  }
}, `draw`) }, styles: d(() => ``, `styles`) };
export {
  U as diagram
};
