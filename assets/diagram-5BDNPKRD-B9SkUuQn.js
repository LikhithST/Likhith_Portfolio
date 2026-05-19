import { Cn as e, In as t, Jn as n, N as r, Nn as i, Nt as a, Pn as o, Yn as s, bn as c, gn as l, pn as u, vn as d, xn as f, yn as p } from "./index-4Ava25sD.js";
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
import { t as m } from "./chunk-4BX2VUAB-BsqOnTl0.js";
import { t as h } from "./mermaid-parser.core-C5_5uso8.js";
import { t as g } from "./chunk-QZHKN3VN-C3yDEL7O.js";
var _ = new g(() => ({ cnt: 1, stack: [{ id: 0, level: -1, name: `/`, children: [] }] })), v = n(() => {
  _.reset(), u();
}, `clear`), y = n(() => _.records.stack[0], `getRoot`), b = n(() => _.records.cnt, `getCount`), x = d.treeView, S = { clear: v, addNode: n((e2, t2) => {
  for (; e2 <= _.records.stack[_.records.stack.length - 1].level; ) _.records.stack.pop();
  let n2 = { id: _.records.cnt++, level: e2, name: t2, children: [] };
  _.records.stack[_.records.stack.length - 1].children.push(n2), _.records.stack.push(n2);
}, `addNode`), getRoot: y, getCount: b, getConfig: n(() => r(x, f().treeView), `getConfig`), getAccTitle: c, getAccDescription: p, getDiagramTitle: e, setAccDescription: i, setAccTitle: o, setDiagramTitle: t }, C = n((e2) => {
  m(e2, S), e2.nodes.map((e3) => S.addNode(e3.indent ? parseInt(e3.indent) : 0, e3.name));
}, `populate`), w = { parse: n(async (e2) => {
  let t2 = await h(`treeView`, e2);
  s.debug(t2), C(t2);
}, `parse`) }, T = n((e2, t2, n2, r2, i2) => {
  let a2 = r2.append(`text`).text(n2.name).attr(`dominant-baseline`, `middle`).attr(`class`, `treeView-node-label`), { height: o2, width: s2 } = a2.node().getBBox(), c2 = o2 + i2.paddingY * 2, l2 = s2 + i2.paddingX * 2;
  a2.attr(`x`, e2 + i2.paddingX), a2.attr(`y`, t2 + c2 / 2), n2.BBox = { x: e2, y: t2, width: l2, height: c2 };
}, `positionLabel`), E = n((e2, t2, n2, r2, i2, a2) => e2.append(`line`).attr(`x1`, t2).attr(`y1`, n2).attr(`x2`, r2).attr(`y2`, i2).attr(`stroke-width`, a2).attr(`class`, `treeView-node-line`), `positionLine`), D = n((e2, t2, r2) => {
  let i2 = 0, a2 = 0, o2 = n((e3, t3, n2, r3) => {
    let o3 = r3 * (n2.rowIndent + n2.paddingX);
    T(o3, i2, t3, e3, n2);
    let { height: s3, width: c2 } = t3.BBox;
    E(e3, o3 - n2.rowIndent, i2 + s3 / 2, o3, i2 + s3 / 2, n2.lineThickness), a2 = Math.max(a2, o3 + c2), i2 += s3;
  }, `drawNode`), s2 = n((t3, n2 = 0) => {
    o2(e2, t3, r2, n2), t3.children.forEach((e3) => {
      s2(e3, n2 + 1);
    });
    let { x: i3, y: a3, height: c2 } = t3.BBox;
    if (t3.children.length) {
      let { y: n3, height: o3 } = t3.children[t3.children.length - 1].BBox;
      E(e2, i3 + r2.paddingX, a3 + c2, i3 + r2.paddingX, n3 + o3 / 2 + r2.lineThickness / 2, r2.lineThickness);
    }
  }, `processNode`);
  return s2(t2), { totalHeight: i2, totalWidth: a2 };
}, `drawTree`), O = { draw: n((e2, t2, n2, r2) => {
  s.debug(`Rendering treeView diagram
` + e2);
  let i2 = r2.db, o2 = i2.getRoot(), c2 = i2.getConfig(), u2 = a(t2), d2 = u2.append(`g`);
  d2.attr(`class`, `tree-view`);
  let { totalHeight: f2, totalWidth: p2 } = D(d2, o2, c2);
  u2.attr(`viewBox`, `-${c2.lineThickness / 2} 0 ${p2} ${f2}`), l(u2, f2, p2, c2.useMaxWidth);
}, `draw`) }, k = { labelFontSize: `16px`, labelColor: `black`, lineColor: `black` }, A = { db: S, renderer: O, parser: w, styles: n(({ treeView: e2 }) => {
  let { labelFontSize: t2, labelColor: n2, lineColor: i2 } = r(k, e2);
  return `
    .treeView-node-label {
        font-size: ${t2};
        fill: ${n2};
    }
    .treeView-node-line {
        stroke: ${i2};
    }
    `;
}, `styles`) };
export {
  A as diagram
};
