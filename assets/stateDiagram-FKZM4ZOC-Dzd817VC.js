import { E as e, b as t, c as n, s as r } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as i, h as a, p as o } from "./src-D8UWkQNo.js";
import "./path-B-GLhb_8.js";
import "./math-O_7OW4FW.js";
import "./array-CopOK-GI.js";
import { U as s, g as c } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as l } from "./line-DzDDQdde.js";
import "./chunk-HN2XXSSU-SCO0eetj.js";
import "./chunk-CVBHYZKI-9IS-TY3G.js";
import "./chunk-ATLVNIR6-6j91LnhU.js";
import "./dist-DrVb-WkD.js";
import "./identity-IHMFXfGJ.js";
import "./chunk-JA3XYJ7Z-By1gQAUK.js";
import "./chunk-JZLCHNYA-BantgYUJ.js";
import "./chunk-QXUST7PY-BALPMe08.js";
import "./chunk-N4CR4FBY-CKvgw20D.js";
import "./isEmpty-Suvitui-.js";
import "./reduce-S4_EnTW-.js";
import "./flatten-DG1tNxhW.js";
import { t as u } from "./graphlib-Ct7gWg8T.js";
import { t as d } from "./dagre-DFBV6fTk.js";
import "./chunk-55IACEB6-D1XFeFgk.js";
import "./chunk-QN33PNHL-BgmhZT4q.js";
import { i as f, n as p, t as m } from "./chunk-DI55MBZ5-CKzbRqua.js";
var h = a((e2) => e2.append(`circle`).attr(`class`, `start-state`).attr(`r`, t().state.sizeUnit).attr(`cx`, t().state.padding + t().state.sizeUnit).attr(`cy`, t().state.padding + t().state.sizeUnit), `drawStartState`), g = a((e2) => e2.append(`line`).style(`stroke`, `grey`).style(`stroke-dasharray`, `3`).attr(`x1`, t().state.textHeight).attr(`class`, `divider`).attr(`x2`, t().state.textHeight * 2).attr(`y1`, 0).attr(`y2`, 0), `drawDivider`), _ = a((e2, n2) => {
  let r2 = e2.append(`text`).attr(`x`, 2 * t().state.padding).attr(`y`, t().state.textHeight + 2 * t().state.padding).attr(`font-size`, t().state.fontSize).attr(`class`, `state-title`).text(n2.id), i2 = r2.node().getBBox();
  return e2.insert(`rect`, `:first-child`).attr(`x`, t().state.padding).attr(`y`, t().state.padding).attr(`width`, i2.width + 2 * t().state.padding).attr(`height`, i2.height + 2 * t().state.padding).attr(`rx`, t().state.radius), r2;
}, `drawSimpleState`), v = a((e2, n2) => {
  let r2 = a(function(e3, n3, r3) {
    let i3 = e3.append(`tspan`).attr(`x`, 2 * t().state.padding).text(n3);
    r3 || i3.attr(`dy`, t().state.textHeight);
  }, `addTspan`), i2 = e2.append(`text`).attr(`x`, 2 * t().state.padding).attr(`y`, t().state.textHeight + 1.3 * t().state.padding).attr(`font-size`, t().state.fontSize).attr(`class`, `state-title`).text(n2.descriptions[0]).node().getBBox(), o2 = i2.height, s2 = e2.append(`text`).attr(`x`, t().state.padding).attr(`y`, o2 + t().state.padding * 0.4 + t().state.dividerMargin + t().state.textHeight).attr(`class`, `state-description`), c2 = true, l2 = true;
  n2.descriptions.forEach(function(e3) {
    c2 || (r2(s2, e3, l2), l2 = false), c2 = false;
  });
  let u2 = e2.append(`line`).attr(`x1`, t().state.padding).attr(`y1`, t().state.padding + o2 + t().state.dividerMargin / 2).attr(`y2`, t().state.padding + o2 + t().state.dividerMargin / 2).attr(`class`, `descr-divider`), d2 = s2.node().getBBox(), f2 = Math.max(d2.width, i2.width);
  return u2.attr(`x2`, f2 + 3 * t().state.padding), e2.insert(`rect`, `:first-child`).attr(`x`, t().state.padding).attr(`y`, t().state.padding).attr(`width`, f2 + 2 * t().state.padding).attr(`height`, d2.height + o2 + 2 * t().state.padding).attr(`rx`, t().state.radius), e2;
}, `drawDescrState`), y = a((e2, n2, r2) => {
  let i2 = t().state.padding, a2 = 2 * t().state.padding, o2 = e2.node().getBBox(), s2 = o2.width, c2 = o2.x, l2 = e2.append(`text`).attr(`x`, 0).attr(`y`, t().state.titleShift).attr(`font-size`, t().state.fontSize).attr(`class`, `state-title`).text(n2.id), u2 = l2.node().getBBox().width + a2, d2 = Math.max(u2, s2);
  d2 === s2 && (d2 += a2);
  let f2, p2 = e2.node().getBBox();
  n2.doc, f2 = c2 - i2, u2 > s2 && (f2 = (s2 - d2) / 2 + i2), Math.abs(c2 - p2.x) < i2 && u2 > s2 && (f2 = c2 - (u2 - s2) / 2);
  let m2 = 1 - t().state.textHeight;
  return e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, m2).attr(`class`, r2 ? `alt-composit` : `composit`).attr(`width`, d2).attr(`height`, p2.height + t().state.textHeight + t().state.titleShift + 1).attr(`rx`, `0`), l2.attr(`x`, f2 + i2), u2 <= s2 && l2.attr(`x`, c2 + (d2 - a2) / 2 - u2 / 2 + i2), e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, t().state.titleShift - t().state.textHeight - t().state.padding).attr(`width`, d2).attr(`height`, t().state.textHeight * 3).attr(`rx`, t().state.radius), e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, t().state.titleShift - t().state.textHeight - t().state.padding).attr(`width`, d2).attr(`height`, p2.height + 3 + 2 * t().state.textHeight).attr(`rx`, t().state.radius), e2;
}, `addTitleAndBox`), b = a((e2) => (e2.append(`circle`).attr(`class`, `end-state-outer`).attr(`r`, t().state.sizeUnit + t().state.miniPadding).attr(`cx`, t().state.padding + t().state.sizeUnit + t().state.miniPadding).attr(`cy`, t().state.padding + t().state.sizeUnit + t().state.miniPadding), e2.append(`circle`).attr(`class`, `end-state-inner`).attr(`r`, t().state.sizeUnit).attr(`cx`, t().state.padding + t().state.sizeUnit + 2).attr(`cy`, t().state.padding + t().state.sizeUnit + 2)), `drawEndState`), x = a((e2, n2) => {
  let r2 = t().state.forkWidth, i2 = t().state.forkHeight;
  if (n2.parentId) {
    let e3 = r2;
    r2 = i2, i2 = e3;
  }
  return e2.append(`rect`).style(`stroke`, `black`).style(`fill`, `black`).attr(`width`, r2).attr(`height`, i2).attr(`x`, t().state.padding).attr(`y`, t().state.padding);
}, `drawForkJoinState`), S = a((e2, n2, i2, a2) => {
  let o2 = 0, s2 = a2.append(`text`);
  s2.style(`text-anchor`, `start`), s2.attr(`class`, `noteText`);
  let c2 = e2.replace(/\r\n/g, `<br/>`);
  c2 = c2.replace(/\n/g, `<br/>`);
  let l2 = c2.split(r.lineBreakRegex), u2 = 1.25 * t().state.noteMargin;
  for (let e3 of l2) {
    let r2 = e3.trim();
    if (r2.length > 0) {
      let e4 = s2.append(`tspan`);
      if (e4.text(r2), u2 === 0) {
        let t2 = e4.node().getBBox();
        u2 += t2.height;
      }
      o2 += u2, e4.attr(`x`, n2 + t().state.noteMargin), e4.attr(`y`, i2 + o2 + 1.25 * t().state.noteMargin);
    }
  }
  return { textWidth: s2.node().getBBox().width, textHeight: o2 };
}, `_drawLongText`), C = a((e2, n2) => {
  n2.attr(`class`, `state-note`);
  let r2 = n2.append(`rect`).attr(`x`, 0).attr(`y`, t().state.padding), { textWidth: i2, textHeight: a2 } = S(e2, 0, 0, n2.append(`g`));
  return r2.attr(`height`, a2 + 2 * t().state.noteMargin), r2.attr(`width`, i2 + t().state.noteMargin * 2), r2;
}, `drawNote`), w = a(function(e2, n2) {
  let r2 = n2.id, i2 = { id: r2, label: n2.id, width: 0, height: 0 }, a2 = e2.append(`g`).attr(`id`, r2).attr(`class`, `stateGroup`);
  n2.type === `start` && h(a2), n2.type === `end` && b(a2), (n2.type === `fork` || n2.type === `join`) && x(a2, n2), n2.type === `note` && C(n2.note.text, a2), n2.type === `divider` && g(a2), n2.type === `default` && n2.descriptions.length === 0 && _(a2, n2), n2.type === `default` && n2.descriptions.length > 0 && v(a2, n2);
  let o2 = a2.node().getBBox();
  return i2.width = o2.width + 2 * t().state.padding, i2.height = o2.height + 2 * t().state.padding, i2;
}, `drawState`), T = 0, E = a(function(n2, o2, u2) {
  let d2 = a(function(e2) {
    switch (e2) {
      case m.relationType.AGGREGATION:
        return `aggregation`;
      case m.relationType.EXTENSION:
        return `extension`;
      case m.relationType.COMPOSITION:
        return `composition`;
      case m.relationType.DEPENDENCY:
        return `dependency`;
    }
  }, `getRelationType`);
  o2.points = o2.points.filter((e2) => !Number.isNaN(e2.y));
  let f2 = o2.points, p2 = l().x(function(e2) {
    return e2.x;
  }).y(function(e2) {
    return e2.y;
  }).curve(s), h2 = n2.append(`path`).attr(`d`, p2(f2)).attr(`id`, `edge` + T).attr(`class`, `transition`), g2 = ``;
  if (t().state.arrowMarkerAbsolute && (g2 = e(true)), h2.attr(`marker-end`, `url(` + g2 + `#` + d2(m.relationType.DEPENDENCY) + `End)`), u2.title !== void 0) {
    let e2 = n2.append(`g`).attr(`class`, `stateLabel`), { x: a2, y: s2 } = c.calcLabelPosition(o2.points), l2 = r.getRows(u2.title), d3 = 0, f3 = [], p3 = 0, m2 = 0;
    for (let t2 = 0; t2 <= l2.length; t2++) {
      let n3 = e2.append(`text`).attr(`text-anchor`, `middle`).text(l2[t2]).attr(`x`, a2).attr(`y`, s2 + d3), r2 = n3.node().getBBox();
      p3 = Math.max(p3, r2.width), m2 = Math.min(m2, r2.x), i.info(r2.x, a2, s2 + d3), d3 === 0 && (d3 = n3.node().getBBox().height, i.info(`Title height`, d3, s2)), f3.push(n3);
    }
    let h3 = d3 * l2.length;
    if (l2.length > 1) {
      let e3 = (l2.length - 1) * d3 * 0.5;
      f3.forEach((t2, n3) => t2.attr(`y`, s2 + n3 * d3 - e3)), h3 = d3 * l2.length;
    }
    let g3 = e2.node().getBBox();
    e2.insert(`rect`, `:first-child`).attr(`class`, `box`).attr(`x`, a2 - p3 / 2 - t().state.padding / 2).attr(`y`, s2 - h3 / 2 - t().state.padding / 2 - 3.5).attr(`width`, p3 + t().state.padding).attr(`height`, h3 + t().state.padding), i.info(g3);
  }
  T++;
}, `drawEdge`), D, O = {}, k = a(function() {
}, `setConf`), A = a(function(e2) {
  e2.append(`defs`).append(`marker`).attr(`id`, `dependencyEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `insertMarkers`), j = a(function(e2, r2, a2, s2) {
  D = t().state;
  let c2 = t().securityLevel, l2;
  c2 === `sandbox` && (l2 = o(`#i` + r2));
  let u2 = o(c2 === `sandbox` ? l2.nodes()[0].contentDocument.body : `body`), d2 = c2 === `sandbox` ? l2.nodes()[0].contentDocument : document;
  i.debug(`Rendering diagram ` + e2);
  let f2 = u2.select(`[id='${r2}']`);
  A(f2), N(s2.db.getRootDoc(), f2, void 0, false, u2, d2, s2);
  let p2 = D.padding, m2 = f2.node().getBBox(), h2 = m2.width + p2 * 2, g2 = m2.height + p2 * 2;
  n(f2, g2, h2 * 1.75, D.useMaxWidth), f2.attr(`viewBox`, `${m2.x - D.padding}  ${m2.y - D.padding} ` + h2 + ` ` + g2);
}, `draw`), M = a((e2) => e2 ? e2.length * D.fontSizeFactor : 1, `getLabelWidth`), N = a((e2, t2, n2, a2, o2, s2, c2) => {
  let l2 = new u({ compound: true, multigraph: true }), f2, p2 = true;
  for (f2 = 0; f2 < e2.length; f2++) if (e2[f2].stmt === `relation`) {
    p2 = false;
    break;
  }
  n2 ? l2.setGraph({ rankdir: `LR`, multigraph: true, compound: true, ranker: `tight-tree`, ranksep: p2 ? 1 : D.edgeLengthFactor, nodeSep: p2 ? 1 : 50, isMultiGraph: true }) : l2.setGraph({ rankdir: `TB`, multigraph: true, compound: true, ranksep: p2 ? 1 : D.edgeLengthFactor, nodeSep: p2 ? 1 : 50, ranker: `tight-tree`, isMultiGraph: true }), l2.setDefaultEdgeLabel(function() {
    return {};
  });
  let m2 = c2.db.getStates(), h2 = c2.db.getRelations(), g2 = Object.keys(m2);
  for (let e3 of g2) {
    let r2 = m2[e3];
    n2 && (r2.parentId = n2);
    let i2;
    if (r2.doc) {
      let e4 = t2.append(`g`).attr(`id`, r2.id).attr(`class`, `stateGroup`);
      i2 = N(r2.doc, e4, r2.id, !a2, o2, s2, c2);
      {
        e4 = y(e4, r2, a2);
        let t3 = e4.node().getBBox();
        i2.width = t3.width, i2.height = t3.height + D.padding / 2, O[r2.id] = { y: D.compositTitleSize };
      }
    } else i2 = w(t2, r2, l2);
    if (r2.note) {
      let e4 = w(t2, { descriptions: [], id: r2.id + `-note`, note: r2.note, type: `note` }, l2);
      r2.note.position === `left of` ? (l2.setNode(i2.id + `-note`, e4), l2.setNode(i2.id, i2)) : (l2.setNode(i2.id, i2), l2.setNode(i2.id + `-note`, e4)), l2.setParent(i2.id, i2.id + `-group`), l2.setParent(i2.id + `-note`, i2.id + `-group`);
    } else l2.setNode(i2.id, i2);
  }
  i.debug(`Count=`, l2.nodeCount(), l2);
  let _2 = 0;
  h2.forEach(function(e3) {
    _2++, i.debug(`Setting edge`, e3), l2.setEdge(e3.id1, e3.id2, { relation: e3, width: M(e3.title), height: D.labelHeight * r.getRows(e3.title).length, labelpos: `c` }, `id` + _2);
  }), d(l2), i.debug(`Graph after layout`, l2.nodes());
  let v2 = t2.node();
  l2.nodes().forEach(function(e3) {
    e3 !== void 0 && l2.node(e3) !== void 0 ? (i.warn(`Node ` + e3 + `: ` + JSON.stringify(l2.node(e3))), o2.select(`#` + v2.id + ` #` + e3).attr(`transform`, `translate(` + (l2.node(e3).x - l2.node(e3).width / 2) + `,` + (l2.node(e3).y + (O[e3] ? O[e3].y : 0) - l2.node(e3).height / 2) + ` )`), o2.select(`#` + v2.id + ` #` + e3).attr(`data-x-shift`, l2.node(e3).x - l2.node(e3).width / 2), s2.querySelectorAll(`#` + v2.id + ` #` + e3 + ` .divider`).forEach((e4) => {
      let t3 = e4.parentElement, n3 = 0, r2 = 0;
      t3 && (t3.parentElement && (n3 = t3.parentElement.getBBox().width), r2 = parseInt(t3.getAttribute(`data-x-shift`), 10), Number.isNaN(r2) && (r2 = 0)), e4.setAttribute(`x1`, 0 - r2 + 8), e4.setAttribute(`x2`, n3 - r2 - 8);
    })) : i.debug(`No Node ` + e3 + `: ` + JSON.stringify(l2.node(e3)));
  });
  let b2 = v2.getBBox();
  l2.edges().forEach(function(e3) {
    e3 !== void 0 && l2.edge(e3) !== void 0 && (i.debug(`Edge ` + e3.v + ` -> ` + e3.w + `: ` + JSON.stringify(l2.edge(e3))), E(t2, l2.edge(e3), l2.edge(e3).relation));
  }), b2 = v2.getBBox();
  let x2 = { id: n2 || `root`, label: n2 || `root`, width: 0, height: 0 };
  return x2.width = b2.width + 2 * D.padding, x2.height = b2.height + 2 * D.padding, i.debug(`Doc rendered`, x2, l2), x2;
}, `renderDoc`), P = { parser: p, get db() {
  return new m(1);
}, renderer: { setConf: k, draw: j }, styles: f, init: a((e2) => {
  e2.state || (e2.state = {}), e2.state.arrowMarkerAbsolute = e2.arrowMarkerAbsolute;
}, `init`) };
export {
  P as diagram
};
