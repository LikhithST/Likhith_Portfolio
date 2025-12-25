var _a;
import { B as e, C as t, U as n, _ as r, a as i, c as a, d as o, v as s, y as c, z as l } from "./chunk-ABZYJK2D-ODb6qSou.js";
import { g as u, h as d, p as f } from "./src-D8UWkQNo.js";
import { t as p } from "./ordinal-Bps6pt-l.js";
import { t as m } from "./defaultLocale-Dzu6vUN4.js";
import "./init-BBmXJqXp.js";
import "./math-O_7OW4FW.js";
import { i as h } from "./chunk-S3R3BYOJ-D8yhV3IZ.js";
import { t as g } from "./chunk-EXTU4WIE-K1dhFJK1.js";
import { i as _, n as v } from "./chunk-ATLVNIR6-6j91LnhU.js";
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
import { t as y } from "./chunk-4BX2VUAB-DvcVo9Pr.js";
import { t as b } from "./mermaid-parser.core-pDIzeYSr.js";
import { t as x } from "./chunk-QN33PNHL-BgmhZT4q.js";
function S(e3) {
  var t2 = 0, n2 = e3.children, r2 = n2 && n2.length;
  if (!r2) t2 = 1;
  else for (; --r2 >= 0; ) t2 += n2[r2].value;
  e3.value = t2;
}
function C() {
  return this.eachAfter(S);
}
function w(e3, t2) {
  let n2 = -1;
  for (let r2 of this) e3.call(t2, r2, ++n2, this);
  return this;
}
function T(e3, t2) {
  for (var n2 = this, r2 = [n2], i2, a2, o2 = -1; n2 = r2.pop(); ) if (e3.call(t2, n2, ++o2, this), i2 = n2.children) for (a2 = i2.length - 1; a2 >= 0; --a2) r2.push(i2[a2]);
  return this;
}
function E(e3, t2) {
  for (var n2 = this, r2 = [n2], i2 = [], a2, o2, s2, c2 = -1; n2 = r2.pop(); ) if (i2.push(n2), a2 = n2.children) for (o2 = 0, s2 = a2.length; o2 < s2; ++o2) r2.push(a2[o2]);
  for (; n2 = i2.pop(); ) e3.call(t2, n2, ++c2, this);
  return this;
}
function D(e3, t2) {
  let n2 = -1;
  for (let r2 of this) if (e3.call(t2, r2, ++n2, this)) return r2;
}
function O(e3) {
  return this.eachAfter(function(t2) {
    for (var n2 = +e3(t2.data) || 0, r2 = t2.children, i2 = r2 && r2.length; --i2 >= 0; ) n2 += r2[i2].value;
    t2.value = n2;
  });
}
function k(e3) {
  return this.eachBefore(function(t2) {
    t2.children && t2.children.sort(e3);
  });
}
function A(e3) {
  for (var t2 = this, n2 = j(t2, e3), r2 = [t2]; t2 !== n2; ) t2 = t2.parent, r2.push(t2);
  for (var i2 = r2.length; e3 !== n2; ) r2.splice(i2, 0, e3), e3 = e3.parent;
  return r2;
}
function j(e3, t2) {
  if (e3 === t2) return e3;
  var n2 = e3.ancestors(), r2 = t2.ancestors(), i2 = null;
  for (e3 = n2.pop(), t2 = r2.pop(); e3 === t2; ) i2 = e3, e3 = n2.pop(), t2 = r2.pop();
  return i2;
}
function M() {
  for (var e3 = this, t2 = [e3]; e3 = e3.parent; ) t2.push(e3);
  return t2;
}
function N() {
  return Array.from(this);
}
function P() {
  var e3 = [];
  return this.eachBefore(function(t2) {
    t2.children || e3.push(t2);
  }), e3;
}
function F() {
  var e3 = this, t2 = [];
  return e3.each(function(n2) {
    n2 !== e3 && t2.push({ source: n2.parent, target: n2 });
  }), t2;
}
function* I() {
  var e3 = this, t2, n2 = [e3], r2, i2, a2;
  do
    for (t2 = n2.reverse(), n2 = []; e3 = t2.pop(); ) if (yield e3, r2 = e3.children) for (i2 = 0, a2 = r2.length; i2 < a2; ++i2) n2.push(r2[i2]);
  while (n2.length);
}
function L(e3, t2) {
  e3 instanceof Map ? (e3 = [void 0, e3], t2 === void 0 && (t2 = B)) : t2 === void 0 && (t2 = z);
  for (var n2 = new U(e3), r2, i2 = [n2], a2, o2, s2, c2; r2 = i2.pop(); ) if ((o2 = t2(r2.data)) && (c2 = (o2 = Array.from(o2)).length)) for (r2.children = o2, s2 = c2 - 1; s2 >= 0; --s2) i2.push(a2 = o2[s2] = new U(o2[s2])), a2.parent = r2, a2.depth = r2.depth + 1;
  return n2.eachBefore(H);
}
function R() {
  return L(this).eachBefore(V);
}
function z(e3) {
  return e3.children;
}
function B(e3) {
  return Array.isArray(e3) ? e3[1] : null;
}
function V(e3) {
  e3.data.value !== void 0 && (e3.value = e3.data.value), e3.data = e3.data.data;
}
function H(e3) {
  var t2 = 0;
  do
    e3.height = t2;
  while ((e3 = e3.parent) && e3.height < ++t2);
}
function U(e3) {
  this.data = e3, this.depth = this.height = 0, this.parent = null;
}
U.prototype = L.prototype = { constructor: U, count: C, each: w, eachAfter: E, eachBefore: T, find: D, sum: O, sort: k, path: A, ancestors: M, descendants: N, leaves: P, links: F, copy: R, [Symbol.iterator]: I };
function W(e3) {
  if (typeof e3 != `function`) throw Error();
  return e3;
}
function G() {
  return 0;
}
function K(e3) {
  return function() {
    return e3;
  };
}
function q(e3) {
  e3.x0 = Math.round(e3.x0), e3.y0 = Math.round(e3.y0), e3.x1 = Math.round(e3.x1), e3.y1 = Math.round(e3.y1);
}
function J(e3, t2, n2, r2, i2) {
  for (var a2 = e3.children, o2, s2 = -1, c2 = a2.length, l2 = e3.value && (r2 - t2) / e3.value; ++s2 < c2; ) o2 = a2[s2], o2.y0 = n2, o2.y1 = i2, o2.x0 = t2, o2.x1 = t2 += o2.value * l2;
}
function ee(e3, t2, n2, r2, i2) {
  for (var a2 = e3.children, o2, s2 = -1, c2 = a2.length, l2 = e3.value && (i2 - n2) / e3.value; ++s2 < c2; ) o2 = a2[s2], o2.x0 = t2, o2.x1 = r2, o2.y0 = n2, o2.y1 = n2 += o2.value * l2;
}
var te = (1 + Math.sqrt(5)) / 2;
function ne(e3, t2, n2, r2, i2, a2) {
  for (var o2 = [], s2 = t2.children, c2, l2, u2 = 0, d2 = 0, f2 = s2.length, p2, m2, h2 = t2.value, g2, _2, v2, y2, b2, x2, S2; u2 < f2; ) {
    p2 = i2 - n2, m2 = a2 - r2;
    do
      g2 = s2[d2++].value;
    while (!g2 && d2 < f2);
    for (_2 = v2 = g2, x2 = Math.max(m2 / p2, p2 / m2) / (h2 * e3), S2 = g2 * g2 * x2, b2 = Math.max(v2 / S2, S2 / _2); d2 < f2; ++d2) {
      if (g2 += l2 = s2[d2].value, l2 < _2 && (_2 = l2), l2 > v2 && (v2 = l2), S2 = g2 * g2 * x2, y2 = Math.max(v2 / S2, S2 / _2), y2 > b2) {
        g2 -= l2;
        break;
      }
      b2 = y2;
    }
    o2.push(c2 = { value: g2, dice: p2 < m2, children: s2.slice(u2, d2) }), c2.dice ? J(c2, n2, r2, i2, h2 ? r2 += m2 * g2 / h2 : a2) : ee(c2, n2, r2, h2 ? n2 += p2 * g2 / h2 : i2, a2), h2 -= g2, u2 = d2;
  }
  return o2;
}
var re = (function e2(t2) {
  function n2(e3, n3, r2, i2, a2) {
    ne(t2, e3, n3, r2, i2, a2);
  }
  return n2.ratio = function(t3) {
    return e2((t3 = +t3) > 1 ? t3 : 1);
  }, n2;
})(te);
function ie() {
  var e3 = re, t2 = false, n2 = 1, r2 = 1, i2 = [0], a2 = G, o2 = G, s2 = G, c2 = G, l2 = G;
  function u2(e4) {
    return e4.x0 = e4.y0 = 0, e4.x1 = n2, e4.y1 = r2, e4.eachBefore(d2), i2 = [0], t2 && e4.eachBefore(q), e4;
  }
  function d2(t3) {
    var n3 = i2[t3.depth], r3 = t3.x0 + n3, u3 = t3.y0 + n3, d3 = t3.x1 - n3, f2 = t3.y1 - n3;
    d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f2 < u3 && (u3 = f2 = (u3 + f2) / 2), t3.x0 = r3, t3.y0 = u3, t3.x1 = d3, t3.y1 = f2, t3.children && (n3 = i2[t3.depth + 1] = a2(t3) / 2, r3 += l2(t3) - n3, u3 += o2(t3) - n3, d3 -= s2(t3) - n3, f2 -= c2(t3) - n3, d3 < r3 && (r3 = d3 = (r3 + d3) / 2), f2 < u3 && (u3 = f2 = (u3 + f2) / 2), e3(t3, r3, u3, d3, f2));
  }
  return u2.round = function(e4) {
    return arguments.length ? (t2 = !!e4, u2) : t2;
  }, u2.size = function(e4) {
    return arguments.length ? (n2 = +e4[0], r2 = +e4[1], u2) : [n2, r2];
  }, u2.tile = function(t3) {
    return arguments.length ? (e3 = W(t3), u2) : e3;
  }, u2.padding = function(e4) {
    return arguments.length ? u2.paddingInner(e4).paddingOuter(e4) : u2.paddingInner();
  }, u2.paddingInner = function(e4) {
    return arguments.length ? (a2 = typeof e4 == `function` ? e4 : K(+e4), u2) : a2;
  }, u2.paddingOuter = function(e4) {
    return arguments.length ? u2.paddingTop(e4).paddingRight(e4).paddingBottom(e4).paddingLeft(e4) : u2.paddingTop();
  }, u2.paddingTop = function(e4) {
    return arguments.length ? (o2 = typeof e4 == `function` ? e4 : K(+e4), u2) : o2;
  }, u2.paddingRight = function(e4) {
    return arguments.length ? (s2 = typeof e4 == `function` ? e4 : K(+e4), u2) : s2;
  }, u2.paddingBottom = function(e4) {
    return arguments.length ? (c2 = typeof e4 == `function` ? e4 : K(+e4), u2) : c2;
  }, u2.paddingLeft = function(e4) {
    return arguments.length ? (l2 = typeof e4 == `function` ? e4 : K(+e4), u2) : l2;
  }, u2;
}
var Y = (_a = class {
  constructor() {
    this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.setAccTitle = e, this.getAccTitle = s, this.setDiagramTitle = n, this.getDiagramTitle = t, this.getAccDescription = r, this.setAccDescription = l;
  }
  getNodes() {
    return this.nodes;
  }
  getConfig() {
    let e3 = o, t2 = c();
    return h({ ...e3.treemap, ...t2.treemap ?? {} });
  }
  addNode(e3, t2) {
    this.nodes.push(e3), this.levels.set(e3, t2), t2 === 0 && (this.outerNodes.push(e3), this.root ?? (this.root = e3));
  }
  getRoot() {
    return { name: ``, children: this.outerNodes };
  }
  addClass(e3, t2) {
    let n2 = this.classes.get(e3) ?? { id: e3, styles: [], textStyles: [] }, r2 = t2.replace(/\\,/g, `\xA7\xA7\xA7`).replace(/,/g, `;`).replace(/§§§/g, `,`).split(`;`);
    r2 && r2.forEach((e4) => {
      v(e4) && ((n2 == null ? void 0 : n2.textStyles) ? n2.textStyles.push(e4) : n2.textStyles = [e4]), (n2 == null ? void 0 : n2.styles) ? n2.styles.push(e4) : n2.styles = [e4];
    }), this.classes.set(e3, n2);
  }
  getClasses() {
    return this.classes;
  }
  getStylesForClass(e3) {
    var _a2;
    return ((_a2 = this.classes.get(e3)) == null ? void 0 : _a2.styles) ?? [];
  }
  clear() {
    i(), this.nodes = [], this.levels = /* @__PURE__ */ new Map(), this.outerNodes = [], this.classes = /* @__PURE__ */ new Map(), this.root = void 0;
  }
}, d(_a, `TreeMapDB`), _a);
function X(e3) {
  if (!e3.length) return [];
  let t2 = [], n2 = [];
  return e3.forEach((e4) => {
    let r2 = { name: e4.name, children: e4.type === `Leaf` ? void 0 : [] };
    for (r2.classSelector = e4 == null ? void 0 : e4.classSelector, (e4 == null ? void 0 : e4.cssCompiledStyles) && (r2.cssCompiledStyles = [e4.cssCompiledStyles]), e4.type === `Leaf` && e4.value !== void 0 && (r2.value = e4.value); n2.length > 0 && n2[n2.length - 1].level >= e4.level; ) n2.pop();
    if (n2.length === 0) t2.push(r2);
    else {
      let e5 = n2[n2.length - 1].node;
      e5.children ? e5.children.push(r2) : e5.children = [r2];
    }
    e4.type !== `Leaf` && n2.push({ node: r2, level: e4.level });
  }), t2;
}
d(X, `buildHierarchy`);
var ae = d((e3, t2) => {
  y(e3, t2);
  let n2 = [];
  for (let n3 of e3.TreemapRows ?? []) n3.$type === `ClassDefStatement` && t2.addClass(n3.className ?? ``, n3.styleText ?? ``);
  for (let r3 of e3.TreemapRows ?? []) {
    let e4 = r3.item;
    if (!e4) continue;
    let i3 = r3.indent ? parseInt(r3.indent) : 0, a2 = oe(e4), o2 = e4.classSelector ? t2.getStylesForClass(e4.classSelector) : [], s2 = o2.length > 0 ? o2.join(`;`) : void 0, c2 = { level: i3, name: a2, type: e4.$type, value: e4.value, classSelector: e4.classSelector, cssCompiledStyles: s2 };
    n2.push(c2);
  }
  let r2 = X(n2), i2 = d((e4, n3) => {
    for (let r3 of e4) t2.addNode(r3, n3), r3.children && r3.children.length > 0 && i2(r3.children, n3 + 1);
  }, `addNodesRecursively`);
  i2(r2, 0);
}, `populate`), oe = d((e3) => e3.name ? String(e3.name) : ``, `getItemName`), Z = { parser: { yy: void 0 }, parse: d(async (e3) => {
  var _a2;
  try {
    let t2 = await b(`treemap`, e3);
    u.debug(`Treemap AST:`, t2);
    let n2 = (_a2 = Z.parser) == null ? void 0 : _a2.yy;
    if (!(n2 instanceof Y)) throw Error(`parser.parser?.yy was not a TreemapDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.`);
    ae(t2, n2);
  } catch (e4) {
    throw u.error(`Error parsing treemap:`, e4), e4;
  }
}, `parse`) }, se = 10, Q = 10, $ = 25, ce = { draw: d((e3, t2, n2, r2) => {
  let i2 = r2.db, o2 = i2.getConfig(), s2 = o2.padding ?? se, l2 = i2.getDiagramTitle(), h2 = i2.getRoot(), { themeVariables: v2 } = c();
  if (!h2) return;
  let y2 = l2 ? 30 : 0, b2 = g(t2), S2 = o2.nodeWidth ? o2.nodeWidth * Q : 960, C2 = o2.nodeHeight ? o2.nodeHeight * Q : 500, w2 = S2, T2 = C2 + y2;
  b2.attr(`viewBox`, `0 0 ${w2} ${T2}`), a(b2, T2, w2, o2.useMaxWidth);
  let E2;
  try {
    let e4 = o2.valueFormat || `,`;
    if (e4 === `$0,0`) E2 = d((e5) => `$` + m(`,`)(e5), `valueFormat`);
    else if (e4.startsWith(`$`) && e4.includes(`,`)) {
      let t3 = /\.\d+/.exec(e4), n3 = t3 ? t3[0] : ``;
      E2 = d((e5) => `$` + m(`,` + n3)(e5), `valueFormat`);
    } else if (e4.startsWith(`$`)) {
      let t3 = e4.substring(1);
      E2 = d((e5) => `$` + m(t3 || ``)(e5), `valueFormat`);
    } else E2 = m(e4);
  } catch (e4) {
    u.error(`Error creating format function:`, e4), E2 = m(`,`);
  }
  let D2 = p().range([`transparent`, v2.cScale0, v2.cScale1, v2.cScale2, v2.cScale3, v2.cScale4, v2.cScale5, v2.cScale6, v2.cScale7, v2.cScale8, v2.cScale9, v2.cScale10, v2.cScale11]), O2 = p().range([`transparent`, v2.cScalePeer0, v2.cScalePeer1, v2.cScalePeer2, v2.cScalePeer3, v2.cScalePeer4, v2.cScalePeer5, v2.cScalePeer6, v2.cScalePeer7, v2.cScalePeer8, v2.cScalePeer9, v2.cScalePeer10, v2.cScalePeer11]), k2 = p().range([v2.cScaleLabel0, v2.cScaleLabel1, v2.cScaleLabel2, v2.cScaleLabel3, v2.cScaleLabel4, v2.cScaleLabel5, v2.cScaleLabel6, v2.cScaleLabel7, v2.cScaleLabel8, v2.cScaleLabel9, v2.cScaleLabel10, v2.cScaleLabel11]);
  l2 && b2.append(`text`).attr(`x`, w2 / 2).attr(`y`, y2 / 2).attr(`class`, `treemapTitle`).attr(`text-anchor`, `middle`).attr(`dominant-baseline`, `middle`).text(l2);
  let A2 = b2.append(`g`).attr(`transform`, `translate(0, ${y2})`).attr(`class`, `treemapContainer`), j2 = L(h2).sum((e4) => e4.value ?? 0).sort((e4, t3) => (t3.value ?? 0) - (e4.value ?? 0)), M2 = ie().size([S2, C2]).paddingTop((e4) => e4.children && e4.children.length > 0 ? $ + Q : 0).paddingInner(s2).paddingLeft((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingRight((e4) => e4.children && e4.children.length > 0 ? Q : 0).paddingBottom((e4) => e4.children && e4.children.length > 0 ? Q : 0).round(true)(j2), N2 = M2.descendants().filter((e4) => e4.children && e4.children.length > 0), P2 = A2.selectAll(`.treemapSection`).data(N2).enter().append(`g`).attr(`class`, `treemapSection`).attr(`transform`, (e4) => `translate(${e4.x0},${e4.y0})`);
  P2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, $).attr(`class`, `treemapSectionHeader`).attr(`fill`, `none`).attr(`fill-opacity`, 0.6).attr(`stroke-width`, 0.6).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : ``), P2.append(`clipPath`).attr(`id`, (e4, n3) => `clip-section-${t2}-${n3}`).append(`rect`).attr(`width`, (e4) => Math.max(0, e4.x1 - e4.x0 - 12)).attr(`height`, $), P2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0).attr(`class`, (e4, t3) => `treemapSection section${t3}`).attr(`fill`, (e4) => D2(e4.data.name)).attr(`fill-opacity`, 0.6).attr(`stroke`, (e4) => O2(e4.data.name)).attr(`stroke-width`, 2).attr(`stroke-opacity`, 0.4).attr(`style`, (e4) => {
    if (e4.depth === 0) return `display: none;`;
    let t3 = _({ cssCompiledStyles: e4.data.cssCompiledStyles });
    return t3.nodeStyles + `;` + t3.borderStyles.join(`;`);
  }), P2.append(`text`).attr(`class`, `treemapSectionLabel`).attr(`x`, 6).attr(`y`, $ / 2).attr(`dominant-baseline`, `middle`).text((e4) => e4.depth === 0 ? `` : e4.data.name).attr(`font-weight`, `bold`).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : `dominant-baseline: middle; font-size: 12px; fill:` + k2(e4.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + _({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).each(function(e4) {
    if (e4.depth === 0) return;
    let t3 = f(this), n3 = e4.data.name;
    t3.text(n3);
    let r3 = e4.x1 - e4.x0, i3;
    i3 = o2.showValues !== false && e4.value ? r3 - 10 - 30 - 10 - 6 : r3 - 6 - 6;
    let a2 = Math.max(15, i3), s3 = t3.node();
    if (s3.getComputedTextLength() > a2) {
      let e5 = n3;
      for (; e5.length > 0; ) {
        if (e5 = n3.substring(0, e5.length - 1), e5.length === 0) {
          t3.text(`...`), s3.getComputedTextLength() > a2 && t3.text(``);
          break;
        }
        if (t3.text(e5 + `...`), s3.getComputedTextLength() <= a2) break;
      }
    }
  }), o2.showValues !== false && P2.append(`text`).attr(`class`, `treemapSectionValue`).attr(`x`, (e4) => e4.x1 - e4.x0 - 10).attr(`y`, $ / 2).attr(`text-anchor`, `end`).attr(`dominant-baseline`, `middle`).text((e4) => e4.value ? E2(e4.value) : ``).attr(`font-style`, `italic`).attr(`style`, (e4) => e4.depth === 0 ? `display: none;` : `text-anchor: end; dominant-baseline: middle; font-size: 10px; fill:` + k2(e4.data.name) + `; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` + _({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`));
  let F2 = M2.leaves(), I2 = A2.selectAll(`.treemapLeafGroup`).data(F2).enter().append(`g`).attr(`class`, (e4, t3) => `treemapNode treemapLeafGroup leaf${t3}${e4.data.classSelector ? ` ${e4.data.classSelector}` : ``}x`).attr(`transform`, (e4) => `translate(${e4.x0},${e4.y0})`);
  I2.append(`rect`).attr(`width`, (e4) => e4.x1 - e4.x0).attr(`height`, (e4) => e4.y1 - e4.y0).attr(`class`, `treemapLeaf`).attr(`fill`, (e4) => e4.parent ? D2(e4.parent.data.name) : D2(e4.data.name)).attr(`style`, (e4) => _({ cssCompiledStyles: e4.data.cssCompiledStyles }).nodeStyles).attr(`fill-opacity`, 0.3).attr(`stroke`, (e4) => e4.parent ? D2(e4.parent.data.name) : D2(e4.data.name)).attr(`stroke-width`, 3), I2.append(`clipPath`).attr(`id`, (e4, n3) => `clip-${t2}-${n3}`).append(`rect`).attr(`width`, (e4) => Math.max(0, e4.x1 - e4.x0 - 4)).attr(`height`, (e4) => Math.max(0, e4.y1 - e4.y0 - 4)), I2.append(`text`).attr(`class`, `treemapLabel`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, (e4) => (e4.y1 - e4.y0) / 2).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: middle; font-size: 38px;fill:` + k2(e4.data.name) + `;` + _({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e4, n3) => `url(#clip-${t2}-${n3})`).text((e4) => e4.data.name).each(function(e4) {
    let t3 = f(this), n3 = e4.x1 - e4.x0, r3 = e4.y1 - e4.y0, i3 = t3.node(), a2 = n3 - 8, o3 = r3 - 8;
    if (a2 < 10 || o3 < 10) {
      t3.style(`display`, `none`);
      return;
    }
    let s3 = parseInt(t3.style(`font-size`), 10), c2 = 0.6;
    for (; i3.getComputedTextLength() > a2 && s3 > 8; ) s3--, t3.style(`font-size`, `${s3}px`);
    let l3 = Math.max(6, Math.min(28, Math.round(s3 * c2))), u2 = s3 + 2 + l3;
    for (; u2 > o3 && s3 > 8 && (s3--, l3 = Math.max(6, Math.min(28, Math.round(s3 * c2))), !(l3 < 6 && s3 === 8)); ) t3.style(`font-size`, `${s3}px`), u2 = s3 + 2 + l3;
    t3.style(`font-size`, `${s3}px`), (i3.getComputedTextLength() > a2 || s3 < 8 || o3 < s3) && t3.style(`display`, `none`);
  }), o2.showValues !== false && I2.append(`text`).attr(`class`, `treemapValue`).attr(`x`, (e4) => (e4.x1 - e4.x0) / 2).attr(`y`, function(e4) {
    return (e4.y1 - e4.y0) / 2;
  }).attr(`style`, (e4) => `text-anchor: middle; dominant-baseline: hanging; font-size: 28px;fill:` + k2(e4.data.name) + `;` + _({ cssCompiledStyles: e4.data.cssCompiledStyles }).labelStyles.replace(`color:`, `fill:`)).attr(`clip-path`, (e4, n3) => `url(#clip-${t2}-${n3})`).text((e4) => e4.value ? E2(e4.value) : ``).each(function(e4) {
    let t3 = f(this), n3 = this.parentNode;
    if (!n3) {
      t3.style(`display`, `none`);
      return;
    }
    let r3 = f(n3).select(`.treemapLabel`);
    if (r3.empty() || r3.style(`display`) === `none`) {
      t3.style(`display`, `none`);
      return;
    }
    let i3 = parseFloat(r3.style(`font-size`)), a2 = Math.max(6, Math.min(28, Math.round(i3 * 0.6)));
    t3.style(`font-size`, `${a2}px`);
    let o3 = (e4.y1 - e4.y0) / 2 + i3 / 2 + 2;
    t3.attr(`y`, o3);
    let s3 = e4.x1 - e4.x0, c2 = e4.y1 - e4.y0 - 4, l3 = s3 - 8;
    t3.node().getComputedTextLength() > l3 || o3 + a2 > c2 || a2 < 6 ? t3.style(`display`, `none`) : t3.style(`display`, null);
  }), x(b2, o2.diagramPadding ?? 8, `flowchart`, (o2 == null ? void 0 : o2.useMaxWidth) || false);
}, `draw`), getClasses: d(function(e3, t2) {
  return t2.db.getClasses();
}, `getClasses`) }, le = { sectionStrokeColor: `black`, sectionStrokeWidth: `1`, sectionFillColor: `#efefef`, leafStrokeColor: `black`, leafStrokeWidth: `1`, leafFillColor: `#efefef`, labelColor: `black`, labelFontSize: `12px`, valueFontSize: `10px`, valueColor: `black`, titleColor: `black`, titleFontSize: `14px` }, ue = { parser: Z, get db() {
  return new Y();
}, renderer: ce, styles: d(({ treemap: e3 } = {}) => {
  let t2 = h(le, e3);
  return `
  .treemapNode.section {
    stroke: ${t2.sectionStrokeColor};
    stroke-width: ${t2.sectionStrokeWidth};
    fill: ${t2.sectionFillColor};
  }
  .treemapNode.leaf {
    stroke: ${t2.leafStrokeColor};
    stroke-width: ${t2.leafStrokeWidth};
    fill: ${t2.leafFillColor};
  }
  .treemapLabel {
    fill: ${t2.labelColor};
    font-size: ${t2.labelFontSize};
  }
  .treemapValue {
    fill: ${t2.valueColor};
    font-size: ${t2.valueFontSize};
  }
  .treemapTitle {
    fill: ${t2.titleColor};
    font-size: ${t2.titleFontSize};
  }
  `;
}, `getStyles`) };
export {
  ue as diagram
};
