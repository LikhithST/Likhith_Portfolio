import { B as e, En as t, Ft as n, Jn as r, Pt as i, Sn as a, Yn as o, gn as s, hn as c, un as l } from "./index-4Ava25sD.js";
import "./reduce-BYgg84dj.js";
import "./flatten-COzv_UkG.js";
import { t as u } from "./graphlib-ByIJZzv_.js";
import { t as d } from "./dagre-D5G0UzAB.js";
import "./chunk-55IACEB6-DmI8nO1B.js";
import "./chunk-EDXVE4YY-B3BtpSK2.js";
import { i as f, n as p, t as m } from "./chunk-OYMX7WX6-B8otJsbv.js";
var h = r((e2) => e2.append(`circle`).attr(`class`, `start-state`).attr(`r`, a().state.sizeUnit).attr(`cx`, a().state.padding + a().state.sizeUnit).attr(`cy`, a().state.padding + a().state.sizeUnit), `drawStartState`), g = r((e2) => e2.append(`line`).style(`stroke`, `grey`).style(`stroke-dasharray`, `3`).attr(`x1`, a().state.textHeight).attr(`class`, `divider`).attr(`x2`, a().state.textHeight * 2).attr(`y1`, 0).attr(`y2`, 0), `drawDivider`), _ = r((e2, t2) => {
  let n2 = e2.append(`text`).attr(`x`, 2 * a().state.padding).attr(`y`, a().state.textHeight + 2 * a().state.padding).attr(`font-size`, a().state.fontSize).attr(`class`, `state-title`).text(t2.id), r2 = n2.node().getBBox();
  return e2.insert(`rect`, `:first-child`).attr(`x`, a().state.padding).attr(`y`, a().state.padding).attr(`width`, r2.width + 2 * a().state.padding).attr(`height`, r2.height + 2 * a().state.padding).attr(`rx`, a().state.radius), n2;
}, `drawSimpleState`), v = r((e2, t2) => {
  let n2 = r(function(e3, t3, n3) {
    let r2 = e3.append(`tspan`).attr(`x`, 2 * a().state.padding).text(t3);
    n3 || r2.attr(`dy`, a().state.textHeight);
  }, `addTspan`), i2 = e2.append(`text`).attr(`x`, 2 * a().state.padding).attr(`y`, a().state.textHeight + 1.3 * a().state.padding).attr(`font-size`, a().state.fontSize).attr(`class`, `state-title`).text(t2.descriptions[0]).node().getBBox(), o2 = i2.height, s2 = e2.append(`text`).attr(`x`, a().state.padding).attr(`y`, o2 + a().state.padding * 0.4 + a().state.dividerMargin + a().state.textHeight).attr(`class`, `state-description`), c2 = true, l2 = true;
  t2.descriptions.forEach(function(e3) {
    c2 || (n2(s2, e3, l2), l2 = false), c2 = false;
  });
  let u2 = e2.append(`line`).attr(`x1`, a().state.padding).attr(`y1`, a().state.padding + o2 + a().state.dividerMargin / 2).attr(`y2`, a().state.padding + o2 + a().state.dividerMargin / 2).attr(`class`, `descr-divider`), d2 = s2.node().getBBox(), f2 = Math.max(d2.width, i2.width);
  return u2.attr(`x2`, f2 + 3 * a().state.padding), e2.insert(`rect`, `:first-child`).attr(`x`, a().state.padding).attr(`y`, a().state.padding).attr(`width`, f2 + 2 * a().state.padding).attr(`height`, d2.height + o2 + 2 * a().state.padding).attr(`rx`, a().state.radius), e2;
}, `drawDescrState`), y = r((e2, t2, n2) => {
  let r2 = a().state.padding, i2 = 2 * a().state.padding, o2 = e2.node().getBBox(), s2 = o2.width, c2 = o2.x, l2 = e2.append(`text`).attr(`x`, 0).attr(`y`, a().state.titleShift).attr(`font-size`, a().state.fontSize).attr(`class`, `state-title`).text(t2.id), u2 = l2.node().getBBox().width + i2, d2 = Math.max(u2, s2);
  d2 === s2 && (d2 += i2);
  let f2, p2 = e2.node().getBBox();
  t2.doc, f2 = c2 - r2, u2 > s2 && (f2 = (s2 - d2) / 2 + r2), Math.abs(c2 - p2.x) < r2 && u2 > s2 && (f2 = c2 - (u2 - s2) / 2);
  let m2 = 1 - a().state.textHeight;
  return e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, m2).attr(`class`, n2 ? `alt-composit` : `composit`).attr(`width`, d2).attr(`height`, p2.height + a().state.textHeight + a().state.titleShift + 1).attr(`rx`, `0`), l2.attr(`x`, f2 + r2), u2 <= s2 && l2.attr(`x`, c2 + (d2 - i2) / 2 - u2 / 2 + r2), e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, a().state.titleShift - a().state.textHeight - a().state.padding).attr(`width`, d2).attr(`height`, a().state.textHeight * 3).attr(`rx`, a().state.radius), e2.insert(`rect`, `:first-child`).attr(`x`, f2).attr(`y`, a().state.titleShift - a().state.textHeight - a().state.padding).attr(`width`, d2).attr(`height`, p2.height + 3 + 2 * a().state.textHeight).attr(`rx`, a().state.radius), e2;
}, `addTitleAndBox`), b = r((e2) => (e2.append(`circle`).attr(`class`, `end-state-outer`).attr(`r`, a().state.sizeUnit + a().state.miniPadding).attr(`cx`, a().state.padding + a().state.sizeUnit + a().state.miniPadding).attr(`cy`, a().state.padding + a().state.sizeUnit + a().state.miniPadding), e2.append(`circle`).attr(`class`, `end-state-inner`).attr(`r`, a().state.sizeUnit).attr(`cx`, a().state.padding + a().state.sizeUnit + 2).attr(`cy`, a().state.padding + a().state.sizeUnit + 2)), `drawEndState`), x = r((e2, t2) => {
  let n2 = a().state.forkWidth, r2 = a().state.forkHeight;
  if (t2.parentId) {
    let e3 = n2;
    n2 = r2, r2 = e3;
  }
  return e2.append(`rect`).style(`stroke`, `black`).style(`fill`, `black`).attr(`width`, n2).attr(`height`, r2).attr(`x`, a().state.padding).attr(`y`, a().state.padding);
}, `drawForkJoinState`), S = r((e2, t2, n2, r2) => {
  let i2 = 0, o2 = r2.append(`text`);
  o2.style(`text-anchor`, `start`), o2.attr(`class`, `noteText`);
  let s2 = e2.replace(/\r\n/g, `<br/>`);
  s2 = s2.replace(/\n/g, `<br/>`);
  let l2 = s2.split(c.lineBreakRegex), u2 = 1.25 * a().state.noteMargin;
  for (let e3 of l2) {
    let r3 = e3.trim();
    if (r3.length > 0) {
      let e4 = o2.append(`tspan`);
      if (e4.text(r3), u2 === 0) {
        let t3 = e4.node().getBBox();
        u2 += t3.height;
      }
      i2 += u2, e4.attr(`x`, t2 + a().state.noteMargin), e4.attr(`y`, n2 + i2 + 1.25 * a().state.noteMargin);
    }
  }
  return { textWidth: o2.node().getBBox().width, textHeight: i2 };
}, `_drawLongText`), C = r((e2, t2) => {
  t2.attr(`class`, `state-note`);
  let n2 = t2.append(`rect`).attr(`x`, 0).attr(`y`, a().state.padding), { textWidth: r2, textHeight: i2 } = S(e2, 0, 0, t2.append(`g`));
  return n2.attr(`height`, i2 + 2 * a().state.noteMargin), n2.attr(`width`, r2 + a().state.noteMargin * 2), n2;
}, `drawNote`), w = r(function(e2, t2) {
  let n2 = t2.id, r2 = { id: n2, label: t2.id, width: 0, height: 0 }, i2 = e2.append(`g`).attr(`id`, n2).attr(`class`, `stateGroup`);
  t2.type === `start` && h(i2), t2.type === `end` && b(i2), (t2.type === `fork` || t2.type === `join`) && x(i2, t2), t2.type === `note` && C(t2.note.text, i2), t2.type === `divider` && g(i2), t2.type === `default` && t2.descriptions.length === 0 && _(i2, t2), t2.type === `default` && t2.descriptions.length > 0 && v(i2, t2);
  let o2 = i2.node().getBBox();
  return r2.width = o2.width + 2 * a().state.padding, r2.height = o2.height + 2 * a().state.padding, r2;
}, `drawState`), T = 0, E = r(function(s2, l2, u2) {
  let d2 = r(function(e2) {
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
  l2.points = l2.points.filter((e2) => !Number.isNaN(e2.y));
  let f2 = l2.points, p2 = n().x(function(e2) {
    return e2.x;
  }).y(function(e2) {
    return e2.y;
  }).curve(i), h2 = s2.append(`path`).attr(`d`, p2(f2)).attr(`id`, `edge` + T).attr(`class`, `transition`), g2 = ``;
  if (a().state.arrowMarkerAbsolute && (g2 = t(true)), h2.attr(`marker-end`, `url(` + g2 + `#` + d2(m.relationType.DEPENDENCY) + `End)`), u2.title !== void 0) {
    let t2 = s2.append(`g`).attr(`class`, `stateLabel`), { x: n2, y: r2 } = e.calcLabelPosition(l2.points), i2 = c.getRows(u2.title), d3 = 0, f3 = [], p3 = 0, m2 = 0;
    for (let e2 = 0; e2 <= i2.length; e2++) {
      let a2 = t2.append(`text`).attr(`text-anchor`, `middle`).text(i2[e2]).attr(`x`, n2).attr(`y`, r2 + d3), s3 = a2.node().getBBox();
      p3 = Math.max(p3, s3.width), m2 = Math.min(m2, s3.x), o.info(s3.x, n2, r2 + d3), d3 === 0 && (d3 = a2.node().getBBox().height, o.info(`Title height`, d3, r2)), f3.push(a2);
    }
    let h3 = d3 * i2.length;
    if (i2.length > 1) {
      let e2 = (i2.length - 1) * d3 * 0.5;
      f3.forEach((t3, n3) => t3.attr(`y`, r2 + n3 * d3 - e2)), h3 = d3 * i2.length;
    }
    let g3 = t2.node().getBBox();
    t2.insert(`rect`, `:first-child`).attr(`class`, `box`).attr(`x`, n2 - p3 / 2 - a().state.padding / 2).attr(`y`, r2 - h3 / 2 - a().state.padding / 2 - 3.5).attr(`width`, p3 + a().state.padding).attr(`height`, h3 + a().state.padding), o.info(g3);
  }
  T++;
}, `drawEdge`), D, O = {}, k = r(function() {
}, `setConf`), A = r(function(e2) {
  e2.append(`defs`).append(`marker`).attr(`id`, `dependencyEnd`).attr(`refX`, 19).attr(`refY`, 7).attr(`markerWidth`, 20).attr(`markerHeight`, 28).attr(`orient`, `auto`).append(`path`).attr(`d`, `M 19,7 L9,13 L14,7 L9,1 Z`);
}, `insertMarkers`), j = r(function(e2, t2, n2, r2) {
  D = a().state;
  let i2 = a().securityLevel, c2;
  i2 === `sandbox` && (c2 = l(`#i` + t2));
  let u2 = l(i2 === `sandbox` ? c2.nodes()[0].contentDocument.body : `body`), d2 = i2 === `sandbox` ? c2.nodes()[0].contentDocument : document;
  o.debug(`Rendering diagram ` + e2);
  let f2 = u2.select(`[id='${t2}']`);
  A(f2), N(r2.db.getRootDoc(), f2.append(`g`).attr(`id`, t2 + `-root`), void 0, false, u2, d2, r2);
  let p2 = D.padding, m2 = f2.node().getBBox(), h2 = m2.width + p2 * 2, g2 = m2.height + p2 * 2;
  s(f2, g2, h2 * 1.75, D.useMaxWidth), f2.attr(`viewBox`, `${m2.x - D.padding}  ${m2.y - D.padding} ` + h2 + ` ` + g2);
}, `draw`), M = r((e2) => e2 ? e2.length * D.fontSizeFactor : 1, `getLabelWidth`), N = r((e2, t2, n2, r2, i2, a2, s2) => {
  let l2 = new u({ compound: true, multigraph: true }), f2, p2 = true;
  for (f2 = 0; f2 < e2.length; f2++) if (e2[f2].stmt === `relation`) {
    p2 = false;
    break;
  }
  n2 ? l2.setGraph({ rankdir: `LR`, multigraph: true, compound: true, ranker: `tight-tree`, ranksep: p2 ? 1 : D.edgeLengthFactor, nodeSep: p2 ? 1 : 50, isMultiGraph: true }) : l2.setGraph({ rankdir: `TB`, multigraph: true, compound: true, ranksep: p2 ? 1 : D.edgeLengthFactor, nodeSep: p2 ? 1 : 50, ranker: `tight-tree`, isMultiGraph: true }), l2.setDefaultEdgeLabel(function() {
    return {};
  });
  let m2 = s2.db.getStates(), h2 = s2.db.getRelations(), g2 = Object.keys(m2);
  for (let e3 of g2) {
    let o2 = m2[e3];
    n2 && (o2.parentId = n2);
    let c2;
    if (o2.doc) {
      let e4 = t2.append(`g`).attr(`id`, o2.id).attr(`class`, `stateGroup`);
      c2 = N(o2.doc, e4, o2.id, !r2, i2, a2, s2);
      {
        e4 = y(e4, o2, r2);
        let t3 = e4.node().getBBox();
        c2.width = t3.width, c2.height = t3.height + D.padding / 2, O[o2.id] = { y: D.compositTitleSize };
      }
    } else c2 = w(t2, o2, l2);
    if (o2.note) {
      let e4 = w(t2, { descriptions: [], id: o2.id + `-note`, note: o2.note, type: `note` }, l2);
      o2.note.position === `left of` ? (l2.setNode(c2.id + `-note`, e4), l2.setNode(c2.id, c2)) : (l2.setNode(c2.id, c2), l2.setNode(c2.id + `-note`, e4)), l2.setParent(c2.id, c2.id + `-group`), l2.setParent(c2.id + `-note`, c2.id + `-group`);
    } else l2.setNode(c2.id, c2);
  }
  o.debug(`Count=`, l2.nodeCount(), l2);
  let _2 = 0;
  h2.forEach(function(e3) {
    _2++, o.debug(`Setting edge`, e3), l2.setEdge(e3.id1, e3.id2, { relation: e3, width: M(e3.title), height: D.labelHeight * c.getRows(e3.title).length, labelpos: `c` }, `id` + _2);
  }), d(l2), o.debug(`Graph after layout`, l2.nodes());
  let v2 = t2.node();
  l2.nodes().forEach(function(e3) {
    e3 !== void 0 && l2.node(e3) !== void 0 ? (o.warn(`Node ` + e3 + `: ` + JSON.stringify(l2.node(e3))), i2.select(`#` + v2.id + ` #` + e3).attr(`transform`, `translate(` + (l2.node(e3).x - l2.node(e3).width / 2) + `,` + (l2.node(e3).y + (O[e3] ? O[e3].y : 0) - l2.node(e3).height / 2) + ` )`), i2.select(`#` + v2.id + ` #` + e3).attr(`data-x-shift`, l2.node(e3).x - l2.node(e3).width / 2), a2.querySelectorAll(`#` + v2.id + ` #` + e3 + ` .divider`).forEach((e4) => {
      let t3 = e4.parentElement, n3 = 0, r3 = 0;
      t3 && (t3.parentElement && (n3 = t3.parentElement.getBBox().width), r3 = parseInt(t3.getAttribute(`data-x-shift`), 10), Number.isNaN(r3) && (r3 = 0)), e4.setAttribute(`x1`, 0 - r3 + 8), e4.setAttribute(`x2`, n3 - r3 - 8);
    })) : o.debug(`No Node ` + e3 + `: ` + JSON.stringify(l2.node(e3)));
  });
  let b2 = v2.getBBox();
  l2.edges().forEach(function(e3) {
    e3 !== void 0 && l2.edge(e3) !== void 0 && (o.debug(`Edge ` + e3.v + ` -> ` + e3.w + `: ` + JSON.stringify(l2.edge(e3))), E(t2, l2.edge(e3), l2.edge(e3).relation));
  }), b2 = v2.getBBox();
  let x2 = { id: n2 || `root`, label: n2 || `root`, width: 0, height: 0 };
  return x2.width = b2.width + 2 * D.padding, x2.height = b2.height + 2 * D.padding, o.debug(`Doc rendered`, x2, l2), x2;
}, `renderDoc`), P = { parser: p, get db() {
  return new m(1);
}, renderer: { setConf: k, draw: j }, styles: f, init: r((e2) => {
  e2.state || (e2.state = {}), e2.state.arrowMarkerAbsolute = e2.arrowMarkerAbsolute;
}, `init`) };
export {
  P as diagram
};
