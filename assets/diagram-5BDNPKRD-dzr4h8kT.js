import { B as e, C as t, V as n, W as r, _ as i, a, c as o, d as s, v as c, y as l } from "./chunk-ICPOFSXX-cosQBm9P.js";
import { g as u, h as d } from "./src-DiRGiyL4.js";
import "./dist-BhM2qfql.js";
import { i as f } from "./chunk-5PVQY5BW-BPITZuxu.js";
import { t as p } from "./chunk-426QAEUC-DnOBqw_y.js";
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
import { t as m } from "./chunk-4BX2VUAB-Zt4DWBfT.js";
import { t as h } from "./mermaid-parser.core-BhyjZala.js";
import { t as g } from "./chunk-QZHKN3VN-CoRl2cAx.js";
var _ = new g(() => ({ cnt: 1, stack: [{ id: 0, level: -1, name: `/`, children: [] }] })), v = d(() => {
  _.reset(), a();
}, `clear`), y = d(() => _.records.stack[0], `getRoot`), b = d(() => _.records.cnt, `getCount`), x = s.treeView, S = { clear: v, addNode: d((e2, t2) => {
  for (; e2 <= _.records.stack[_.records.stack.length - 1].level; ) _.records.stack.pop();
  let n2 = { id: _.records.cnt++, level: e2, name: t2, children: [] };
  _.records.stack[_.records.stack.length - 1].children.push(n2), _.records.stack.push(n2);
}, `addNode`), getRoot: y, getCount: b, getConfig: d(() => f(x, l().treeView), `getConfig`), getAccTitle: c, getAccDescription: i, getDiagramTitle: t, setAccDescription: e, setAccTitle: n, setDiagramTitle: r }, C = d((e2) => {
  m(e2, S), e2.nodes.map((e3) => S.addNode(e3.indent ? parseInt(e3.indent) : 0, e3.name));
}, `populate`), w = { parse: d(async (e2) => {
  let t2 = await h(`treeView`, e2);
  u.debug(t2), C(t2);
}, `parse`) }, T = d((e2, t2, n2, r2, i2) => {
  let a2 = r2.append(`text`).text(n2.name).attr(`dominant-baseline`, `middle`).attr(`class`, `treeView-node-label`), { height: o2, width: s2 } = a2.node().getBBox(), c2 = o2 + i2.paddingY * 2, l2 = s2 + i2.paddingX * 2;
  a2.attr(`x`, e2 + i2.paddingX), a2.attr(`y`, t2 + c2 / 2), n2.BBox = { x: e2, y: t2, width: l2, height: c2 };
}, `positionLabel`), E = d((e2, t2, n2, r2, i2, a2) => e2.append(`line`).attr(`x1`, t2).attr(`y1`, n2).attr(`x2`, r2).attr(`y2`, i2).attr(`stroke-width`, a2).attr(`class`, `treeView-node-line`), `positionLine`), D = d((e2, t2, n2) => {
  let r2 = 0, i2 = 0, a2 = d((e3, t3, n3, a3) => {
    let o3 = a3 * (n3.rowIndent + n3.paddingX);
    T(o3, r2, t3, e3, n3);
    let { height: s2, width: c2 } = t3.BBox;
    E(e3, o3 - n3.rowIndent, r2 + s2 / 2, o3, r2 + s2 / 2, n3.lineThickness), i2 = Math.max(i2, o3 + c2), r2 += s2;
  }, `drawNode`), o2 = d((t3, r3 = 0) => {
    a2(e2, t3, n2, r3), t3.children.forEach((e3) => {
      o2(e3, r3 + 1);
    });
    let { x: i3, y: s2, height: c2 } = t3.BBox;
    if (t3.children.length) {
      let { y: r4, height: a3 } = t3.children[t3.children.length - 1].BBox;
      E(e2, i3 + n2.paddingX, s2 + c2, i3 + n2.paddingX, r4 + a3 / 2 + n2.lineThickness / 2, n2.lineThickness);
    }
  }, `processNode`);
  return o2(t2), { totalHeight: r2, totalWidth: i2 };
}, `drawTree`), O = { draw: d((e2, t2, n2, r2) => {
  u.debug(`Rendering treeView diagram
` + e2);
  let i2 = r2.db, a2 = i2.getRoot(), s2 = i2.getConfig(), c2 = p(t2), l2 = c2.append(`g`);
  l2.attr(`class`, `tree-view`);
  let { totalHeight: d2, totalWidth: f2 } = D(l2, a2, s2);
  c2.attr(`viewBox`, `-${s2.lineThickness / 2} 0 ${f2} ${d2}`), o(c2, d2, f2, s2.useMaxWidth);
}, `draw`) }, k = { labelFontSize: `16px`, labelColor: `black`, lineColor: `black` }, A = { db: S, renderer: O, parser: w, styles: d(({ treeView: e2 }) => {
  let { labelFontSize: t2, labelColor: n2, lineColor: r2 } = f(k, e2);
  return `
    .treeView-node-label {
        font-size: ${t2};
        fill: ${n2};
    }
    .treeView-node-line {
        stroke: ${r2};
    }
    `;
}, `styles`) };
export {
  A as diagram
};
